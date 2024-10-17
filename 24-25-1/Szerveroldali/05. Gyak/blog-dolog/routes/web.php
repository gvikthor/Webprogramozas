<?php

use App\Http\Controllers\ProfileController;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/posts/create', function () {
    return view('posts.create');
})->name('posts.create');

Route::post('/posts/store', function (Request $request) {
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
})->name('posts.store');

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
