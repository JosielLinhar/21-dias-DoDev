let modelo = [];
let ano = [];
let valor = [];

let continuar = true;
let contador = 0;

while (continuar) {
  let cadModelo = prompt('Digite o modelo do carro');
  let cadAno = parseInt(prompt('Digite o ano do carro'));
  let cadValor = parseInt(prompt('Digite o valor do carro'));

  modelo[contador] = cadModelo;
  ano[contador] = cadAno;
  valor[contador] = cadValor;

  contador++;

  let confirma = prompt('Deseja cadastrar mais um carro? (s/n)');
  if (confirma != 's') {
    continuar = false;
  }
}

for (let i = 0; i < valor.length - 1; i++) {
  for (let j = 0; j < valor.length - i - 1; j++) {
    if (valor[j] > valor[j + 1]) {
      let modeloMaiorValor = modelo[j];
      modelo[j] = modelo[j + 1];
      modelo[j + 1] = modeloMaiorValor;

      let anoMaiorValor = ano[j];
      ano[j] = ano[j + 1];
      ano[j + 1] = anoMaiorValor;

      let maiorValor = valor[j];
      valor[j] = valor[j + 1];
      valor[j + 1] = maiorValor;
    }
  }
}

console.log('Carros ordenados pelo preço:');
for (let i = 0; i < modelo.length; i++) {
  console.log(`${modelo[i]} - ${ano[i]} - ${valor[i]}`);
}
