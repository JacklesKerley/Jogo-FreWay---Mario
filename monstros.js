// Monstros

// Variáveis necessárias
let xMonstros = [550, 430, 239, 20, 105, 185];
let yMonstros = [38, 96, 147, 209, 263, 318];
let velocidade = [0, 0, 0, 0, 0, 0];
let comprimentoMonstro = 50;
let alturaMonstro = 40;

// Definindo velocidade
function listaVelocidade() {
  if (placar1 < 2 || placar2 < 2) {
    velocidade = [1, 1.5, 0.8, 0.8, 1.5, 1];
  } else if (placar1 < 4 || placar2 < 4) {
    velocidade = [2, 2.5, 1.8, 1.8, 2.5, 2];
  } else if (placar1 < 6 || placar2 < 6) {
    velocidade = [3, 3.5, 2.8, 2.8, 3.5, 3];
  } else {
    velocidade = [4, 4.5, 3.8, 3.8, 4.5, 4];
  }
}

// Desenha os monstros na tela
function mostraMonstro() {
  for (let i = 0; i < imgMonstros.length; i++) {
    image(
      imgMonstros[i],
      xMonstros[i],
      yMonstros[i],
      comprimentoMonstro,
      alturaMonstro
    );
  }
}
//Movimento dos monstros
function movimentaMonstro() {
  for (let i = 0; i < xMonstros.length - 3; i++) {
    xMonstros[i] -= velocidade[i];
    if (xMonstros[i] < -50) {
      xMonstros[i] = 600;
    }
  }
  for (let i = 3; i < xMonstros.length; i++) {
    xMonstros[i] += velocidade[i];
    if (xMonstros[i] > 600) {
      xMonstros[i] = -50;
    }
  }
}
