<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::get('/', function () {
    return view('home');
})->name("home");

Route::get('/home', function () {
    return view('home');
})->name("home");

Route::get('/profile', function () {
    return view('auth/profile');
})->name("profile");


Route::get('/profile/password', function () {
    return view('auth/passwords/reset');
})->name("profile.password");

Route::post('/profile/password/update', 'ProfileController@changePassword')->name("profile.pass.update");


Route::get("/about", function()
{
    return view('about');
})->name("about");

Route::get("/plans", function()
{
    return view('plans');
})->name('plans');

// Route::get('/home', 'HomeController@index')->name('home');
