<?php

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
    //$blogArticles = DB::table('blogs')->get();
    
    return view('welcome');
});

Route::resource('/items','ItemController'); 
//1. link
//2. Controller
