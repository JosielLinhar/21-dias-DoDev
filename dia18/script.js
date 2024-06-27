class Livro {
  Titulo;
  Autor;
  Editora;
  AnoPublicado;
  Disponilibidade;

  constructor(titulo, autor, editora, anoPublicado) {
    this.Titulo = titulo;
    this.Autor = autor;
    this.Editora = editora;
    this.AnoPublicado = anoPublicado;
    this.Disponilibidade = true;
  }
}

class Biblioteca {
  Nome;
  Endereco;
  Telefone;
  AcervoLivros;

  constructor(nome, endereco, telefone) {
    this.Nome = nome;
    this.Endereco = endereco;
    this.Telefone = telefone;
    this.AcervoLivros = livros;
  }

  buscarLivro() {
    let nomeLivro = prompt("Digite o nome do livro");

    if (nomeLivro == "") {
      console.log("Digite um nome válido");
    } else {
      livros.forEach((livro) => {
        if (livro.Titulo == nomeLivro) {
          console.log(`Titulo: ${livro.Titulo}`);
          console.log(`Autor: ${livro.Autor}`);
          console.log(`Editora: ${livro.Editora}`);
          console.log(`Ano de publicação: ${livro.AnoPublicado}`);
          if (livro.Disponilibidade) {
            console.log("Disponível: Sim");
          } else {
            console.log("Disponível: Não");
          }
        }
      });
    }
  }

  emprestimoLivro() {
    let nomeLivro = prompt("Digite o nome do livro");
    if (nomeLivro == "") {
      console.log("Digite um nome válido");
    } else {
      let livroEncontrado = livros.find((livro) => livro.Titulo == nomeLivro);

      if (livroEncontrado.Disponilibidade) {
        livroEncontrado.Disponilibidade = false;
        return true;
      } else {
        return false;
      }
    }
  }

  devolverLivro() {
    let nomeLivro = prompt("Digite o nome do livro");

    if (nomeLivro == "") {
      console.log("Digite um nome válido");
    } else {
      let livroEncontrado = livros.find((livro) => livro.Titulo == nomeLivro);
      livroEncontrado.Disponilibidade = true;
      console.log("Livro devolvido");
    }
  }
}

let livros = [];

let meninoMaluquinho = new Livro(
  "O Menino Maluquinho",
  "Ziraldo",
  "Melhoramentos",
  2023
);
let diarioBanana = new Livro(
  "Diário de um Banana 1",
  "Jeff Kinney",
  "VR",
  2008
);
let pequenoPrincipe = new Livro(
  "O Pequeno Príncipe",
  "Antoine de Saint-Exupéry",
  "HarperCollins",
  2018
);

livros.push(meninoMaluquinho, diarioBanana, pequenoPrincipe);

let aurora = new Biblioteca("Biblioteca Aurora", "Centro SP", "11 99343-3342");
