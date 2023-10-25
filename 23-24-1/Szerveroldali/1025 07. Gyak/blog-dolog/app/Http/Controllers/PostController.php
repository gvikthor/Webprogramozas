<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Topic;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('posts.index', [
            'posts' => Post::all(),
            'topics' => Topic::all(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        if(!auth()->check()){
            return redirect()->route('login');
        }
        if(auth()->user()->name != 'Thor'){
            return abort(403);
        }

        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if(!auth()->check() || auth()->user()->name != 'Thor'){
            return abort(403);
        }

        $request->validate([
            'title' => 'required|min:5|max:50',
            'desc'  => 'required|min:15|max:250',
            'topics' => 'required|array|min:1',
            'topics.*' => 'distinct',
            'attach_file' => 'nullable|file|mimes:txt,doc,docx,pdf,xls|max:4096',
            'attach_image' => 'nullable|file|mimes:jpg,jpeg,png|max:4096',
        ], [
            'required' => 'Jaj ne, ez muszáj 😠',
            'title.required' => 'Cím hol van haló',
        ]);
    
        $attach_hash_name = null;
        $attach_file_name = null;
        $image_hash_name = null;
    
        if ($request->hasFile('attach_file')) {
            $file = $request->file('attach_file');
            $attach_file_name = $file->getClientOriginalName();
            $attach_hash_name = $file->hashName();
            Storage::disk('public')->put('files/' . $attach_hash_name, $file->get());
        }
    
        if ($request->hasFile('attach_image')) {
            $file = $request->file('attach_image');
            $image_hash_name = $file->hashName();
            Storage::disk('public')->put('images/' . $image_hash_name, $file->get());
        }
    
        $post = Post::create([
            'title' => $request->title,
            'desc' => $request->desc,
            'author' => auth()->user()->name,
            'topics' => json_encode($request->topics),
            'attachment_file_name' => $attach_file_name,
            'attachment_hash_name' => $attach_hash_name,
            'image_hash_name' => $image_hash_name,
        ]);

        $topic_names = json_decode($post->topics);
        $topics = Topic::whereIn('shortname', $topic_names)->get();

        $image_name = $post->image_hash_name ?? 'default.jpg';

        $request->session()->flash('created_just_now', true);

        return redirect()->route('posts.show', [
            "post" => $post,
            'image_name' => $image_name,
            'topics' => $topics,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        $topic_names = json_decode($post->topics);
        $topics = Topic::whereIn('shortname', $topic_names)->get();

        $image_name = $post->image_hash_name ?? 'default.jpg';
        return view('posts.show', [
            'post' => $post,
            'image_name' => $image_name,
            'topics' => $topics,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        if(!auth()->check()){
            return redirect()->route('login');
        }
        /*if(auth()->user()->name != 'Thor'){
            return abort(403);
        }*/

        $post = Post::findOrFail($id);

        return view('posts.edit', [
            'post' => $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
