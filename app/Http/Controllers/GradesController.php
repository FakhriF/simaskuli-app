<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Grades;
use App\Models\Course;

class GradesController extends Controller
{
    public function getGrades()
    {
        return Grades::all();
    }

    //bisa buat teacher karena ngelihatnya berdasarkan course
    public function getGradesByCourseId(string $courseId)
    {
        $CourseGrades = Grades::with('course', 'user')->where('course_id', $courseId)->get();

        return response()->json($CourseGrades, 200);
    }

    //untuk per siswa
    public function showUserGradesOnCourse(string $courseId, string $userId)
    {
        $userGradesonCourse = Grades::with('course', 'user', 'quiz')->where('course_id', $courseId)->where('student_id', $userId)->get();
        return response()->json($userGradesonCourse, 200);
    }


}
