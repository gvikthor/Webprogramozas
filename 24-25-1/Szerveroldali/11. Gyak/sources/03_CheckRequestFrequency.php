<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckRequestFrequency
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = $request->user();

        if ($user) {
            $lastRequest = $user->lastRequest;
            $isPremium = $user->isPremium;
            $oneMinuteAgo = now()->subMinute();

            if ($isPremium || $lastRequest <= $oneMinuteAgo) {
                $user->lastRequest = now();
                $user->save();

                return $next($request);
            } else {
                return response()->json(['error' => 'Too many requests. Please wait a minute before trying again.'], 429);
                // 429 státusz kód az a "too many requests", pont erre illik
            }
        }

        return response()->json(['error' => 'Unauthenticated'], 401);
    }
}
