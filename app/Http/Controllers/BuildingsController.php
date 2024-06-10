<?php

namespace App\Http\Controllers;

use App\Models\Building;
use App\Models\Course;
use Illuminate\Http\Request;

class BuildingsController extends Controller
{
    public function index()
    {
        return Building::all();
    }

    public function getBuildingByCourseId($courseId)
    {
        $CourseBuilding = Course::join('buildings', 'courses.building_id', '=', 'buildings.id')
        ->where('courses.id', '=', $courseId)
        ->select('courses.*', 'buildings.building_name as building_name', 'buildings.longitude as longitude', 'buildings.latitude as latitude')
        ->get();

        return response()->json($CourseBuilding, 200);
    }
}
