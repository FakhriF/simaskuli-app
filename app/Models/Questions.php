<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Quiz;

class Questions extends Model
{
    use HasFactory;

    protected $table = 'questions';

    protected $fillable = [
        'question_text', 
        'option1',
        'option2', 
        'option3', 
        'option4', 
        'quiz_id',
        'correct_answer',
    ];

    public function quiz(){
        return $this->belongsTo(Quiz::class, 'quiz_id', 'id');
    }
}
