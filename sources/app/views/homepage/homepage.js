/**
 * Escuta se acionou o evento change para mostrar o nome do arquivo.
 */
document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("nova-imagem").addEventListener("change", function() {
        mostrarNomeArq();
    }, false);

}, false);

/* Função que muda a visualização dependendo da opção escolhida pelo usuário*/
function exibirAlbum(classeExibir, numButtom) {
    var classValues = document.getElementsByClassName(classeExibir);
    for (var i = 0; i < classValues.length; i++) {
        if (i == numButtom) {
            classValues[i].style.display = "block";
        } else {
            classValues[i].style.display = "none";
        }
    }
}

function exibirAddImagem(){
    var values = document.getElementsByClassName('CadastrarImagem');
    var valorAtual = values[0].style.display;
    if(valorAtual == "block"){
        values[0].style.display = "none";
    }
    else{
        values[0].style.display = "block";
    }
}

function exibirImagemOrVideo(numButtom) {
    var imagens = document.getElementsByClassName('Imagensdoalbum');
    var videos = document.getElementsByClassName('Videosdoalbum');
        if (numButtom == 0) {
            for (var i = 0; i < imagens.length; i++) {
                imagens[i].style.display = "block";
            }
            for (var i = 0; i < videos.length; i++) {
                videos[i].style.display = "none";
            }
        }
        else {
            for (var i = 0; i < imagens.length; i++) {
                imagens[i].style.display = "none";
            }
            for (var i = 0; i < videos.length; i++) {
                videos[i].style.display = "block";
            }
        }
}


/* Função que altera a cor dos botões dependendo o botão que foi clicado colocando fundo*/
function mudarCorButtonsMenu(classOfButtons, numButtom) {
    var colorValue = document.getElementsByClassName(classOfButtons);
    for (var i = 0; i < colorValue.length; i++) {
        if (i == numButtom) {
            colorValue[i].style.background = "#ff00b7";
        } else {
            colorValue[i].style.background = "black";
        }
    }
}
/* Função que altera a cor dos botões dependendo o botão que foi clicado colocando borda*/
function mudarCorButtonsMenuBorder(classOfButtons, numButtom) {
    var colorValue = document.getElementsByClassName(classOfButtons);
    for (var i = 0; i < colorValue.length; i++) {
        if (i == numButtom) {
            colorValue[i].style.borderColor = "#ff00b7";
        } else {
            colorValue[i].style.borderColor = "black";
        }
    }
}
function blueFirst(classOfButtons, numButtom){
    var colorValue = document.getElementsByClassName(classOfButtons);
    var i = 0;
    colorValue[i].style.background = "#ff00b7";
}

function mostrarNomeArq() {
    document.getElementById("spupload").innerHTML = "";
    var nomeArquivo = document.getElementById("nova-imagem").value;
    document.getElementById("spupload").innerHTML = nomeArquivo;
}

//responsável pelo menu de contexto
function aparecerMenuContexto(ClassNumber){
    var values = document.getElementsByClassName("texto");
    for (var i = 0; i < values.length; i++) {
        if (i != ClassNumber) {
            values[i].style.display = "none";
        } else {
            values[i].style.display = "block";
        }
    }
}

function desapareceContextoClicandoFora() {
    var values = document.getElementsByClassName("texto");
    for (var i = 0; i < values.length; i++) {
            values[i].style.display = "none";
    }
}

function expandirVideo(nomeImagem){
    novohtml = "\t\t<figure id=\"expansao\">\n" +
        "\t\t\t<video id=\"videoExpansao\" controls>\n" +
        "\t\t\t\t<source src=\"public/upload/"+nomeImagem+"\" type=\"video/mp4\">\n" +
        "\t\t\t</video>\n" +
        "\t\t\t<figcaption id=\"captionExpansao\">\n" +
        "\t\t\t\t<button id=\"btnMinimizar\"><img class=\"imgIconeExpansao\" onclick=\"minimizar()\" src=\"public/icones/minimizar.png\" alt=\"Minimizar\">Minimizar</button><br>\n" +
        "\t\t\t\t<a href=\"\"><img class=\"imgIconeExpansao\" src=\"public/icones/detalhes.png\" alt=\"Ver detalhes\"></a>Detalhes<br>\n" +
        "\t\t\t\t<a href=\"\"><img class=\"imgIconeExpansao\" src=\"public/icones/favorito.png\" alt=\"Favoritar\"></a>Favorito<br>\n" +
        "\t\t\t\t<a href=\"\"><img class=\"imgIconeExpansao\" src=\"public/icones/add.png\" alt=\"Adcionar para Álbum\"></a>Álbum<br>\n" +
        "\t\t\t\t<a href=\"\"><img class=\"imgIconeExpansao\" src=\"public/icones/excluir.png\" alt=\"Deletar\"></a>Deletar<br>\n" +

        "\t\t\t</figcaption>\n" +
        "\t\t</figure>"
    document.querySelector('article').insertAdjacentHTML('afterbegin', novohtml);
    var values = document.getElementsByClassName("Albuns");
}

function expandirImagem(nomeImagem){
    novohtml = "\t\t<figure id=\"expansao\">\n" +
        "\t\t\t\t<img id=\"videoExpansao\" src=\"public/upload/"+nomeImagem+"\">\n" +
        "\t\t\t<figcaption  id=\"captionExpansao\">\n" +
        "\t\t\t\t<button id=\"btnMinimizar\"><img class=\"imgIconeExpansao\" onclick=\"minimizar()\" src=\"public/icones/minimizar.png\" alt=\"Minimizar\">Minimizar</button><br>\n" +
        "\t\t\t\t<a href=\"\"><img class=\"imgIconeExpansao\" src=\"public/icones/detalhes.png\" alt=\"Ver detalhes\"></a>Detalhes<br>\n" +
        "\t\t\t\t<a href=\"\"><img class=\"imgIconeExpansao\" src=\"public/icones/favorito.png\" alt=\"Favoritar\"></a>Favorito<br>\n" +
        "\t\t\t\t<a href=\"\"><img class=\"imgIconeExpansao\" src=\"public/icones/add.png\" alt=\"Adcionar para Álbum\"></a>Álbum<br>\n" +
        "\t\t\t\t<a href=\"\"><img class=\"imgIconeExpansao\" src=\"public/icones/excluir.png\" alt=\"Deletar\"></a>Deletar<br>\n" +
        "\t\t\t</figcaption>\n" +
        "\t\t</figure>"
    document.querySelector('article').insertAdjacentHTML('afterbegin', novohtml);
}

function minimizar(){
    document.getElementById('expansao').remove();
}

function exbirCompartilharAlbum($idCodigoAlbum){
    novohtml = "    <div class=\"CompartilharAlbum\" id=\"CompartilharAlbum\">\n" +
        "        <h1>Compartilhe usando o código:</h1>\n" +
        "        <h2>"+$idCodigoAlbum+"</h2>\n" +
        "        <button id=\"btnupload\" onclick=\"minimizarCompartilhar()\">Fechar</button>\n" +
        "    </div>"
    document.querySelector('article').insertAdjacentHTML('afterbegin', novohtml);
}

function minimizarCompartilhar() {
    document.getElementById('CompartilharAlbum').remove();
}
