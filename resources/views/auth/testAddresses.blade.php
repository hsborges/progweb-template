@extends('layouts.app')

@section('content')
@foreach ($addresses as $address)

<span
<span for="rua">{{ $address->street }} </span> 
<span for="rua">{{ $address->country }} </span> 
<span for="rua">{{ $address->cep }} </span>

<hr/>

@endforeach

@endsection