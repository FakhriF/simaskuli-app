<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Questions;
use App\Models\Quiz;

class QuestionsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Questions::with('quiz')->get();

    }
    public function getQuestionsById(int $id)
    {
        return Questions::find($id);
    }
    public function getQuestionsByQuizId(int $id)
    {
        //
        return Questions::where('quiz_id', $id)->with('quiz')->get();
    }

    public function store(Request $request)
    {
        //
        $questions = new Questions();
        $questions->question_text = $request->input('question_text');
        $questions->option1 = $request->input('option1');
        $questions->option2 = $request->input('option2');
        $questions->option3 = $request->input('option3');
        $questions->option4 = $request->input('option4');
        $questions->correct_answer = $request->input('correct_answer');
        $questions->quiz_id = $request->input('quiz_id');
        $questions->save();
        
        return response()->json($questions, 201);
    }

    
    
    public function update(Request $request, $id)
    {
        $questions = Questions::find($id);
        if (!$questions) {
            return response()->json(['error' => 'Question not found'], 404);
        }

        $questions->question_text = $request->input('question_text', $questions->question_text);
        $questions->option1 = $request->input('option1', $questions->option1);
        $questions->option2 = $request->input('option2', $questions->option2);
        $questions->option3 = $request->input('option3', $questions->option3);
        $questions->option4 = $request->input('option4', $questions->option4);
        $questions->correct_answer = $request->input('correct_answer', $questions->correct_answer);
        $questions->quiz_id = $request->input('quiz_id', $questions->quiz_id);
        $questions->save();
        
        return response()->json($questions);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        $questions = Questions::find($id);
        if (!$questions) {
            return response()->json(['error' => 'Questions not found'], 404);
        }

        $questions->delete();

        return response()->json(['message' => 'Questions deleted successfully']);
    }
}
