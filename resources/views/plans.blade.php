@extends('layouts.app')

@section('content')
   <nav class="links">
    <label for="rd_basic">Plano Básico</label>
    <label for="rd_premium">Plano Premium</label>
    <label for="rd_exxxtra">Plano Exxxtra</label>
   </nav> 

   <div class="scroll">
       <input type="radio" name="grupo" id="rd_basic" checked="true">
       <input type="radio" name="grupo" id="rd_premium">
       <input type="radio" name="grupo" id="rd_exxxtra">

        <section class="sections">
            <section class="bloco" id="basic-plan">
              <div class="basic-description-plan-box">
                <div class = "plan-title">Plano Básico</div>
                <div class="plan-description">Receba 15 camisinhas em qualquer lugar!</div>
                <div class="plan-description">Por apenas R$14,99</div>
              </div>
            </section>

            <section class="bloco" id="premium-plan">
            <div class="premium-description-plan-box">
                <div class = "plan-title">Plano Premium</div>
                <div class="plan-description">Receba 20 camisinhas <br> + lubrificante surpresa <br> em qualquer lugar!</div>
                <div class="plan-description">Por apenas R$24,99</div>
            </div>
            </section>

            <section class="bloco" id="exxxtra-plan">
            <div class="exxxtra-description-plan-box">
                <div class = "plan-title">Plano Exxxtra</div>
                <div class="plan-description">Receba 20 camisinhas de sua preferência <br> + lubrificante surpresa <br> + sex toy surpresa diretamente <br> em qualquer lugar!</div>
                <div class="plan-description">Por apenas R$59,99</div>
              </div>
            </section>
        </section>
   </div>
    
</body>

</html>
@endsection