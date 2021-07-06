@extends('layouts.app')

@section('content')
@foreach ($credit_cards as $credit_card)

<span for="rua">{{ $credit_card->subscription_id }} </span> 
<br/>
<span for="rua">{{ $credit_card->card_number }} </span> 
<span for="rua">{{ $credit_card->security_number }} </span> 
<span for="rua">{{ $credit_card->expires_date }} </span>
<br/>

<hr/>


@endforeach
<a href="{{ route('credit_card.create')}}">Adicionar cartão</a>
@endsection