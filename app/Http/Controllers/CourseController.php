<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Course;
use App\Models\User;
use Illuminate\Http\Request;


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

    
    public function getById(int $id)
    {
        // get one specific data based on id
        //$a = Course::with('thread', 'user')->where('id', $id)->get();

        
        // Get the course with the specified ID
        return Course::find($id);
    }

}
