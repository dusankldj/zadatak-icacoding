<?php

use App\Http\Controllers\ClientController;
use App\Http\Controllers\RequestController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('clients', [ClientController::class, 'index']);
Route::get('requests', [RequestController::class, 'index']);
Route::get('requests/summary', [RequestController::class, 'summary']);
Route::post('requests', [RequestController::class, 'store']);
Route::patch('requests/{requestModel}', [RequestController::class, 'update']);
