<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Quiz as ModelsQuiz;
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
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
