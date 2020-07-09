<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PracticeFileUploadController extends Controller
{
    //
    public function index(Request $request) {
        echo $request->file('jprac')->store('file_uploads');
    }
}
