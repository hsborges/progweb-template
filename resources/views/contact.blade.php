@extends('layouts.app')

@section('content')
<div class="container-body-all">
    <div class="img-background">
        <img src="img/body-img.jpg" class="image-home">
    </div>

    <div class="right-box-blured">
        <div class="box-title">
            <span>Contato</span>
        </div>

        <div class="box-message-contact">
            <span>Telefone: 0800-SE-PRESERVE<br><br><br>E-mail: preserve@preserve.com</span>
        </div>

    </div>
    <div class="left-box-blured">
        <div class="box-title">
            <span>Mensagem</span>
        </div>

        
        <div class="container">
            <input type="text" id="email" name="email" placeholder="Seu E-mail">

            <textarea id="subject" name="subject" placeholder="Sua Mensagem" style="height:100px"></textarea>

            <input type="submit" value="Enviar">
</div>


</div>
@endsection