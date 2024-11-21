<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class ApiController extends Controller
{
    public function register(Request $request) {
        // Validation
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string',
        ], [
            'required' => ':attribute mező megadása kötelező!',
            'string' => ':attribute mező kötelezően szöveges lehet csak!',
            'email' => ':attribute mező csak helyesen formázott email címet tartalmazhat!',
            'unique' => ':attribute cím már foglalt!',
        ], [
            'name' => 'A név',
            'email' => 'Az email',
            'password' => 'A jelszó',
        ]);
        if($validator->fails()) {
            return response()->json([
                'error' => $validator->messages(),
            ], 400);
        }

        $validated = $validator->validated();

        $user = User::create($validated);

        $token = $user->createToken('auth', $user->admin ? ['ticket:admin'] : []);

        return response()->json([
            'token' => $token->plainTextToken,
        ], 201);
    }

    public function login(Request $request) {
        // Validation
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email|unique:users,email',
            'password' => 'required|string',
        ], [
            'required' => ':attribute mező megadása kötelező!',
            'string' => ':attribute mező kötelezően szöveges lehet csak!',
            'email' => ':attribute mező csak helyesen formázott email címet tartalmazhat!',
            'unique' => ':attribute cím már foglalt!',
        ], [
            'email' => 'Az email',
            'password' => 'A jelszó',
        ]);
        if($validator->fails()) {
            return response()->json([
                'error' => $validator->messages(),
            ], 400);
        }

        $validated = $validator->validated();

        $user = User::where('email', $validated['email'])->first();

        if(Auth::attempt($validated)) {
            $token = $user->createToken('auth', $user->admin ? ['ticket:admin'] : []);

            return response()->json([
                'token' => $token->plainTextToken,
            ]);
        } else {
            return response()->json([
                'error' => 'Hibás jelszó.',
            ], 401);
        }
    }
}
