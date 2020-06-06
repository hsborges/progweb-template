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

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
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

            <ul class="navbar-nav ml-auto">
                <li class="nav-item dropdown">
            @guest
            <div class="top-nav-login">
                <a class="top-nav-login" href="{{ route('login') }}">LOGIN</a>
            </div>

            <div class="sign-background">
                <div class="top-nav-sign">
                    <a class="top-nav-sign" href="{{ route('register') }}">ASSINE!</a>
                </div>
            </div>

            @if (Route::has('register'))
            @endif
            @else
                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                        {{ Auth::user()->name }} <span class="caret"></span>
                    </a>

                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="{{ route('profile') }}">
                            {{ __('Perfil') }}
                        </a>
                        <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                        document.getElementById('logout-form').submit();">
                            {{ __('Minhas Assinaturas') }}
                        </a>
                        <a class="dropdown-item" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                        document.getElementById('logout-form').submit();">
                            {{ __('Logout') }}
                        </a>

                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                            @csrf
                        </form>
                    </div>
                @endguest

            </li>
            </ul>
        </div>
    </div>

    <script src="js/bootstrap.min.js"></script>

    @yield('content')
    </html>