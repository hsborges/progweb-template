<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PreservSign</title>
  <link rel="stylesheet" href="styles/styles.css" />
  <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&family=Cookie&display=swap" rel="stylesheet" />
</head>
@extends('layouts.app')

@section('content')
<div class="container-body-all">
    <div class="img-background">
        <img src="img/body-img.jpg" class="image-home">
    </div>
    <div class="center-box-blured">
        <div class="box-title">
            <span>PreservSign</span>
        </div>
        <div class="box-message">
            <span>O cuidado com você e seu parceiro (a) nunca foi tão importante. Você pode receber camisinhas exclusivas e muita mais na segurança e descrição da sua casa!</span>
        </div>
        <a href="{{ route('register') }}">
            <div class="box-join-button">
                <div class="text-button">
                    EU QUERO!
                </div>
            </div>
        </a>
    </div>

</div>
@endsection