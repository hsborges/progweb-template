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

Route::get('/', function () {
    return view('home');
})->name("home");

Route::get('/home', function () {
    return view('home');
})->name("home");

Route::get('/profile', function () {
    return view('auth/profile');
})->name("profile");

Route::post('/plan/delete', 'PlansController@destroy')->name('plan.destroy');
Route::post('/plan/update', 'PlansController@update')->name('plan.update');
Route::resource('plan', 'PlansController', ['except' => ['destroy', 'update']]);

Route::post('/credit_card/delete', 'Credit_cardController@destroy')->name('credit_card.destroy');
Route::post('/credit_card/update', 'Credit_cardController@update')->name('credit_card.update');
Route::resource('credit_card', 'Credit_cardController', ['except' => ['destroy', 'update']]);

Route::post('/addresses/delete', 'AddressController@destroy')->name('address.destroy');
Route::resource('address', 'AddressController', ['except' => ['destroy']]);

Route::post('/subscription/delete', 'SubscriptionController@destroy')->name('subscription.destroy');
Route::post('/subscription/update', 'SubscriptionController@update')->name('subscription.update');
Route::resource('subscription', 'SubscriptionController', ['except' => ['destroy', 'update']]);

Route::get('/profile/password', 'ProfileController@index')->name("profile.password");

Route::get('/profile/destroy', 'ProfileController@destroy_account')->name("profile.destroy");

Route::post('/profile/email/edit', 'ProfileController@editEmail')->name("profile.email.update");

Route::get('/profile/email', 'ProfileController@indexEmail')->name("profileemail");

Route::post('/profile/edit/update', 'ProfileController@editProfile')->name("profile.edit.update");

Route::get('/profile/edit', 'ProfileController@indexEditProfile')->name("profile.edit");


Route::post('/profile/password/update', 'ProfileController@changePassword')->name("profile.pass.update");

Auth::routes();

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
