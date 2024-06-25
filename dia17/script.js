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
  let entrada = prompt("Informe o dia de entrada");
  let saida = prompt("Informe o dia de saida");

  let reserva = new Reserva(idReserva, id, responsavel, entrada, saida);

  if (hoteis.some((x) => x.Id == id)) {
    reservas.push(reserva);
  } else {
    console.log("Id de Hotel inválido");
  }

  idReserva++;
  return reserva;
}

function idReservas() {
  let id = parseInt(prompt("Informe o id do hotel"));

  hoteis.forEach((x) => {
    if (x.Id == id) {
      console.log(`Hotel: ${x.Nome}`);
    }
  });

  reservas.forEach((x) => {
    if (x.IdHotel == id) {
      console.log(
        `Responsável: ${x.Responsavel}, Entrada: ${x.Entrada}, Saida: ${x.Saida}`
      );
    }
  });
}

let continua = true;

while (continua) {
  let informe = prompt(
    "O que deseja fazer? \n1 - Cadastrar hotel \n2 - Fazer uma reserva \n3 - Filtrar reservas por hotel"
  );

  switch (informe) {
    case "1":
      cadHoteis();
      break;
    case "2":
      cadReservas();
      break;
    case "3":
      idReservas();
      break;
    default:
      continua = false;
  }
}
