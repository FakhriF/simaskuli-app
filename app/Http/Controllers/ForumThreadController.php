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
        // Get all forum threads
        return ForumThread::with('user')->get();
        
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
        try {
            // Validate the request data (you can add more validation rules as needed)
            $validatedData = $request->validate([
                'title' => 'required|string|max:255',
                'content' => 'required|string',
            ]);
    
            // Take the request (which is token)
            $token = $request->bearerToken();
    
            // Make sure the token exists
            if (!$token) {
                return response()->json(['error' => 'Invalid session token.'], 401);
            }
    
            // Get the session corresponding to the token
            $session = Session::where('payload', $token)->first();
    
            // Make sure the session exists
            if (!$session) {
                return response()->json(['error' => 'Invalid session token.'], 401);
            }
    
            // Get the user id from the session
            $user_id = $session->user_id;
    
            // Create a new forum thread with the received data and the user's ID
            $thread = new ForumThread();
            $thread->title = $validatedData['title'];
            $thread->content = $validatedData['content'];
            $thread->user_id = $user_id;
            $thread->save();
    
            // Optionally, return a response indicating success
            return response()->json(['message' => 'Forum thread created successfully'], 201);
        } catch (QueryException $e) {
            // Log the error
            \Log::error($e);
            
            // Return a response indicating the failure
            return response()->json(['error' => 'An error occurred while creating the forum thread.'], 500);
        }
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
