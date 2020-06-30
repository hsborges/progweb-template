@extends('layouts.app')


<style>
.bg-destaque{
	height: 300px;
	width: 100%;
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
}

</style>

@section('content')
<p><h4>Anúncios Recentes</h4></p>
<section id="produto-anunciado" class="container-fluid py-3">

	<div class="row">

		@foreach ($produtos as $produto)
            <div class="col-md-3 pl-sm-2 pt-3">
            <div class="card" style="width: 100%;">
                <a href="{{ route('home',[$produto->id]) }}"><img class="card-img-top" src="{{ asset($produto->imagem) }}" alt="{{ $produto->nome }}" alt="{{ $produto->nome }}"></a>
                <div class="card-body">
                    <h5 class="card-title">{{ $produto->nome }}</h5>
                    <p class="card-text">R${{ number_format($produto->valor,2,",",".") }}</p>
                </div>

                <div class="card-body">
                    <a href="{{ route('home',[$produto->id]) }}" class="card-link">Ver mais..</a>
                </div>
            </div>
            </div>

		@endforeach
	</div>
</section  class="space margin -bottom">
<!-- Deixar AQUI específico para 3 anúncios pré-programados para 3 tipos de produtos. -->
<section>
<!-- Mexer dps no css que adulterei -->
	<div class="row">
	@for ($i = 1; $i <= 3; $i++)
		<div style="background-image:url({{ asset('img/img_layout/Aluguel_Compra.png') }});" class="bg-destaque col-sm-4"></div>
	@endfor
	</div>
</section>

@endsection

