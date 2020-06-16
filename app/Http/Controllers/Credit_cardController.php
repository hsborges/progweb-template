<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Credit_card;

use Illuminate\Support\Facades\Auth;

use Illuminate\Support\Facades\DB;

class Credit_cardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = DB::table('credit_cards')
        ->join('payments', 'credit_cards.payment_id', '=', 'payments.payment_id')
        ->join ('subscriptions', 'subscriptions.subscription_id', '=', 'payments.subscription_id')
        ->where('subscriptions.client_id', '=', Auth::user()->id)->get();
        return view('auth/testCredit_card')->with(['credit_cards' => $data]);

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $data = DB::table('payments')
        ->join ('subscriptions', 'subscriptions.subscription_id', '=', 'payments.subscription_id')
        ->where('subscriptions.client_id', '=', Auth::user()->id)->get();
        return view('auth/create_credit_card')->with(['payments' => $data]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();
        Credit_card::create($data);
        return redirect()->route('credit_card.index');
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
    public function destroy($id)
    {
        $data = $request->all();
        Credit_card::where('card_number', $data['card_number'])->delete();
        return redirect()->route('credit_card.index');
    }
}
