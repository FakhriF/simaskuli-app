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

        // Try to create a new enrollment or throw an error if it already exists
        try {
            $enrollment = Enrollment::create([
                'user_id' => $request->input('user_id'),
                'course_id' => $request->input('course_id'),
            ]);
            return response()->json($enrollment, 201);
        } catch (\Illuminate\Database\QueryException $e) {
            return response()->json(['error' => 'Enrollment already exists'], 409);
        }
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
        $deletedRows = Enrollment::where('course_id', $course_id)
            ->where('user_id', $user_id)
            ->delete();

        if ($deletedRows === 0) {
            return response()->json(['error' => 'Enrollment not found'], 404);
        }

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
