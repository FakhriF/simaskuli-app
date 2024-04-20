<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ForumThread;
use App\Models\User;
use App\Models\Session;


class ForumThreadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $perPage = 2; 
        $threads = ForumThread::with('user')->paginate($perPage);

        return response()->json([
        'data' => $threads->items(),
        'meta' => [
            'current_page' => $threads->currentPage(),
            'total_pages' => $threads->lastPage(),
        ],
    ]);
        
    }

    public function getForumThread(string $id)
    {
        // Get the forum thread with the specified ID
        $thread = ForumThread::with('user')->find($id);
        
        // Make sure the forum thread exists
        if (!$thread) {
            return response()->json(['error' => 'Forum thread not found'], 404);
        }
        
        return $thread;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // Get the user ID from the request
        $user_id = $request->input('user_id');
        
        $user = User::find($user_id);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        
        // Create a new forum thread
        $thread = new ForumThread();
        $thread->title = $request->input('title');
        $thread->content = $request->input('content');
        $thread->user_id = $user_id;
        $thread->save();
        
        return response()->json($thread, 201);
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
