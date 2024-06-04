<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Quiz extends Model
{
    use HasFactory;
    protected $table = 'quiz';

    public function course()
    {
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }
}
