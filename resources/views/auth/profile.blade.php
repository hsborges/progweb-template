@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Perfil</div>

                <div class="card-body">
                    <div class="col-md-12">

                        @isset($success[0])
                        <label class="text-color-green">{{ $success[0] }}</label>
                        @endisset

                        <div class="form-group row">
                            <label for="name" class="col-md-4 col-form-label text-md-left">{{ __('Nome') }}</label>

                            <div class="col-md-12">
                                <input id="name" type="text" class="form-control" name="name" value="{{ Auth::user()->name }}" disabled>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="email" class="col-md-4 col-form-label text-md-left">{{ __('E-mail') }}</label>

                            <div class="col-md-12">
                                <input id="email" type="text" class="form-control" name="email" value="{{ Auth::user()->email }}" disabled>
                            </div>
                        </div>

                        <div class="form-group row">
                            <label for="cpf" class="col-md-4 col-form-label text-md-left">{{ __('CPF') }}</label>

                            <div class="col-md-12">
                                <input id="cpf" type="text" class="form-control" name="cpf" value="{{ Auth::user()->cpf }}" disabled>
                            </div>
                        </div>

                        <div class="form-group row">
                            <div class="col-md-12">
                                <a href="{{ route('profile.password') }}">Alterar senha</a>
                            </div>
                        </div>


                        <div class="form-group row">
                            <div class="col-sm-auto">
                                    <a class="btn btn-outline-primary" href="{{ route('profile.edit') }}">Editar perfil</a>
                            </div>
                            <div class="form-group row">
                                <div class="col-sm-auto">
                                    <a href="{{ route('home') }}" class="btn btn-outline-secondary">
                                        {{ __('Voltar') }}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection