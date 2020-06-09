@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Perfil</div>

                <div class="card-body">
                <form method="POST" action="{{ route('credit_card.store') }}">
                    @csrf
                    <div class="col-md-12">

                            <div class="form-group row">
                               

                                <div class="col-md-4">
                                    <select hidden name="payment_id" id="cars">
                                        @foreach ($payments as $payment)
                                        
                                            <option value="{{ $payment->payment_id }}">{{ $payment->type }}</option>

                                        @endforeach
                                    </select>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="Rua" class="col-md-0 col-f
orm-label text-md-left">{{ __('numero do cartão') }}</label>

                                <div class="col-md-4">
                                    <input type="text" name="card_number" >
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="Rua" class="col-md-0 col-f
orm-label text-md-left">{{ __('número de segurança') }}</label>

                                <div class="col-md-4">
                                    <input type="text" name="security_number" >
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="Rua" class="col-md-0 col-f
orm-label text-md-left">{{ __('validade do cartão') }}</label>

                                <div class="col-md-4">
                                    <input type="text" name="expires_date" >
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="Rua" class="col-md-0 col-f
orm-label text-md-left">{{ __('nome do cartão') }}</label>

                                <div class="col-md-4">
                                    <input type="text" name="card_name" >
                                </div>
                            </div>


                            <div class="form-group row">
                                <div class="col-sm-auto">
                                    <button type="submit" class="btn btn-outline-success">
                                        {{ __('Salvar cartão') }}
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