<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User as ModelsUser;
use Illuminate\Http\Request;
use User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return ModelsUser::all();
    }

    public function getUser(Request $request)
    {
        // Take the request (which is token)
        $token = $request->bearerToken();

        // Get the user id from the token in sessions
        $user_id = \App\Models\Session::where('payload', $token)->first()->user_id;

        // Get the user from the user id
        return ModelsUser::find($user_id);
    }

    public function deleteUser(Request $request)
    {
        $token = $request->bearerToken();

        $user_id = \App\Models\Session::where('payload', $token)->first()->user_id;

        if ($user_id) {
            ModelsUser::destroy($user_id);

            // call logout method in authController
            (new \App\Http\Controllers\AuthController())->logout($request);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'User not found',
            ], 404);
        }
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
        // $user_name = $request->input('name');
        // $user_email = $request->input('email');
        // $user_password = $request->input('password');
        // $user_role = $request->input('role');
        // $user_birthdate = $request->input('birthdate');

        // $user = ModelsUser::create([
        //     'name' => $user_name,
        //     'email' => $user_email,
        //     'password' => $user_password,
        //     'role' => $user_role,
        //     'birthdate' => $user_birthdate

        // ]);

        // // $user->save();

        // return response()->json([
        //     'data' =>  $user,
        // ], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return ModelsUser::find($id);
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
        $user = ModelsUser::find($id);

        if ($user) {
            $user->delete();
        }
    }
}
