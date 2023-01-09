// Atores

// Variáveis necesárias
let xAtores = [100, 465];
let yAtores = [368, 368];
let colisao1 = false;
let colisao2 = false;
let placar1 = 0;
let placar2 = 0;

// Desenha os atores na tela
function mostraAtor() {
  for (let i = 0; i < imgAtores.length; i++) {
    image(imgAtores[i], xAtores[i], yAtores[i], 35, 28);
  }
}

//Movimento dos atores + Marcação de Pontos
function movimentaAtor() {
  // Movimento do player 1
  if (keyIsDown(UP_ARROW)) {
    yAtores[0] -= 3;
    if (yAtores[0] <= 0) {
      voltarAoInicio();
      somDoPonto.play();
      placar1 += 1;
    }
  }
  if (keyIsDown(DOWN_ARROW)) {
    yAtores[0] += 3;
    if (yAtores[0] >= 368) {
      voltarAoInicio();
    }
  }
  //Movimento do player 2
  if (keyIsDown(87)) {
    yAtores[1] -= 3;
    if (yAtores[1] <= 0) {
      voltarAoInicio2();
      somDoPonto.play();
      placar2 += 1;
    }
  }
  if (keyIsDown(83)) {
    yAtores[1] += 3;
    if (yAtores[1] >= 368) {
      voltarAoInicio2();
    }
  }
}

// Verifica colisão dos atores com os monstros e penalidade de pontos
function verificaColisao() {
  for (let i = 0; i < imgMonstros.length; i++) {
    // Verifica colisão do player 1
    colisao1 = collideRectCircle(
      xMonstros[i],
      yMonstros[i],
      comprimentoMonstro,
      alturaMonstro,
      xAtores[0],
      yAtores[0],
      10
    );
    if (colisao1) {
      voltarAoInicio();
      somDaColisao.play();
      if (placar1 > 0) {
        placar1 -= 1;
      }
    }
    // Verifica colisão do player 2
    colisao2 = collideRectCircle(
      xMonstros[i],
      yMonstros[i],
      comprimentoMonstro,
      alturaMonstro,
      xAtores[1],
      yAtores[1],
      10
    );
    if (colisao2) {
      voltarAoInicio2();
      somDaColisao.play();
      if (placar2 > 0) {
        placar2 -= 1;
      }
    }
  }
}

// Função de retorno a posição inicial
function voltarAoInicio() {
  yAtores[0] = 368;
}
function voltarAoInicio2() {
  yAtores[1] = 368;
}

// Inclusão de Placar na tela
function incluirPlacar() {
  textAlign(CENTER);
  textSize(25);
  textStyle(BOLD);
  fill(color(255, 103, 0));
  text(placar1, 220, 27);
  text(placar2, 380, 27);
}
