<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;


class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function view()
    {
        // Get all courses
        return Course::all();
    }

    
    public function getById(int $id)
    {
        // get one specific data based on id
        //$a = Course::with('thread', 'user')->where('id', $id)->get();

        
        // Get the course with the specified ID
        return Course::find($id);
    }

    public function store(Request $request)
    {
        $user_id = $request->input('user_id');
        
        $user = User::find($user_id);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        
        // Create a new forum thread
        $course = new Course();
        $course->title = $request->input('title');
        $course->description = $request->input('description');
        $course->learning_outcomes = $request->input('learning_outcomes');
        $course->image_url = $request->input('image_url');
        $course->user_id = $user_id;
        $course->save();
        
        return response()->json($course, 201);
    }

}
