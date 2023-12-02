<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    // Register a new user
    public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required|string',
        'email' => 'required|email|unique:users',
        'password' => [
            'required',
            'string',
            'min:8',
            'regex:/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/',
        ],
    ], [
        'password.regex' => 'The password must be 8 letters and contain at least one uppercase letter, one number, and one special character.',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    $user = new User([
        'name' => $request->name,
        'email' => $request->email,
        'password' => bcrypt($request->password),
        'role_id' => 2
    ]);

    $user->save();

    // Assuming you have configured Laravel Passport properly,
    // you can generate a personal access token for the user
    $token = $user->createToken('AuthToken')->accessToken;

    return response()->json(['token' => $token, 'message' => 'Successfully registered'], 201);
}

    // Login user
    public function login(Request $request)
{
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
        $user = Auth::user();
        $token = $user->createToken('AuthToken')->accessToken;
        return response()->json(['token' => $token,'user' => $user, 'status' => 200], 200);
    } else {
        $user = User::where('email', $request->email)->first();

        if (!$user) {
            return response()->json(['message' => 'The provided email doesn\'t exist','type' => 'email', 'status' => 401], 401);
        } else {
            return response()->json(['message' => 'Password is incorrect', 'type' => 'password', 'status' => 401], 401);
        }
    }
}

    public function logout(Request $request)
{
    $user = Auth::user();
    $user->tokens()->delete();

    return response()->json(['message' => 'Logged out successfully'], 200);
}
}
