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

    public function getGrades2()
    {
    return Grades::join('quiz', 'grade.quiz_id', '=', 'quiz.id')
                 ->join('course', 'quiz.course_id', '=', 'course.course_id')
                 ->select('grade.*', 'quiz.title as quiz_title', 'course.title as course_title')
                 ->get();
    }

    //bisa buat teacher karena ngelihatnya berdasarkan course
    public function getGradesByCourseId(string $courseId)
    {
        $CourseGrades = Grades::join('quiz', 'grades.quiz_id', '=', 'quiz.id')
        ->join('courses', 'quiz.course_id', '=', 'courses.id')
        ->where('courses.id', '=', $courseId)
        ->select('grades.*', 'quiz.title as quiz_title', 'courses.title as course_title')
        ->get();

        // Grades::with('course', 'user')->where('course_id', $courseId)->get();
        return response()->json($CourseGrades, 200);
    }

    //untuk per siswa
    public function showUserGradesOnCourse(string $courseId, string $userId)
    {
        $userGradesonCourse = Grades::join('quiz', 'grades.quiz_id', '=', 'quiz.id')
        ->join('courses', 'quiz.course_id', '=', 'courses.id')
        ->where('courses.id', '=', $courseId)
        ->where('grades.student_id', '=', $userId)
        ->select('grades.*', 'quiz.title as quiz_title', 'courses.title as course_title')
        ->get();

        // $userGradesonCourse = Grades::with('course', 'user', 'quiz')->where('course_id', $courseId)->where('student_id', $userId)->get();
        return response()->json($userGradesonCourse, 200);
    }


}
