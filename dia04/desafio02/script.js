// solicitando as informações ao usuario e atribuindo os valores as variaveis
let nome = prompt('Digite seu nome:');
let idade = parseInt(prompt('Digite sua idade:'));
let carteira = prompt('Você tem CNH? sim/nao');
let carro = prompt('Você tem carro? sim/nao');

// exibe a mensagem no console
if (idade < 18 || carteira === 'nao') {
  console.log(`${nome}, você não pode dirigir`);
} else if (idade >= 18 && carteira === 'sim' && carro === 'nao') {
  console.log(`${nome}, você pode dirigir mas não tem um carro`);
} else {
  console.log(`${nome}, você será o novo motorista!`);
}
