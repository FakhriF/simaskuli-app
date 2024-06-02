<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
        /**
     * Display a listing of the resource.
     */
    public function getModulesByCourseId(string $courseId)
    {
        $moduleOnCourse = Module::where('course_id', $courseId)->get();
        return response()->json($moduleOnCourse, 200);
    }
}
