@extends('layouts.app')

@section('content')

<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Perfil</div>

                <div class="card-body">
                <form method="POST" action="{{ route('profile.edit.update') }}">
                    @csrf
                    <div class="col-md-12">

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-left">{{ __('Nome') }}</label>

                                <div class="col-md-12">
                                    <input id="name" type="text" class="form-control" name="name" value="{{ Auth::user()->name }}">
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-12 col-form-label text-md-left">{{ __('E-mail') }}</label>

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
                                    <a href="{{ route('profileemail') }}">Alterar e-mail</a>
                                </div>

                            </div>

                            <div class="form-group row">
                                <div class="col-sm-auto">
                                    <button type="submit" class="btn btn-outline-success">
                                        {{ __('Salvar perfil') }}
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