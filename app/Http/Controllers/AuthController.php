<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Session;
use Illuminate\Support\Str;

use App\Models\User;
use DateTime;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $email = $request->input('email');
        // $password = bcrypt($request->input('password'));

        $user = User::where('email', $email)->first();

        if ($user && Hash::check($request->input('password'), $user->password)) {

            // if request rememeber_token is true then create new remember token
            // if ($request->input('remember') == true) {
            //     $token = hash('sha256', Str::random(60));
            //     $user->remember_token = $token;
            //     $user->save();
            // } else {
            //     $token = hash('sha256', Str::random(60));
            // }

            $token = hash('sha256', Str::random(60));

            // Set the token to sessions database
            $session = new \App\Models\Session();
            $session->id = hash('sha256', Str::random(60));
            $session->user_id = $user->id;
            $session->ip_address = $request->ip();
            $session->user_agent = $request->header('User-Agent');
            $session->payload = $token;
            $session->last_activity = time();

            $session->save();

            return response()->json([
                'success' => true,
                'access_token' => $token,

            ], 200);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Invalid email or password'
            ], 401);
        }
    }


    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'role' => 'required',
            'birthDate' => 'required',
        ]);

        $user = User::create([
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password')),
            'role' => $request->input('role'),
            'birthDate' => new DateTime($request->input('birthDate')),
        ]);

        // if create success, create token and return it
        if ($user) {

            $token = hash('sha256', Str::random(60));

            // Set the token to sessions database
            $session = new \App\Models\Session();
            $session->id = hash('sha256', Str::random(60));
            $session->user_id = $user->id;
            $session->ip_address = $request->ip();
            $session->user_agent = $request->header('User-Agent');
            $session->payload = $token;
            $session->last_activity = time();

            $session->save();

            return response()->json([
                'success' => true,
                'access_token' => $token
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Something went wrong'
            ], 500);
        }
    }

    public function logout(Request $request)
    {
        $token = $request->bearerToken();

        //Get Session ID
        $session_id = Session::where('payload', $token)->delete();

        return response()->json(['message' => 'Logged out successfully', 'token' => $token], 200);
    }
}
