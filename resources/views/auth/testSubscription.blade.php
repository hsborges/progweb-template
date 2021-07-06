@extends('layouts.app')

@section('content')
@foreach ($subscriptions as $subscription)

<span for="rua">{{ Auth::user()->cpf }} </span> 
<br/>
<span for="rua">{{ $subscription->plan_name }} </span> 
<span for="rua">{{ $subscription->price }} </span> 
<span for="rua">{{ $subscription->description }} </span>
<br/>
<span for="rua">{{ $subscription->street }}, {{ $subscription->street_number }}</span> 

<form method="POST" action="{{ route('subscription.destroy') }}">
    @csrf
<input type="text" name="subscription_id" hidden value="{{ $subscription->subscription_id }}">
    <button type="submit" >excluir</button>
</form>

<hr/>


@endforeach
<a href="{{ route('subscription.create')}}">Criar assinatura</a>
@endsection