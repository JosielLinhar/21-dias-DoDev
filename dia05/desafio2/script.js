// criando variáveis
let escolhaUsuario = prompt(
  'Você deseja: \n1 - Gasolina; \n2 - Álcool; \n3 - Calibrar os pneus;'
);

let valor;
let resultado;

// criando switchcase
switch (escolhaUsuario) {
  case '1':
    valor = parseInt(prompt('Digite o valor desejado R$:'));
    resultado = valor / 5;
    console.log(`Você abasteceu ${resultado}L de gasolina`);
    break;
  case '2':
    valor = parseInt(prompt('Digite o valor desejado R$:'));
    resultado = valor / 3;
    console.log(`Você abasteceu ${resultado}L de álcool`);
    break;
  default:
    console.log('pneus calibrados com sucesso');
    break;
}
