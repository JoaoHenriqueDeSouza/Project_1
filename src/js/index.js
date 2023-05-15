

const botaoAlterarTema = document.getElementById
    ("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

const modoEscuroAtivo = body.classList.contains("tema-escuro")



botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("tema-escuro")

    body.classList.toggle("tema-escuro")

    if (modoEscuroAtivo) {

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");

    } else {

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
    }

});





