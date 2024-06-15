let nomes = [];
let senhas = [];
let contador = 0;
let continuar = true;

while (continuar) {
  let solicitacao = prompt(
    'O que deseja fazer? \n1 - Cadastrar \n2 - Login \n3 - Excluir cadastro \n4 - Encerrar programa'
  );

  switch (solicitacao) {
    case '1':
      //Criando usuário
      nomes[contador] = prompt('Criar Usuário');
      senhas[contador] = prompt('Criar senha');

      contador++;

      break;
    case '2':
      //Fazendo login
      let nome = prompt('Digite seu usuário');
      let senha = prompt('Digite sua senha');
      let loginValido = false;

      for (let i = 0; i < nomes.length; i++) {
        if (nome == nomes[i] && senha == senhas[i]) {
          loginValido = true;
        }
      }

      if (loginValido) {
        alert('Login realizado com sucesso. Bem-vindo!');
      } else {
        alert('Login ou senha incorretos');
      }
      break;
    case '3':
      //Excluindo usuario
      let nomeExcluir = prompt('Qual o usuario que deseja excluir?');
      let nomesAux = [];
      let senhasAux = [];
      let contadorAux = 0;

      for (let i = 0; i < contador; i++) {
        if (nomeExcluir == nomes[i]) {
          alert('Cadastro excluído com sucesso');
        } else {
          nomesAux[contadorAux] = nomes[i];
          senhasAux[contadorAux] = senhas[i];
          contadorAux++;
        }
      }

      nomes = nomesAux;
      senhas = senhasAux;
      contador--;

      break;
    case '4':
      continuar = false;
      break;
    default:
      console.log('Opção invalida, escolha outra!');
      break;
  }
}
