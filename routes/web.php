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


Route::get('/profile/password', 'ProfileController@index')->name("profile.password");

Route::post('/profile/email/edit', 'ProfileController@editEmail')->name("profile.email.update");

Route::get('/profile/email', 'ProfileController@indexEmail')->name("profileemail");

Route::post('/profile/edit/update', 'ProfileController@editProfile')->name("profile.edit.update");

Route::get('/profile/edit', 'ProfileController@indexEditProfile')->name("profile.edit");


Route::post('/profile/password/update', 'ProfileController@changePassword')->name("profile.pass.update");


Route::get("/about", function()
{
    return view('about');
})->name("about");

Route::get("/plans", function()
{
    return view('plans');
})->name('plans');

Route::get("/contact", function()
{
    return view('contact');
})->name("contact");

// Route::get('/home', 'HomeController@index')->name('home');
