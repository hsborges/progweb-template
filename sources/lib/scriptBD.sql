-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 23-Jun-2020 às 23:05
-- Versão do servidor: 10.4.11-MariaDB
-- versão do PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `photoroom`
--
CREATE DATABASE IF NOT EXISTS `photoroom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `photoroom`;

-- --------------------------------------------------------

--
-- Estrutura da tabela `album`
--

CREATE TABLE `album` (
  `idalbum` int(11) NOT NULL,
  `nomealbum` varchar(45) DEFAULT NULL,
  `dataCriacao` date DEFAULT NULL,
  `codCompartilhamento` varchar(100) DEFAULT NULL,
  `usuario_idusuario` int(11) NOT NULL,
  `descricao` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `midia`
--

CREATE TABLE `midia` (
  `idmidia` int(11) NOT NULL,
  `datadeenvio` date DEFAULT NULL,
  `enderecoArquivo` varchar(100) NOT NULL,
  `descricao` text DEFAULT NULL,
  `tamanho` int(11) DEFAULT NULL,
  `extensao` varchar(45) DEFAULT NULL,
  `resolucao` varchar(45) DEFAULT NULL,
  `duracao` varchar(45) DEFAULT NULL,
  `album_idalbum` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `midia_album`
--

CREATE TABLE `midia_album` (
  `idmidia` int(11) NOT NULL,
  `idalbum` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `idusuario` int(11) NOT NULL,
  `nome` varchar(45) DEFAULT NULL,
  `sobrenome` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `senha` varchar(45) DEFAULT NULL,
  `cidade` varchar(45) DEFAULT NULL,
  `estado` varchar(45) DEFAULT NULL,
  `pais` varchar(45) DEFAULT NULL,
  `telefone` varchar(45) DEFAULT NULL,
  `endfotoperfil` varchar(45) DEFAULT NULL,
  `idalbumprincipal` varchar(45) DEFAULT NULL,
  `idalbumfavorito` varchar(45) NOT NULL,
  `dataNascimento` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario_album`
--

CREATE TABLE `usuario_album` (
  `idusuario` int(11) NOT NULL,
  `idalbum` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `album`
--
ALTER TABLE `album`
  ADD PRIMARY KEY (`idalbum`,`usuario_idusuario`),
  ADD KEY `fk_album_usuario` (`usuario_idusuario`);

--
-- Índices para tabela `midia`
--
ALTER TABLE `midia`
  ADD PRIMARY KEY (`idmidia`,`album_idalbum`),
  ADD KEY `album_idalbum` (`album_idalbum`);

--
-- Índices para tabela `midia_album`
--
ALTER TABLE `midia_album`
  ADD PRIMARY KEY (`idmidia`,`idalbum`),
  ADD KEY `fk_album` (`idalbum`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idusuario`);

--
-- Índices para tabela `usuario_album`
--
ALTER TABLE `usuario_album`
  ADD KEY `idusuario` (`idusuario`),
  ADD KEY `idalbum` (`idalbum`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `album`
--
ALTER TABLE `album`
  MODIFY `idalbum` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `midia`
--
ALTER TABLE `midia`
  MODIFY `idmidia` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idusuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `album`
--
ALTER TABLE `album`
  ADD CONSTRAINT `fk_album_usuario` FOREIGN KEY (`usuario_idusuario`) REFERENCES `usuario` (`idusuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `midia`
--
ALTER TABLE `midia`
  ADD CONSTRAINT `midia_ibfk_1` FOREIGN KEY (`album_idalbum`) REFERENCES `album` (`idalbum`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `midia_album`
--
ALTER TABLE `midia_album`
  ADD CONSTRAINT `fk_album` FOREIGN KEY (`idalbum`) REFERENCES `album` (`idalbum`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_midia` FOREIGN KEY (`idmidia`) REFERENCES `midia` (`idmidia`) ON DELETE CASCADE ON UPDATE NO ACTION;

--
-- Limitadores para a tabela `usuario_album`
--
ALTER TABLE `usuario_album`
  ADD CONSTRAINT `usuario_album_ibfk_1` FOREIGN KEY (`idusuario`) REFERENCES `usuario` (`idusuario`),
  ADD CONSTRAINT `usuario_album_ibfk_2` FOREIGN KEY (`idalbum`) REFERENCES `album` (`idalbum`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
