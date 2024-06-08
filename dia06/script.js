let valor = parseInt(prompt('Digite um número: '));

/* 

Ex 01

for (let contador = 0; contador <= valor; contador++) {
  console.log('Número: ' + contador);
}


Ex 02

for (let contador = 0; contador <= 50; contador += 5) {
  console.log('Número: ' + contador);
}

Ex 03

for (let contador = 50; contador >= 0; contador -= 5) {
  console.log('Número: ' + contador);
}

*/

for (let a = valor; a <= valor + 2; a++) {
  console.log('Tabuada do ' + a);

  for (let contador = 1; contador <= 10; contador++) {
    console.log(`${a} x ${contador} = ${a * contador}`);
  }
}
