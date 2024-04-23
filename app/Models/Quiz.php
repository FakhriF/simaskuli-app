<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Course;
use App\Models\Questions;

class Quiz extends Model
{
    use HasFactory;

    protected $table = 'quiz';

    protected $fillable = ['title', 'description', 'dueDate'];

    public function course(){
        return $this->belongsTo(Course::class, 'course_id', 'id');
    }

    public function questions()
    {
        return $this->hasMany(Questions::class);
    }
}
