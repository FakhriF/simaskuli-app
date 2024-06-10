<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quiz as ModelsQuiz;
use App\Models\User;
use App\Models\Questions as ModelsQuestions;


class QuizController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return ModelsQuiz::all();
    }
    public function getQuizById(int $id){

        return ModelsQuiz::find($id);
    }

    public function getQuestionsByQuizId($quizId)
    {
    // Mengambil kuis berdasarkan ID
    $quiz = Quiz::findOrFail($quizId);

    // Mengambil pertanyaan yang terkait dengan kuis
    $questions = $quiz->questions;

    // Mengembalikan respons JSON dengan pertanyaan yang ditemukan
    return response()->json($questions, 200);
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $user_id = $request->input('user_id');
        
        $user = User::find($user_id);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        
        // Create a new forum thread
        $quiz = new ModelsQuiz();
        $quiz->title = $request->input('title');
        $quiz->description = $request->input('description');
        $quiz->dueDate = $request->input('dueDate');
        $quiz->course_id = 11;
        $quiz->save();
        
        return response()->json($quiz, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
}
