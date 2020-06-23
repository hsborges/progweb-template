<?php
    require_once 'Controller.php';
    require_once 'app/models/Usuario.php';
    require_once 'app/models/UsuarioDAO.php';
    require_once 'app/models/Album.php';
    require_once 'app/models/AlbumDAO.php';
    require_once "AlbumController.php";

    class LoginController extends Controller {

        public function cadastrar($nome, $sobrenome, $dataNascimento, $email, $senha, $pais, $estado, $cidade){

            $novousuario = new Usuario($nome, $sobrenome, $dataNascimento,
                $email, MD5($senha), $cidade, $estado, $pais);

            try {
                if(!empty($nome) && !empty($sobrenome) && !empty($email) && !empty($senha) && !empty($dataNascimento)){
                    if(UsuarioDAO::findEmail($email) == null){                    
                        UsuarioDAO::create($novousuario);
                        $fotoPerfil = 'usuario.png';                              
                        $usuarioCadastrado  = UsuarioDAO::find($email, MD5($senha));                                
                        $idAlbumPadrao = AlbumController::criarAlbumPadrao($usuarioCadastrado['idusuario']);
                        $idAlbumFavorito = AlbumController::criarAlbumFavorito($usuarioCadastrado['idusuario']);
                        $novousuario->setAlbumFavorito($idAlbumFavorito);
                        $novousuario->setAlbumPrincipal($idAlbumPadrao);
                        $novousuario->setId($usuarioCadastrado['idusuario']);
                        $novousuario->setFotoPerfil($fotoPerfil);                
                        UsuarioDAO::update($novousuario);
                        AlbumDAO::cadastrarEmUsuario($novousuario->getId(), $idAlbumFavorito);
                        AlbumDAO::cadastrarEmUsuario($novousuario->getId(), $idAlbumPadrao);

                        $_SESSION['loginErro'] = "<strong class='success'>Usuario Cadastrado</strong>";
                    }
                    else{
                        $_SESSION['loginErro'] = "<strong class='error'>Já existe usuário com esse email!</strong>";
                    }
                }
                else{
                    $_SESSION['loginErro'] = "<strong class='error'>Preencha os campos obrigatórios!</strong>";
                }
            }            
            catch(PDOException $erro) {
                $_SESSION['loginErro'] = "<strong class='error'>Impossivel cadastradar</strong>";
            }
            $this->login();
        }

        public function logar($email, $senha){
            
            $loginUser = UsuarioDAO::find($email, MD5($senha));
            
            if($loginUser != null){
                $_SESSION['usuarioLogado'] = $loginUser;
                $this->paginadeusuario();
            }
            else {
                // header('Location: index.php?email=' . $_POST['email'] . '&mensagem=Usuário e/ou senha incorreta!');
                $_SESSION['loginErro'] = "<strong class='error'>Erro ao tentar logar!!!</strong>";
                $this->login();
            }

        }
    }