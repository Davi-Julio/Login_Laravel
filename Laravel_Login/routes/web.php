<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

use App\Http\Controllers\LoginController;

Route::get("/",[LoginController::class ,'index']);

Route::get("/Contact/contato",[LoginController::class,"contact"]);

Route::get("/AboutUs/AboutUS",[LoginController::class,'aboutUS']);
