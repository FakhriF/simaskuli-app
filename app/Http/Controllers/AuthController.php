<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login(Request $request)
    {

        $email = $request->input('email');
        $password = $request->input('password');

        $user = User::where('email', $email)->first();

        if (!$user || ($password != $user->password)) {
            return response()->json([
                'message' => 'Invalid email or password'
            ], 401);
        } else {
            return response()->json([
                'user' => $user
            ], 200);
        }
    }
}
