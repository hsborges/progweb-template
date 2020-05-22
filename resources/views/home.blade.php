<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PreservSign</title>
    <link rel="stylesheet" href="css/styles.css"/>
    <link
      href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&family=Cookie&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    
    <div class="topnav">
      <div class="logo">
          <a href="{{ route('home') }}">PreservSign</a>
      </div>
      
      <a href="">Login</a>
      <a href="">Contato</a>
      <a href="{{ route('plans') }}">Planos</a>
      <a href="{{ route('about') }}">Sobre</a>
      <a href="{{ route('home') }}">Home</a>
    </div>
    <div class="sub-bar">
      <div class="description-text"><strong>
        <br>
        PreservSign, um clube de assinaturas <br />
        para você que se ama e preserva
      </strong></div>
      <br><br>
      <a href="" class="myButton">Preserve-se!</a>
    </div>
    <div class="plan-footer">
      <div class="basic-plan">
        <div class="plan-title"><strong>Plano Básico</strong></div>
        <div class="plan-description">Receba 15 camisinhas em qualquer lugar!</div>
        <div class="plan-description">Por apenas R$14,99</div>
        <div class="button-space"><a href="" class="myButton">Mais Detalhes!</a></div>
      </div>
      
      <div class="premium-plan">
        <div class="plan-title"><strong>Plano Premium</strong></div>
        <div class="plan-description">Receba 20 camisinhas <br> + lubrificante surpresa <br> em qualquer lugar!</div>
        <div class="plan-description">Por apenas R$24,99</div>
        <div class="button-space"><a href="" class="myButton">Mais Detalhes!</a></div>

      </div>
      <div class="exxxtra-plan">
        <div class="plan-title"><strong>Plano Exxxtra</strong></div>
        <div class="plan-description">Receba 20 camisinhas de sua preferência <br> + lubrificante surpresa <br> + sex toy surpresa diretamente <br> em qualquer lugar!</div>
        <div class="plan-description">Por apenas R$59,99</div>
        <div class="button-space-exxxtra"><a href="" class="myButton">Mais Detalhes!</a></div>
      </div>
    </div>
  </body>
</html>