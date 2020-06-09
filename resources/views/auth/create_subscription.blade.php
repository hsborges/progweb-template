@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Perfil</div>

                <div class="card-body">
                <form method="POST" action="{{ route('subscription.store') }}">
                    @csrf
                    <div class="col-md-12">

                            <input hidden id="client_id" type="text" class="form-control" name="client_id" value="{{ Auth::user()->id }}">

                            <div class="form-group row">
                                <label for="Rua" class="col-md-0 col-form-label text-md-left">{{ __('nome do plano') }}</label>

                                <div class="col-md-4">
                                    <select name="plan_id" id="cars">
                                        @foreach ($plans as $plan)
                                        
                                            <option value="{{ $plan->plan_id }}">{{ $plan->plan_name }}</option>

                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="country" class="col-md-0 col-form-label text-md-left">{{ __('address') }}</label>

                                <div class="col-md-4">
                                    <select name="address_id" id="cars">
                                        @foreach ($addresses as $address)
                                        
                                            <option value="{{ $address->address_id }}">{{ $address->street }}</option>

                                        @endforeach
                                    </select>
                                </div>
                            </div>

                                <div class="col-md-4">
                                <input id="client_id" value="{{ Auth::user()->id }}" type="text" class="form-control" name="client_id" hidden>
                                </div>


                            <div class="form-group row">
                                <div class="col-sm-auto">
                                    <button type="submit" class="btn btn-outline-success">
                                        {{ __('Salvar plano') }}
                                    </button>
                                </div>
                        </form>

                        <div class="col-sm-auto">
                            <a href="{{ route('profile') }}" class="btn btn-outline-secondary">
                                {{ __('Cancelar') }}
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>
</div>

@endsection