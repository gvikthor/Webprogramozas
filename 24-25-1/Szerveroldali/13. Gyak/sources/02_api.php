<?php

use App\Http\Controllers\ApiController;
use App\Http\Middleware\ForceJSONResponseAPI;
use App\Http\Middleware\ValidateURIParams;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Authentikációs végpontok

Route::post('register', [ApiController::class, 'register'])->name('api.register');
Route::post('login',    [ApiController::class, 'login'])   ->name('api.login');

Route::middleware('auth:sanctum')->group(function () {
    Route::post('logout', [ApiController::class, 'logout'])->name('api.logout');
    Route::get( 'user',   [ApiController::class, 'user'])  ->name('api.user');



    // URI paraméterek

    // 1. Beépített validáció használata, ha nem illeszkedik: 404
    Route::get('uri-params1/{number}/{string}/{optional?}', function ($number, $string, $optional = null) {
        return response()->json([
            'number' => $number,
            'string' => $string,
            'optional' => $optional,
        ]);
    })->where('number', '[0-9]+')->where('string', '[A-Za-z]+');

    // 2. Middleware készítése
    Route::get('uri-params2/{number}/{string}/{optional?}', function ($number, $string, $optional = null) {
        return response()->json([
            'number' => $number,
            'string' => $string,
            'optional' => $optional,
        ]);
    })->middleware([ValidateURIParams::class]);

    // 3. Routeren átengedni és ott lekezelni, tetszőleges http error kód
    Route::get('uri-params3/{number?}/{string?}/{optional?}', function ($number = null, $string = null, $optional = null) {
        $errors = [];

        if(!filter_var($number, FILTER_VALIDATE_INT)) {
            $errors['number'] = 'A $number-nek pozitív egész számnak kell lennie!';
        }
        if(!is_string($string)) {
            $errors['string'] = 'A $string-nek szövegnek kell lennie!';
        }

        if(empty($errors)) {
            return response()->json(null, 204);
        }
        return response()->json($errors, 418);
    });


    // A Ticket app CRUD-os REST végpontjai
    Route::post(  'tickets',           [APIController::class, 'store'])              ->name('api.tickets.store');
    Route::get(   'tickets/paginated', [APIController::class, 'getTicketsPaginated'])->name('api.tickets.getTicketsPaginated');
    Route::get(   'tickets/{id?}',     [APIController::class, 'getTickets'])         ->name('api.tickets.getTickets')         ->where('id', '[0-9]+');
    Route::put(   'tickets/{id}',      [APIController::class, 'update'])             ->name('api.tickets.update')             ->where('id', '[0-9]+');
    Route::delete('tickets/{id}',      [APIController::class, 'destroy'])            ->name('api.tickets.destroy')            ->where('id', '[0-9]+');


    // Összetettebb végpontok
    Route::post('tickets/{id}/users', [ApiController::class, 'syncUsers'])->name('api.tickets.syncUsers')->where('id', '[0-9]+');


    // Fájl feltöltése
    Route::post('tickets/{ticketId}/comments/{commentId}', [ApiController::class, 'fileUpload'])->name('api.tickets.fileUpload')->where(['ticketId' => '[0-9]+', 'commentId' => '[0-9]+']);
});







