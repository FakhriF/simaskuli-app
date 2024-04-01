<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User as ModelsUser;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
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

    public function editUser(Request $request)
    {

        $token = $request->bearerToken();

        $user_id = \App\Models\Session::where('payload', $token)->first()->user_id;

        //if found, call function update in user controller
        if ($user_id) {
            (new \App\Http\Controllers\UserController())->update($request, $user_id);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'User not found',
            ], 404);
        }
    }

    public function changePassword(Request $request)
    {

        $token = $request->bearerToken();

        $user_id = \App\Models\Session::where('payload', $token)->first()->user_id;

        if ($user_id) {
            // check the oldPassword is matched
            $user = ModelsUser::find($user_id);

            if (!Hash::check($request->input('oldPassword'), $user->password)) {
                return response()->json([
                    'success' => false,
                    'message' => 'Old password is not matched',
                ], 401);
            } else {
                $request->validate([
                    'newPassword' => 'required|min:8',
                ]);

                //make bcrypt the newPassword
                $user->password = bcrypt($request->input('newPassword'));

                $user->save();

                return response()->json([
                    'success' => true,
                    'message' => 'Password changed successfully',
                ], 200);
            }
        }
    }

    public function getAllSession(Request $request)
    {

        $token = $request->bearerToken();

        $user_id = \App\Models\Session::where('payload', $token)->first()->user_id;

        if ($user_id) {

            $sessions = \App\Models\Session::where('user_id', $user_id)->get();

            // parse the sessions information to readable format
            $sessions->transform(function ($session) {
                $session->last_activity_parse  = \Carbon\Carbon::createFromTimestamp($session->last_activity)->diffForHumans();

                // parse user agent to show the devices used eg Windows NT 10.0
                $session->user_agent = substr($session->user_agent, strpos($session->user_agent, '(') + 1, strpos($session->user_agent, ';') - strpos($session->user_agent, '(') - 1);

                return $session;
            });

            return response()->json([
                'data' => $sessions
            ], 200);
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
        $request->validate([
            'name' => 'required',
            'birthDate' => 'required',
        ]);

        $user = ModelsUser::find($id);

        $user->update($request->all());
        return response()->json([
            'message' => 'User updated successfully',
            'success' => true
        ]);
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
