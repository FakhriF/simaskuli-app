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

    // Check if enrollment exists by course_id and user_id
    public function checkEnrollment($course_id, $user_id)
    {
        $enrollment = Enrollment::where('course_id', $course_id)
            ->where('user_id', $user_id)
            ->exists();

        return response()->json(['exists' => $enrollment]);
    }

    // Store an enrollment
    public function store(Request $request)
    {
        // Validate the request data
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'course_id' => 'required|exists:courses,id',
        ]);

        // Check if the enrollment already exists
        $checkResponse = $this->checkEnrollment($request->input('course_id'), $request->input('user_id'))->getData();
        if ($checkResponse->exists) {
            return response()->json(['error' => 'Enrollment already exists'], 409);
        }

        // Create a new enrollment
        try {
            $enrollment = new Enrollment();
            $enrollment->user_id = $request->input('user_id');
            $enrollment->course_id = $request->input('course_id');
            $enrollment->save();

            return response()->json($enrollment, 201);
        } catch (\Illuminate\Database\QueryException $e) {
            \Log::error('Database Query Exception: '.$e->getMessage());
            return response()->json(['error' => 'An error occurred while creating the enrollment: ' . $e->getMessage()], 500);
        } catch (\Exception $e) {
            \Log::error('General Exception: '.$e->getMessage());
            return response()->json(['error' => 'An unexpected error occurred: ' . $e->getMessage()], 500);
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
}
