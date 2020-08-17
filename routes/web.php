<?php

Route::get('/', function() {
    return view('welcome');
});

Route::get('/file', function() {
    Log::info('_> seeing if this works');
    return view('file-practice');
});

Route::post('upload', 'PracticeFileUploadController@index');