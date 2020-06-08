@extends('layouts.app')

@section('content')
@foreach ($plans as $plan)

<span for="rua">{{ $plan->name }} </span> 
<span for="rua">{{ $plan->price }} </span> 
<span for="rua">{{ $plan->description }} </span>

<form method="POST" action="{{ route('plan.destroy') }}">
    @csrf
<input type="text" name="plan_id" hidden value="{{ $plan->plan_id }}">
    <button type="submit" >excluir</button>
</form>


<form method="POST" action="{{ route('plan.update') }}">
    @csrf
    <input id="rua" type="text" class="form-control" value="{{ old('name', $plan->name) }}" name="name" >
    <input id="rua" type="text" class="form-control" value="{{ old('description', $plan->description) }}" name="description" >
    <input id="rua" type="text" class="form-control" value="{{ old('price', $plan->price) }}" name="price" >
    <input type="text" name="plan_id" hidden value="{{ $plan->plan_id }}">
    <button type="submit" >atualizar</button>
</form>

<hr/>

@endforeach

@endsection