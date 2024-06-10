<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Thread;
use App\Models\User;
use App\Models\Session;
use Illuminate\Database\Eloquent\Builder;


class ThreadController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $threads = Thread::with('user')->get();
    
        return response()->json([
            'data' => $threads,
        ]);
    }

    public function search(Request $request)
    {
        $users = Thread::query()
                 ->when(
                    $request->search,
                    function(Builder $builder) use ($request){
                        $builder->where('title', 'ilike', "%{$request->search}%")
                        ->orWhere('content', 'ilike', "%{$request->search}%");
                    }
                 )->paginate(5);
                 
        return $users;
    }



    public function getForumThread(string $id)
    {
        $thread = Thread::with('user')->find($id);
        
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
        $user_id = $request->input('user_id');
        
        $user = User::find($user_id);
        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        
        // Create a new forum thread
        $thread = new Thread();
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
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $thread = Thread::find($id);
        if (!$thread) {
            return response()->json(['error' => 'Thread not found'], 404);
        }
        
        $thread->title = $request->input('title');
        $thread->content = $request->input('content');
        $thread->save();
        
        return response()->json($thread, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Delete Thread
        $thread = Thread::find($id);
        if (!$thread) {
            return response()->json(['error' => 'Thread not found'], 404);
        }

        $thread->delete();

        return response()->json(['message' => 'Thread deleted successfully'], 200);
        
    }
}
