<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function index(){
        return view("/home");
    }

    public function contact(){
        return view("Contact.contato");
    }

    public function aboutUS(){
        return view("AboutUS.AboutUs");
    }
}
