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
