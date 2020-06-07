@extends('layouts.app')

@section('content')
@foreach ($addresses as $address)

<span for="rua">{{ $address->street }} </span> 
<span for="rua">{{ $address->country }} </span> 
<span for="rua">{{ $address->cep }} </span>

<form method="POST" action="{{ route('address.destroy') }}">
    @csrf
<input type="text" name="address_id" hidden value="{{ $address->address_id }}">
    <button type="submit" >excluir</button>
</form>

<hr/>

@endforeach

@endsection