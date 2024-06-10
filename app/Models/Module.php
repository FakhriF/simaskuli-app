<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'learning_achievements',
        'learning_materials',
        'video_link',
        'note_link',
    ];
}
