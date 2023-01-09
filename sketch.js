function setup() {
  createCanvas(600, 400);
  somDaTrilha.loop();
}

function draw() {
  background(imgDaEstrada);
  mostraAtor();
  movimentaAtor();
  mostraMonstro();
  movimentaMonstro();
  verificaColisao();
  incluirPlacar();
  listaVelocidade();
}
