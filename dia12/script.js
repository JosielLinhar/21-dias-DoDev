let nomes = [];
let senhas = [];
let contador = 0;
let confirma = true;
let baseConfirma = true;

do {
  let solicitacao = prompt(
    'O que deseja fazer? \n1 - Cadastrar \n2 - Login \n3 - Excluir cadastro \n4 - Encerrar programa'
  );

  switch (solicitacao) {
    case '1':
      while (confirma) {
        let user = prompt('Criar Usuário');
        let passw = prompt('Criar senha');
        let encerrar = prompt('Deseja encerrar o programa? (s/n)');

        nomes[contador] = user;
        senhas[contador] = passw;

        contador++;

        if (encerrar == 's') {
          confirma = false;
          console.log('Cadastro realizado com sucesso!');
        }
      }
      break;
    case '2':
      while (confirma) {
        user = prompt('Digite seu usuário');
        passw = prompt('Digite sua senha');
        if (nomes.includes(user) && senhas.includes(passw)) {
          confirma = false;
          console.log(`Login realizado com sucesso!`);
        } else {
          encerrar = prompt(
            'Usuário ou senha não corresponde, deseja continuar? (s/n)'
          );
          if (encerrar !== 's') {
            confirma = false;
          }
        }
      }
  }
} while (baseConfirma);
