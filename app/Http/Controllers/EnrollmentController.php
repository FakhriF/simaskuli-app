<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Enrollment;
use App\Models\Course;
use App\Models\User;

class EnrollmentController extends Controller
{
    public function index()
    {
        return Enrollment::all();
    }

    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'course_id' => 'required|exists:courses,id',
        ]);

        // Check if the user exists
        $user = User::find($request->input('user_id'));
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        // Check if the course exists
        $course = Course::find($request->input('course_id'));
        if (!$course) {
            return response()->json(['error' => 'Course not found'], 404);
        }

        // Create a new enrollment
        $enrollment = new Enrollment();
        $enrollment->user_id = $request->input('user_id');
        $enrollment->course_id = $request->input('course_id');
        $enrollment->save();

        return response()->json($enrollment, 201);
    }   

    // Get enrollments by user_id
    public function getByUserId($user_id)
    {
        $enrollment = Enrollment::where('user_id', $user_id)->get();
        return response()->json($enrollment);
    }

    // Get enrollments by course_id
    public function getByCourseId($course_id)
    {
        $enrollment = Enrollment::where('course_id', $course_id)->get();
        return response()->json($enrollment);
    }

    // Delete an enrollment by course_id and user_id
    public function destroy($course_id, $user_id)
    {
        $enrollment = Enrollment::where('course_id', $course_id)
            ->where('user_id', $user_id)
            ->first();

        if (!$enrollment) {
            return response()->json(['error' => 'Enrollment not found'], 404);
        }

        $enrollment->delete();

        return response()->json(['message' => 'Enrollment deleted successfully']);
    }

    // Check if enrollment exists by course_id and user_id
    public function checkEnrollment($course_id, $user_id)
    {
        $enrollment = Enrollment::where('course_id', $course_id)
            ->where('user_id', $user_id)
            ->exists();

        return response()->json(['exists' => $enrollment]);
    }
}
