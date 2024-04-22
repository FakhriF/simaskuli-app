<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ThreadPost extends Model
{
    use HasFactory;

    protected $table = 'thread_post';

    protected $fillable = [
        'content',
        'like'
    ];

    public function thread()
    {
        return $this->belongsTo(Thread::class, 'thread_id', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }
}
