const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imgBotaoTrocaTema = document.querySelector(".img-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro")

  if (modoEscuroEstaAtivo) {
    imgBotaoTrocaTema.setAttribute("src", "./assets/sun.png");
  } else {
    imgBotaoTrocaTema.setAttribute("src", "./assets/moon.png");
  }
});
