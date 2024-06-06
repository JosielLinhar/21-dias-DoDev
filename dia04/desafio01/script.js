// solicitando as informações ao usuario e atribuindo os valores as variaveis
let fome = prompt('Você está com fome? sim/nao');
let dinheiro = prompt('Você tem dinheiro? sim/nao');
let restaurante = prompt('O Restaurante está aberto? sim/nao');

// exibe a mensagem no console
if (fome === 'nao' || dinheiro === 'nao') {
  console.log('Hoje a janta será em casa!');
} else if (fome === 'sim' && dinheiro === 'sim' && restaurante === 'nao') {
  console.log('Peça um delivery');
} else {
  console.log('Hoje o jantar será no seu restaurante preferido');
}
