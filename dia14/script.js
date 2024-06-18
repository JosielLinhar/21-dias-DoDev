function informacao() {
  let nome = prompt('Digite seu nome: ');
  let salario = parseInt(prompt('Digite seu salario, ex: 1500'));

  calcular(nome, salario);
}

function calcular(nome, salario) {
  let aumento = 0;

  if (salario <= 1500) {
    aumento = 0.2;
  } else if (salario >= 1501 && salario <= 2000) {
    aumento = 0.15;
  } else if (salario >= 2001 && salario <= 3000) {
    aumento = 0.1;
  } else {
    aumento = 0.05;
  }

  let salarioReajuste = salario + salario * aumento;

  console.log(
    `Nome: ${nome}, Salário: ${salario}, Aumento: ${
      aumento * 100
    }%, Salário reajustado: ${salarioReajuste}`
  );

  reajuste();
}

function reajuste() {
  let calcular = prompt(
    'Deseja calcular novamente com novas informações? (s/n)'
  );
  if (calcular == 's') {
    informacao();
  } else {
    console.log('Programa encerrado!');
  }
}

informacao();
