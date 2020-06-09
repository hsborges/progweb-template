<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Plan;
use Illuminate\Support\Facades\Auth;

class PlansController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            if (Auth::user()->groupid != 2) {
                return redirect()->route('profile');
            } else {
                $plans = Plan::all();
                return view('auth/testPlans')->with(['plans' => $plans]);
            }
        }
        return redirect()->route('login');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        if (Auth::check()) {
            if (Auth::user()->groupid != 2) {
                return redirect()->route('profile');
            } else {
                return view('auth/create_plans');
            }
        }
        return redirect()->route('login');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Auth::check()) {
            if (Auth::user()->groupid == 2) {
                $data = $request->all();

                Plan::create($data);

                return redirect()->route('plan.index');
            } else {
                return redirect()->route('profile');
            }
        }
        return redirect()->route('login');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        if (Auth::check()) {
            if (Auth::user()->groupid == 2) {
                $data = $request->all();
                $plan = Plan::where('plan_id', $data['plan_id'])->update(['name' => $data['name'], 'price' => $data['price'], 'description' => $data['description']]);

                return redirect()->route('plan.index');
            } else {
                return redirect()->route('profile');
            }
        }
        return redirect()->route('login');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        if (Auth::check()) {
            if (Auth::user()->groupid == 2) {
                $data = $request->all();

                Plan::where('plan_id', $data['plan_id'])->delete();

                return redirect()->route('plan.index');
            } else {
                return redirect()->route('profile');
            }
        }
        return redirect()->route('login');
    }
}
