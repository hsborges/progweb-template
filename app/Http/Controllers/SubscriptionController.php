<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscription;
use App\Models\Plan;
use App\Models\Address;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class SubscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $data = DB::table('subscriptions')
                ->join('addresses', 'addresses.address_id', '=', 'subscriptions.address_id')
                ->join('plans', 'plans.plan_id', '=', 'subscriptions.plan_id')
                ->where('subscriptions.client_id', '=',  Auth::user()->id)
                ->get();

            return view('auth/testSubscription')->with(['subscriptions' => $data]);
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
            $addresses = Address::where('client_id', Auth::user()->id)->get();

            $plans = Plan::all();

            return view('auth/create_subscription')->with(['addresses' => $addresses, 'plans' => $plans]);
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
            $data = $request->all();

            Subscription::create($data);

            return redirect()->route("subscription.index");
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
    public function update(Request $request, $id)
    {
        //
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
            $data = $request->all();

            Subscription::where('subscription_id', '=', $data['subscription_id'])->delete();
            return redirect()->route('subscription.index');
        }
        return redirect()->route('login');
    }
}
