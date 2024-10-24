<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Post;
use App\Models\Topic;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::all();
        $topics = Topic::all();
        return view('posts.index', [
            'posts' => $posts,
            'topics' => $topics
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('posts.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|min:3|max:255',
            'topics' => 'array|required|min:1',
            'topics.*' => 'distinct',
            'content' => 'required|min:10',
            'attach_file' => 'nullable|file|max:4096|mimes:txt,doc,docx,pdf',
            'attach_image' => 'nullable|file|max:4096|mimes:png,jpg,jpeg'
        ],
        [
            'required' => 'Ez egy kötelező mező :attribute',
            'title.required' => 'A titlenek specifikusabb required hibaüzenete van.'
        ]);
    
        $attachment_hash_name = null;
        $attachment_file_name = null;
        $image_hash_name = null;
    
        if($request->hasFile('attach_file')) {
            $file = $request->file('attach_file');
            $attachment_file_name = $file->getClientOriginalName();
            $attachment_hash_name = $file->hashName();
            Storage::disk('public')->put('files/' . $attachment_hash_name, $file->get());
        }
        
        if($request->hasFile('attach_image')) {
            $file = $request->file('attach_image');
            $image_hash_name = $file->hashName();
            Storage::disk('public')->put('images/' . $image_hash_name, $file->get());
        }
    
        Post::create([
            'title' => $request->title,
            'desc' => $request->desc,
            'author' => $request->author,
            'topics' => json_encode($request->topics),
            'content' => $request->content,
            'attachment_file_name' => $attachment_hash_name,
            'attachment_hash_name' => $attachment_file_name,
            'image_hash_name' => $image_hash_name
        ]);

        return redirect()->route('posts.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = Auth::user();
        $post = Post::find($id);
        return view('posts.show', [
            'post' => $post,
            'email' => $user->email ?? null
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
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
