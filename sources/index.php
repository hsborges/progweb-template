<?php
//error_reporting(E_ALL);
session_start();
/**
 * Cria uma instância do controlador para uso
 */

include_once('app/controllers/Controller.php');
include_once('app/controllers/LoginController.php');
include_once('app/controllers/UsuarioController.php');
include_once('app/controllers/MidiaController.php');
include_once('app/controllers/AlbumController.php');
$controller = new Controller();
$loginController = new LoginController();
$usuarioController = new UsuarioController();
$midiaController = new MidiaController();
$albumController = new AlbumController();

/**
 * Seleciona a rota correta.
 Ex :http://localhost/resources/?action=login
 */

error_reporting(E_ERROR | E_WARNING | E_PARSE);

switch ($_GET['action']) {
    case 'login':
        $controller->login();
        break;
    case 'paginadeusuario':
        $controller->paginadeusuario();
        break;
    case 'perfil':
        $controller->perfil();
        break;
    case 'cadastrar':
        $loginController->cadastrar($_POST['name'], $_POST['sobrenome'], $_POST['dataNascimento'], $_POST['email'], $_POST['password'],
            $_POST['pais'], $_POST['estado'], $_POST['cidade']);
        break;
    case 'logar':
        $loginController->logar($_POST['email'], $_POST['senha']);
        break;
    case 'editarperfil':
        $controller->editarperfil();
        break;
    case 'atualizarusuario':
        $usuarioController->atualizarPerfil($_FILES['imagem-perfil'], $_POST['nome'], $_POST['sobrenome'], $_POST['email'], 
                                            $_POST['pais'], $_POST['cidade'], $_POST['telefone'] );
        break;
    case 'cadastrarimagemalbumpadrao':
        $midiaController->cadastrarMidia($_FILES['nova-imagem'], $_SESSION['usuarioLogado']['idalbumprincipal']);
        break;
    case 'favoritar':
        $midiaController->favoritar($_GET['MidiaId']);
        break;
    case 'desfavoritar':
        $midiaController->desfavoritar($_GET['MidiaId']);
        break;
    case 'deletarimagem':
        $midiaController->removeMidiaAlbum($_GET['MidiaId'], $_GET['AlbumId']);
        break;
    case 'criaralbum':
        $albumController->criarAlbum($_POST['nome_album'], $_POST['descricao_album']);
        break;
    case 'addalbumcomcodigo':
        $albumController->registrarAlbumComCodigo($_POST['codigocomp_album']);
    default:
        $controller->login();
}
