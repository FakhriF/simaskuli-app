<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ForumThread extends Model
{
    use HasFactory;

    protected $table = 'forum_thread';


    protected $fillable = [
        'user_id',
        'title',
        'content'
    ];


}
