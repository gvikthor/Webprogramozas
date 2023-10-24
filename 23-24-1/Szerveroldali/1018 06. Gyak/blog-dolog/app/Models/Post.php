<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [ 'title', 'desc', 'author', 'topics', 'attachment_file_name', 'attachment_hash_name', 'image_hash_name' ];
}


