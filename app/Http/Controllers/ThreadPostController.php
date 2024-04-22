<?php

namespace App\Http\Controllers;
use App\Models\Thread;
use App\Models\User;
use App\Models\ThreadPost;
use Illuminate\Http\Request;

class ThreadPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $threadPosts = ThreadPost::with('thread', 'user')->get();

        return response()->json($threadPosts, 200);
    }

    public function getPostsByThreadId(string $threadId)
    {
        $threadPosts = ThreadPost::with('thread', 'user')->where('thread_id', $threadId)->get();

        return response()->json($threadPosts, 200);
    }

    public function showPost(string $threadId, string $postId)
    {
        $threadPost = ThreadPost::with('thread', 'user')->where('thread_id', $threadId)->where('id', $postId)->get();
        return response()->json($threadPost, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $threadPost = new ThreadPost();
        $threadPost->thread_id = $request->thread_id;
        $threadPost->user_id = $request->user_id;
        $threadPost->content = $request->content;
        $threadPost->save();

        return response()->json($threadPost, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
        $threadPost = ThreadPost::find($id);
        if (!$threadPost) {
            return response()->json(['error' => 'Post not found'], 404);
        }

        $threadPost->content = $request->input('content');
        $threadPost->save();

        return response()->json($threadPost, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //

    }
    public function destroySinglePost(string $threadId, string $postId)
    {
        $threadPost = ThreadPost::where('thread_id', $threadId)->where('id', $postId)->first();
    
        if (!$threadPost) {
            return response()->json(['error' => 'Post not found'], 404);
        }
    
        $threadPost->delete();
    
        return response()->json(['message' => 'Post deleted'], 200);
    }
    



}
