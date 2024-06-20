// arrays para armazenas usuários e senhas
let usuarios = [];
let senhas = [];

// função para solicitar a opção ao usuário
function operacao() {
  let opcao = prompt(
    'O que deseja fazer? \n1 - Cadastrar \n2 - Login \n3 - Excluir cadastro \n4 - Encerrar programa'
  );
  return opcao;
}

// função para cadastrar usuário
function cadastrar() {
  usuarios.push(prompt('Crie um usuário'));
  senhas.push(prompt('Crie uma senha'));
}

// função para fazer login
function fazerLogin(nome, senha) {
  let indice = usuarios.indexOf(nome);
  if (indice !== -1 && senhas[indice] == senha) {
    return true;
  } else {
    return false;
  }
}

// função para excluir cadastro
function excluirCadastro(nome) {
  let indice = usuarios.indexOf(nome);
  if (indice !== -1) {
    usuarios.splice(indice, 1);
    senhas.splice(indice, 1);
    console.log('Cadastro excluído!');
  } else {
    console.log('Usuário não encontrado');
  }
}

// Fluxo de funcionamento do programa
let continuar = true;
while (continuar) {
  let opcao = operacao();

  switch (opcao) {
    case '1':
      cadastrar();
      break;
    case '2':
      let nome = prompt('Digite seu usuário');
      let senha = prompt('Digite sua senha');
      let login = fazerLogin(nome, senha);
      if (login) {
        console.log('Login realizado com sucesso!');
      } else {
        console.log('Usuário ou senha incorretos!');
      }
      break;
    case '3':
      let nomeExcluir = prompt('Digite o usuário que deseja excluir');
      excluirCadastro(nomeExcluir);
      break;
    case '4':
      continuar = false;
      break;
    default:
      console.log('Opção inválida');
      break;
  }
}
