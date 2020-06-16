# Minha Lojinha

<!--- Exemplos de badges. Acesse https://shields.io para outras opções. Você pode querer incluir informações de dependencias, build, testes, licença, etc. --->
![GitHub repo size](https://img.shields.io/github/repo-size/dennervidal/progweb-template)
![GitHub contributors](https://img.shields.io/github/contributors/dennervidal/progweb-template)
![GitHub license](https://img.shields.io/github/license/dennervidal/progweb-template)

Minha Lojinha é um site para expor a venda de produtos usados e estabelecer uma comunicação entre os interessados.
A vitrine virtual mostrará o preço dos produtos a venda, e cada usuário deverá ter um perfil na loja.
É possível categorizar os itens para posterior filtragem na plataforma.

## Pré-requisitos

Antes de iniciar o desenvolvimento, certifique-se de cumprir os seguintes requisitos:
<!--- Estes são alguns exemplos de requisitos. Adicione, duplique e remove como necessário --->
* NodeJS v12.
* Yarn
* mongoDB.

O sistema é multiplataforma, basta seguir as instruções de acordo com seu SO.

## Como executar

Para fazer o deploy do frontend da aplicação siga os seguintes passos:

```
cd frontend
yarn install && yarn start
```

Para fazer o deploy do backend da aplicação, siga as instruções no arquivo `README.md` da pasta backend, e depois execute:

```
cd backend
yarn install && yarn dev
```

## Usando Minha Lojinha

Para usar Minha Lojinha, siga os seguintes passos:

* Abra o navegador e digite o seguinte endereço: `http://localhost:3000/`
* Ao abrir a aplicação você poderá navegar pelo conteúdo público e criar uma conta no site.
* Ao criar sua conta e autenticar será possível publicar produtos.
* É possível utilizar a busca no site e navegar pelas categorias disponíveis.
* É possível entrar em contato com um vendedor demonstrando interesse.

## Changelog
Até o momento é possível operar a API do backend com os seguintes métodos:
- `GET` `/users/:nickname`: Retorna os dados do usuário correspondente ao `nickname`
- `GET` `/products`: Retorna todos os produtos disponíveis
- `GET` `/products/:id`: Retorna os dados do produto correspondente ao `id`
- `POST` `/users`: Cria um novo usuário
- `POST` `/products`: Cria um novo produto
- `POST` `/login`: Faz o login de um usuário
- `POST` `/logout`: Faz o logout de um usuário
- `PUT` `/products/:id`: Atualiza o produto `id`
- `PUT` `/user/:id`: Atualiza o usuário `id`
- `DELETE` `/products/:id`: Remove o produto `id`
- `POST` `/logout`: Encerra sessão atual
- `POST` `/login`: Cria nova sessão
- `POST` `/images`: Faz upload de nova imagem de produto
- `DELETE` `/images/:id`: Apaga imagem `id` 

No frontend é possível receber o token a partir da rota de login e operar as rotas protegidas (`WIP`).

É possível navegar através das telas:
- `/`: Página inicial do hotsite, com todos os produtos disponíveis através de categorias (`WIP`)
- `/produto/:id`: Página de detalhes de um produto `id` (`WIP`)
- `/produto/novo`: Página de cadastro de um produto 
- `/login`: Página de login
- `/cadastro`: Página de registro

Obs.: `WIP` significa trabalho em progresso.

Para mais detalhes veja `CHANGELOG.md`

## Contribuidores

As seguintes pessoas contribuiram para este projeto:

* [Denner Vidal](https://github.com/dennervidal)
* [Jean Ortiz](https://github.com/Growx)
* [Guilherme Chiquito](https://github.com/chiquito27)
* [Larissa Fraga](https://github.com/LarissaFraga)
* [Lucas Benevides](https://github.com/lbenevides-s)

## Licença de uso

Este projeto usa a seguinte licença: [MIT License](https://opensource.org/licenses/MIT).
