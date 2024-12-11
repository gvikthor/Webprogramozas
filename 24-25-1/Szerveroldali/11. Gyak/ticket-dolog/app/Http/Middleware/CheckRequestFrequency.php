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
        /*
            deMorgan azonosság

            nem (A vagy B)
            nem A és nem B

            nem (A és B)
            nem A vagy nem B

        */

        if(!$request->user()->isPremium && ($request->user()->lastRequest ?? now()->subMinutes(2)) > now()->subMinute()){
            return response()->json(['error' => 'Too many requests. Please wait a minute before trying again.'], 429);
        }

        return $next($request);
    }
}
