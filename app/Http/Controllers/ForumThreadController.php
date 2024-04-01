<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\ForumThread;
use Illuminate\Http\Request;


class ForumThreadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Get all forum threads
        return ForumThread::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // create a new forum thread
        $request = validate([
            'title' => 'required',
            'content' => 'required'
        ]);

        $thread = new ForumThread();

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
