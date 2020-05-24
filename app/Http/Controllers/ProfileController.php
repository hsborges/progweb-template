<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class ProfileController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        return view('auth/passwords/reset');
    }

    public function editProfile()
    {
        return view('auth/editProfile');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function changePassword(Request $request){

        if (!(Hash::check($request->get('current-password'), Auth::user()->password))) {
            // The passwords matches
            $error[0] = 'A senha informada não corresponde a senha cadastrada. Por favor, tente novamente.';
            return view("auth/passwords/reset")->with(['error' => $error]);
        }


        if(strcmp($request->get('password'), $request->get('new-password')) != 0){
            //Current password and new password are same
            $error[0] = "As senhas novas senhas estão diferentes. Por favor,  Por favor, tente novamente.";
            return view("auth/passwords/reset")->with(['error' => $error]);
        }

        if(strcmp($request->get('current-password'), $request->get('password')) == 0){
            //Current password and new password are same
            $error[0] = "A nova senha é igual a senha anterior. Por favor, escolha uma senha diferente.";
            return view("auth/passwords/reset")->with(['error' => $error]);
        }


        // $validatedData = $request->validate([
        //     'password' => ['required', 'min:8'],
        //     'current-password' => ['required'],
        // ]);

        //Change Password
        $user = Auth::user();
        $user->password = bcrypt($request->get('new-password'));
        $user->save();

        $success[0] = 'A senha foi alterada com sucesso!';
        return view("auth/profile")->with(['success' => $success]);

    }
}