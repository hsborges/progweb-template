<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'PreservSign') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <script src="{{ asset('js/all.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/all.min.css') }}" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/styles.css') }}" rel="stylesheet">
    
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&family=Cookie&display=swap" rel="stylesheet" />
</head>

<body>

    <div class="top-nav-bar">
        <div class="top-bar" >
            <div class="logo-nav-bar">
                <a  href="{{ route('home') }}">PreservSign</a>
            </div>
            <div class="logo-line"></div>

            <div class="top-nav-plans">
                <a class="top-nav-plans" href="{{ route('plans') }}">PLANOS</a>
            </div>
            <div class="top-nav-about">
                <a class="top-nav-about" href="{{ route('about') }}">SOBRE</a>
            </div>

            <div class="top-nav-contact">
                <a class="top-nav-contact" href="{{ route('contact') }}">CONTATO</a>
            </div>

            @guest
            <div class="top-nav-login">
                <a class="top-nav-login" href="{{ route('login') }}">LOGIN</a>
            </div>

            <a class="top-nav-sign" href="{{ route('register') }}"><div class="sign-background">
                <div class="top-nav-sign">
                ASSINE!
                </div>
            </div></a>

            @if (Route::has('register'))
            @endif
            @else
            <div class="top-nav-dropdown top-nav-logged">
                <button class="top-nav-dropbtn">OLÁ, <?= strtoupper(explode(' ', Auth::user()->name)[0]) . " " . "<i class='fas fa-angle-down'></i>"?></button>
                <div class="top-nav-dropdown-content">
                        <a href="{{ route('profile') }}">
                            {{ __('Perfil') }}
                        </a>
                        <a href="{{ route('profile.destroy') }}">
                            {{ __('Minhas Assinaturas') }}
                        </a>
                        <a href="{{ route('logout') }}" onclick="event.preventDefault();
                                                        document.getElementById('logout-form').submit();">
                            {{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                </div>
            </div>
            @endguest
        </div>
    </div>

    <script src="js/bootstrap.min.js"></script>

    @yield('content')
    </html>