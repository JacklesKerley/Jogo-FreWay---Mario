// Imagens sons do jogo

// Função de carregamento
function preload() {
  imgDaEstrada = loadImage("imagens/estrada.png");
  imgDoAtor = loadImage("imagens/mario.png");
  imgDoAtor1= loadImage("imagens/luigi.png")
  imgBala = loadImage("imagens/bala.png");
  imgFantasma = loadImage("imagens/fantasma.png");
  imgEspinho = loadImage("imagens/espinhoinvertido.png");
  imgBala2 = loadImage("imagens/balainvertida.png");
  imgFantasma2 = loadImage("imagens/fantasmainvertido.png");
  imgEspinho2 = loadImage("imagens/espinho.png");
  
  imgMonstros = [imgBala, imgFantasma, imgEspinho, imgEspinho2, imgFantasma2, imgBala2];
  imgAtores = [imgDoAtor, imgDoAtor1];

  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}

