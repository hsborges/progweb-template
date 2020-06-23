<?php
require_once 'Usuario.php';
date_default_timezone_set('America/Manaus');

class Album{
    private $nome;
    private $descricao;
    private $id;
    private $dataCriacao;
    private $qtdMidias;
    private $codCompartilhamento;
    private $dono;
    private $midias;
    
    
    public function __construct($nome, $descricao, $dono){
        $this->nome = $nome;
        $this->descricao = $descricao;
        $this->dono = $dono;
        $this->codCompartilhamento = $this->geradorCodCompartilhamento();
    }

    public function getNome(){
        return $this->nome;
    }
    
    public function getDescricao()
    {
        return $this->descricao;
    }
    
    public function setDescricao($descricao)
    {
        $this->descricao = $descricao;
    }

    //gera codigos alfa numericos
    public function uniqueAlfa($length=16)
    {
        $salt = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        $len = strlen($salt);
        $pass = '';
        mt_srand(10000000*(double)microtime());
        for ($i = 0; $i < $length; $i++)
        {
            $pass .= $salt[mt_rand(0,$len - 1)];
        }
        return $pass;
    }

    public function geradorCodCompartilhamento(){
        return $this->uniqueAlfa(6);
    }
    

    public function setNome($nome){
        $this->nome = $nome;
    }

    public function getId(){
        return $this->id;
    }

    public function setId($id){
        $this->id = $id;
    }

    public function getDataCriacao(){
        return $this->dataCriacao;
    }

    public function setDataCriacao($dataCriacao){
        $this->dataCriacao = $dataCriacao;
    }

    public function getQtdMidias(){
        return $this->qtdMidias;
    }

    public function setQtdMidias($qtdMidias){
        $this->qtdMidias = $qtdMidias;
    }

    public function getCodCompartilhamento(){
        return $this->codCompartilhamento;
    }

    public function setCodCompartilhamento($codCompartilhamento){
        $this->codCompartilhamento = $codCompartilhamento;
    }

    public function getMidias(){
        return $this->midias;
    }

    public function setMidias($midias){
        $this->midias = $midias;
    }

    public function getDono()
    {
        return $this->dono;
    }

    public function setDono($dono)
    {
        $this->dono = $dono;
    }


}
