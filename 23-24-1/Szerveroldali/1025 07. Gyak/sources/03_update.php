<?php
public function update(Request $request, string $id)
{
    if(!auth()->check()) {
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

    $post = Post::findOrFail($id);
    $post->update([
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
    $image_src = $post->image_hash_name ?? 'default.jpg';

    $request->session()->flash('updated_just_now', true);

    return redirect()->route('posts.show', [
        'post' => $post,
        'image_src' => $image_src,
        'topics' => $topics,
    ]);
}