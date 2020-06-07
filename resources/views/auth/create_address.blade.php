@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Perfil</div>

                <div class="card-body">
                <form method="POST" action="{{ route('address.store') }}">
                    @csrf
                    <div class="col-md-12">

                            <input hidden id="client_id" type="text" class="form-control" name="client_id" value="{{ Auth::user()->id }}">

                            <div class="form-group row">
                                <label for="Rua" class="col-md-0 col-form-label text-md-left">{{ __('Rua') }}</label>

                                <div class="col-md-4">
                                    <input id="rua" type="text" class="form-control" name="street" >
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="country" class="col-md-0 col-form-label text-md-left">{{ __('País') }}</label>

                                <div class="col-md-4">
                                    <input id="country" type="text" class="form-control" name="country">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="state" class="col-md-0 col-form-label text-md-left">{{ __('Estado') }}</label>

                                <div class="col-md-4">
                                    <input id="state" type="text" class="form-control" name="state">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="street_number" class="col-md-0 col-form-label text-md-left">{{ __('Numero') }}</label>

                                <div class="col-md-4">
                                    <input id="street_number" type="text" class="form-control" name="street_number">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="complement" class="col-md-0 col-form-label text-md-left">{{ __('Complemento') }}</label>

                                <div class="col-md-4">
                                    <input id="complement" type="text" class="form-control" name="complement">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="neighborhood" class="col-md-0 col-form-label text-md-left">{{ __('Bairro') }}</label>

                                <div class="col-md-4">
                                    <input id="neighborhood" type="text" class="form-control" name="neighborhood">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="cep" class="col-md-4 col-form-label text-md-left">{{ __('CEP') }}</label>

                                <div class="col-md-6">
                                    <input id="cep" type="text" class="form-control" name="cep">
                                </div>
                            </div>


                            <div class="form-group row">
                                <div class="col-sm-auto">
                                    <button type="submit" class="btn btn-outline-success">
                                        {{ __('Salvar endereço') }}
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