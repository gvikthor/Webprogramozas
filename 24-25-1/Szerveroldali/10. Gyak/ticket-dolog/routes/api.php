<?php

use App\Http\Controllers\ApiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::post('/register', [ApiController::class, 'register'])->name('api.register');
Route::post('/login', [ApiController::class, 'login'])->name('api.login');

Route::get('/teszt/{number1}/{number2}', [ApiController::class, 'teszt'])->name('api.teszt');

Route::get( '/ticket/{id}',   [ApiController::class, 'ticketByID'])  ->name('api.ticketByID');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [ApiController::class, 'logout'])->name('api.logout');
    Route::get( '/user',   [ApiController::class, 'user'])  ->name('api.user');
});