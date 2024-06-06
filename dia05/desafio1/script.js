// Criando variáveis
let num1 = parseInt(prompt('Digite o primeiro número: '));
let num2 = parseInt(prompt('Digite o segundo número: '));

let operacao = Number(
  prompt('Qual operação deseja realizar: \n1 = +; \n2 = -; \n3 = *; \n4 = /;')
);

let resultado;

// criando switchcase
switch (operacao) {
  case 1:
    resultado = num1 + num2;
    console.log(`${num1} + ${num2} = ${resultado}`);
    break;
  case 2:
    resultado = num1 - num2;
    console.log(`${num1} - ${num2} = ${resultado}`);
    break;
  case 3:
    resultado = num1 * num2;
    console.log(`${num1} * ${num2} = ${resultado}`);
    break;
  default:
    resultado = num1 / num2;
    console.log(`${num1} / ${num2} = ${resultado}`);
    break;
}
