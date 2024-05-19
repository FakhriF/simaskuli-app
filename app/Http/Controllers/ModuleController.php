<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Illuminate\Http\Request;

class ModuleController extends Controller
{
        /**
     * Display a listing of the resource.
     */
    public function getModules()
    {
        // Get all courses
        return Module::all();
    }

}
