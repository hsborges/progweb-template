# PreservSign

<!--- Exemplos de badges. Acesse https://shields.io para outras opções. Você pode querer incluir informações de dependencias, build, testes, licença, etc. --->
![GitHub repo size](https://img.shields.io/github/repo-size/igorbgalvan/progweb13)
![GitHub contributors](https://img.shields.io/github/contributors/igorbgalvan/progweb13)

PreservSign é um clube de assinatura que tem por objetivo facilitar a aquisição de preservativos, através do qual se espera difundir a cultura de uso de preservativos em uma tentativa de mitigar o crescimento exponencial dos índices de infecção por IST's.

A aplicação permitirá que o usuário receba mensalmente uma quantidade variável de preservativos e complementos. O funcionamento se dá através de planos que serão pagos mensalmente, ou anualmente com desconto.

Os planos serão divididos em 3 categorias: básico, premium, exxxtra. Cada plano dá direito a tipos diferentes de preservativos e o plano exxxtra adiciona lubrificante como complemento a ser enviado.


## Pré-requisitos

Antes de iniciar, certifique-se de cumprir os seguintes requisitos:
<!--- Estes são alguns exemplos de requisitos. Adicione, duplique e remove como necessário --->
* Você deve possuir a última versão do PHP, HTML, JavaScript e CSS instalado.
* Você deve possuir uma máquina Linux e Mac.
* Você deve ler o https://www.php.net/manual/pt_BR/ dos termos de uso do PHP.
* Você deve ler o https://dev.w3.org/html5/html-author/ dos termos de uso do HTML 5.
* Você deve ler o https://www.w3schools.com/cssref/ dos termos de uso do CSS 3.
* Você deve possuir o composer na versão 1.6.3 https://getcomposer.org/download/
* Você deve possuir o Laravel installer 3.1 https://laravel.com/docs/7.x/installation
* Você deve possuir o laravel/ui https://laravel.com/docs/7.x/authentication
* Você deve possuir um banco de dados que deve ser especificado no arquivo ".env"

## Como executar

Para fazer o deploy da aplicação siga os seguintes passos:

Linux/macOS/Windows:
````Arquivos de configuração pessoal do projeto(.env)
<commando 1>
````composer require laravel/ui
<commando 2>
````php artisan migrate:fresh
<commando 3>
````php artisan serve

````Para fins de teste, o banco de dados utilizado foi o mySQL.
<commando sugerido>
````(Feito em ambiente unix - Ubuntu)
sudo apt-get install php-mysql


## Usando PreservSign

Para usar Nome_da_Aplicação, siga os seguintes passos (exemplos):
* Abra o navegador e digite o seguinte endereço: http://manancial.net/preservsign ou https://localhost .
* Ao abrir a aplicação você poderá:
  * Navegar pelo conteúdo público
  * Entrar com usuário e senha
  * Cadastrar novo usuário e senha
  * Realizar assinatura
  * Cancelar assinatura
  * Fazer upgrade da assinatura
  * Fazer downgrade da assinatura
  * Alterar informações de usuário
  * Deletar conta

* *Continua ...*  

*Descreva as principais atividades, e/ou fluxos, que são possíveis de serem realizadas na aplicação.*

## Evolução da Aplicação
* Primeira Sprint
    * Protótipo das Telas
    * Esqueleto Visual da Aplicação
* Segunda Sprint
    * Cadastro
    * Login
    * Edição de Perfil
    * Edição de Senha
    * Banco de Dados da Aplicação
    * Refinamentos Visuais
* Terceira Sprint
    * Finalização da Aplicação 

## Contribuidores

As seguintes pessoas contribuiram para este projeto:

* Ericca Rickli (https://github.com/ericcarickli)
* Gabriel Matias (https://github.com/gabbmatias)
* Guilherme Jardim (https://github.com/jardimguilherme)
* Igor Galvan (https://github.com/igorbgalvan)
* Ricardo Koester (https://github.com/Ricardoksp)

## Licença de uso

<!--- Se não tiver certeza de qual, verifique este site: https://choosealicense.com/--->
Este projeto usa a seguinte licença: https://mit-license.org.
