class Computador {
  tipo;
  processador;
  video;
  armazenamento;
  memoriaRam;
  ssd;
  constructor(tipo, processador, video, armazenamento, memoriaRam, ssd) {
    this.tipo = tipo;
    this.processador = processador;
    this.video = video;
    this.armazenamento = armazenamento;
    this.memoriaRam = memoriaRam;
    this.ssd = ssd;
  }
}

let computadores = [];
let continuar = true;
let index = 0;

while (continuar) {
  let tipoComputador = prompt(
    'Digite o tipo do seu computador: Desktop/Notebook'
  );
  let nomeProcessador = prompt('Digite o nome do seu processador, ex: Ryzen 5');
  let tipoVideo = prompt('Placa de video integrada ou dedicada?');
  let qtdArmazenamento = parseInt(
    prompt('Digite o número em GB de armazenamento, ex: 500 ou 1000')
  );
  let qtdMemoriaRam = parseInt(
    prompt('Digite o número em GB de memória ram, ex: 4, 8 ou 16...')
  );
  let temSSD = prompt('Tem ssd? (s/n)');
  if (temSSD == 's') {
    temSSD = true;
  } else {
    temSSD = false;
  }

  let meuComputador = new Computador(
    tipoComputador,
    nomeProcessador,
    tipoVideo,
    qtdArmazenamento,
    qtdMemoriaRam,
    temSSD
  );

  computadores[index] = meuComputador;
  index++;

  let prosseguir = prompt('Deseja cadastrar outro computador? (s/n)');

  if (prosseguir != 's') {
    continuar = false;
  }
}
