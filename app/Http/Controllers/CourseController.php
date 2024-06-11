<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Course;
use App\Models\User;

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

    /**
     * Display the specified resource.
     */
    public function getById(int $id)
    {
        // Get the course with the specified ID
        $course = Course::find($id);

        if (!$course) {
            return response()->json(['error' => 'Course not found'], 404);
        }

        return response()->json($course);
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
        
        // Create a new course
        $course = new Course();
        $course->title = $request->input('title');
        $course->description = $request->input('description');
        $course->learning_outcomes = $request->input('learning_outcomes');
        $course->image_url = $request->input('image_url');
        $course->user_id = $user_id;
        $course->save();
        
        return response()->json($course, 201);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $course = Course::find($id);
        if (!$course) {
            return response()->json(['error' => 'Course not found'], 404);
        }

        $course->title = $request->input('title', $course->title);
        $course->description = $request->input('description', $course->description);
        $course->learning_outcomes = $request->input('learning_outcomes', $course->learning_outcomes);
        $course->image_url = $request->input('image_url', $course->image_url);
        $course->save();

        return response()->json($course);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $course = Course::find($id);
        if (!$course) {
            return response()->json(['error' => 'Course not found'], 404);
        }

        $course->delete();

        return response()->json(['message' => 'Course deleted successfully']);
    }
}
