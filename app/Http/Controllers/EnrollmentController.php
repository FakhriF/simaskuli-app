<?php

namespace App\Http\Controllers;

use App\Models\Enrollment;
use Illuminate\Http\Request;

class EnrollmentController extends Controller
{
    public function index()
    {
        return Enrollment::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'course_id' => 'required|exists:courses,id',
        ]);

        $enrollment = Enrollment::create($request->all());

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

    // Delete an enrollment by user_id and course_id
    public function destroy(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'course_id' => 'required|exists:courses,id',
        ]);

        $enrollment = Enrollment::where('user_id', $request->user_id)
            ->where('course_id', $request->course_id)
            ->first();

        if (!$enrollment) {
            return response()->json(['error' => 'Enrollment not found'], 404);
        }

        $enrollment->delete();

        return response()->json(['message' => 'Enrollment deleted successfully']);
    }
}
