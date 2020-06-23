<?php
    require_once 'Album.php';

    class AlbumDAO{
        public static function create(Album $album){
            $sql = 'INSERT INTO Album (nomealbum, datacriacao, descricao, codCompartilhamento, usuario_idusuario) VALUES(?, current_timestamp, ?, ?, ?)';
            $stmt = Conexao::getConnect()->prepare($sql);

            $stmt->bindValue(1,$album->getNome());
            $stmt->bindValue(2,$album->getDescricao());
            $stmt->bindValue(3,$album->getCodCompartilhamento());
            $stmt->bindValue(4,$album->getDono());

            $stmt->execute();
        }

        public static function cadastrarEmUsuario($idUsuario, $idAlbum){
            $sql = 'INSERT INTO usuario_album VALUES(?, ?)';

            $stmt = Conexao::getConnect()->prepare($sql);

            $stmt->bindValue(1,$idUsuario);
            $stmt->bindValue(2, $idAlbum);

            $stmt->execute();
        }

        public static function readByCodComp($codigocompAlbum){
            $sql = 'SELECT * FROM album WHERE codCompartilhamento = ?';
            $stmt = Conexao::getConnect()->prepare($sql);

            $stmt->bindValue(1, $codigocompAlbum);

            $stmt->execute();

            if($stmt->rowCount()>0){
                return $stmt->fetch(\PDO::FETCH_ASSOC); //retorna um array com todos os registros
            }
            else {
                return []; // retorna um array vazio caso não tenha nenhum item
            }
        }

        public static function readByIdDonoAndNome($nome, $idusuario){
            $sql = 'SELECT * FROM album WHERE nomealbum = ? AND usuario_idusuario = ?';
            $stmt = Conexao::getConnect()->prepare($sql);

            $stmt->bindValue(1, $nome);
            $stmt->bindValue(2, $idusuario);

            $stmt->execute();

            if($stmt->rowCount()>0){
                return $stmt->fetch(\PDO::FETCH_ASSOC); //retorna um array com todos os registros
            }
            else {
                return []; // retorna um array vazio caso não tenha nenhum item
            }
        }

        public function read(){
            $sql = 'SELECT * FROM album';
            $stmt = Conexao::getConnect()->prepare($sql);
            $stmt->execute();

            if($stmt->rowCount()>0){
                return $stmt->fetchAll(\PDO::FETCH_ASSOC); //retorna um array com todos os registros
            }
            else {
                return []; // retorna um array vazio caso não tenha nenhum item
            }
        }


        public static function readById($idUsuario){
            $sql = 'SELECT * FROM album as a JOIN usuario_album as ua ON a.idalbum = ua.idalbum WHERE ua.idusuario = ?';
            $stmt = Conexao::getConnect()->prepare($sql);

            $stmt->bindValue(1, $idUsuario);

            $stmt->execute();

            if($stmt->rowCount()>0){
                return $stmt->fetchAll(\PDO::FETCH_ASSOC); //retorna um array com todos os registros
            }
            else {
                return []; // retorna um array vazio caso não tenha nenhum item
            }
        }

        public function update(Album $album){
            $sql = 'UPDATE album SET  nomealbum = ?,  codCompartilhamento = ? , usuario_idusuario = ? WHERE idalbum = ?';
            $stmt = Conexao::getConnect()->prepare($sql);

            $stmt->bindValue(1, $album->getNome());
            $stmt->bindValue(2, $album->getCodCompartilhamento());
            $stmt->bindValue(3, $album->getDono()->getId());
            $stmt->bindValue(4, $album->getId());

            $stmt->execute();
        }

        public function delete($idalbum){
            $sql = 'SELECT * FROM album as a JOIN usuario_album as ua ON a.idalbum = ua.idalbum WHERE ua.idusuario = ?';
            $stmt = Conexao::getConnect()->prepare($sql);
            $stmt->bindValue(1, $idalbum);
            $stmt->execute();
            return $stmt->fetchAll(\PDO::FETCH_ASSOC);
        }

        public static function buscaAlbumPadraoByIdDono($id){
            $sql = 'SELECT * FROM album WHERE usuario_idusuario = ? AND nomealbum = ?';

            $stmt = Conexao::getConnect()->prepare($sql);

            $padrao = "Padrão";

            $stmt->bindValue(1, $id);
            $stmt->bindValue(2, $padrao);

            $stmt->execute();

            if($stmt->rowCount()>0){
                return $stmt->fetch(\PDO::FETCH_ASSOC);
            }
            else{
                return null;
            }
        }

        public static function buscaAlbumFavoritoByIdDono($id){
            $sql = 'SELECT * FROM album WHERE usuario_idusuario= ? AND nomealbum = ?';

            $stmt = Conexao::getConnect()->prepare($sql);

            $favorito = "Favorito";
            $stmt->bindValue(1, $id);
            $stmt->bindValue(2, $favorito);

            $stmt->execute();

            if($stmt->rowCount()>0){
                return $stmt->fetch(\PDO::FETCH_ASSOC);
            }
            else{
                return null;
            }
        }
    }
