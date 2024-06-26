class Hotel {
  Id;
  Nome;
  Categoria;
  Endereco;
  Telefone;
  constructor(id, nome, categoria, endereco, telefone) {
    this.Id = id;
    this.Nome = nome;
    this.Categoria = categoria;
    this.Endereco = endereco;
    this.Telefone = telefone;
  }
}

class Reserva {
  Id;
  IdHotel;
  Responsavel;
  Entrada;
  Saida;
  constructor(id, idHotel, responsavel, entrada, saida) {
    this.Id = id;
    this.IdHotel = idHotel;
    this.Responsavel = responsavel;
    this.Entrada = entrada;
    this.Saida = saida;
  }
}

let hoteis = [];
let reservas = [];
let idHotel = 1;
let idReserva = 1;

function informe() {
  let opcoes = prompt(
    "O que deseja fazer? \n1 - Cadastrar hotel \n2 - Fazer uma reserva \n3 - Filtrar reservas pelo ID de hotel \n4 - Filtrar reservas pelo ID de reserva \n5 - Ver suas reservas \n6 - Pesquise hoteis por categoria \n7 - Alterar telefone \n8 - Encerrar programa"
  );

  return opcoes;
}

function cadHoteis() {
  let nomeHotel = prompt("Digite o nome do hotel");
  let categoriaHotel = prompt("Digite a categoria do hotel");
  let enderecoHotel = prompt("Digite o endereço do hotel");
  let telefoneHotel = prompt("Digite o telefone do hotel");

  let hotel = new Hotel(
    idHotel,
    nomeHotel,
    categoriaHotel,
    enderecoHotel,
    telefoneHotel
  );

  hoteis.push(hotel);
  idHotel++;

  return hotel;
}

function cadReservas() {
  let id = parseInt(prompt("Informe o id do hotel"));
  let responsavel = prompt("Informe o nome do responsavel");
  let entrada = parseInt(prompt("Informe o dia de entrada"));
  let saida = parseInt(prompt("Informe o dia de saida"));

  let reserva = new Reserva(idReserva, id, responsavel, entrada, saida);

  if (entrada > saida) {
    console.log("Dia de entrada não pode ser maior que o dia de saída");
    return;
  } else {
    if (hoteis.some((x) => x.Id == id)) {
      reservas.push(reserva);
    } else {
      console.log("Id de Hotel inválido");
    }
  }

  idReserva++;
  return reserva;
}

function idReservas() {
  let id = parseInt(prompt("Informe o id do hotel"));
  let hotelEncontrado = hoteis.find((x) => x.Id == id);

  if (hotelEncontrado) {
    console.log(`Nome do Hotel: ${hotelEncontrado.Nome}`);

    reservas.forEach((j) => {
      if (j.IdHotel == id) {
        console.log(
          `Responsável: ${j.Responsavel}, dia de Entrada: ${j.Entrada}, dia de Saída: ${j.Saida}`
        );
      }
    });
  } else {
    console.log(`Nenhum hotel foi encontrado com o ID ${id}`);
  }
}

function retornaHotel() {
  let idReserva = parseInt(prompt("Informe o id da sua reserva"));

  let retornaID = reservas.find((x) => x.Id == idReserva);

  if (retornaID) {
    let retornaHotel = hoteis.find((x) => x.Id == retornaID.Id);

    if (retornaHotel) {
      console.log(`Nome do Hotel: ${retornaHotel.Nome}`);
      console.log(`Endereço: ${retornaHotel.Endereco}`);
      console.log(`Dia de entrada: ${retornaID.Entrada}`);
      console.log(`Dia de saída: ${retornaID.Saida}`);
    } else {
      console.log(`Nenhum hotel encontrado com o ID ${idReserva}`);
    }
  } else {
    console.log(`Nehuma reserva encontrada com o ID ${idReserva}`);
  }
}

function pesquisaReservas() {
  let nome = prompt("Informe o nome da reserva");

  let reservasCad = reservas.filter((x) => x.Responsavel == nome);

  if (reservasCad && reservasCad.length > 0) {
    console.log(`Você tem ${reservasCad.length} reservas`);

    for (let i = 0; i < reservasCad.length; i++) {
      console.log(reservasCad[i]);
    }
  } else {
    console.log(`Nenhuma reserva encontrada para ${nome}`);
  }
}

function pesquisaHoteis() {
  let categorias = [];
  let informeCategoria = prompt("Informe a categoria do Hotel");

  let categoriasHotel = hoteis.filter((x) => x.Categoria == informeCategoria);

  if (categoriasHotel == 0) {
    console.log(`Nenhum hotel encontrado na categoria ${informeCategoria}`);
  } else {
    categoriasHotel.forEach((x) => categorias.push(x.Nome));

    console.log(`Hoteis na categoria ${informeCategoria}`);
    console.log(categorias);
  }
}

function alterarTelefone() {
  let idAlterar = prompt("Digite o id do hotel");

  if (!idAlterar) {
    console.log("Por favor digite um id válido");
  } else {
    let numero = hoteis.find((x) => x.Id == idAlterar);

    if (!numero) {
      console.log(`Hotel não localizado com o ID ${idAlterar}`);
    } else {
      let novoTelefone = prompt("Digite o telefone novo");
      let numeroAntigo = numero.Telefone;

      numero.Telefone = novoTelefone;

      console.log("Número de telefone alterado");
      console.log(`Número antigo: ${numeroAntigo}`);
      console.log(`Número novo: ${numero.Telefone}`);
    }
  }
}

let continua = true;

while (continua) {
  let menu = informe();

  switch (menu) {
    case "1":
      cadHoteis();
      break;
    case "2":
      cadReservas();
      break;
    case "3":
      idReservas();
      break;
    case "4":
      retornaHotel();
      break;
    case "5":
      pesquisaReservas();
      break;
    case "6":
      pesquisaHoteis();
      break;
    case "7":
      alterarTelefone();
      break;
    default:
      continua = false;
  }
}
