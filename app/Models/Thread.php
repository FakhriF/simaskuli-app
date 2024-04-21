<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    use HasFactory;

    protected $table = 'forum_thread';


    protected $fillable = [
        'title',
        'content'
    ];


    public function user(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }



}
