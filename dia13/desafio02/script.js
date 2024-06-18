class Carro {
  Nome;
  Potencia;
  VelocidadeMaxima;
  Aceleracao;

  constructor(nome, potencia, velocidadeMaxima, aceleracao) {
    this.Nome = nome;
    this.Potencia = potencia;
    this.VelocidadeMaxima = velocidadeMaxima;
    this.Aceleracao = aceleracao;
  }

  CalcularTempoMedio(dis) {
    let resultado = dis / (this.VelocidadeMaxima / this.aceleracao);
    return resultado;
  }
}

class Corrida {
  Nome;
  Tipo;
  Distancia;
  Participantes;
  Vencedor;
  constructor(nome, tipo, distancia) {
    this.Nome = nome;
    this.Tipo = tipo;
    this.Distancia = distancia;
    this.Vencedor = '';
    this.Participantes = [];
  }

  DefinirVencedor() {
    let menorTempo = this.Participantes[0].CalcularTempoMedio(this.Distancia);
    let vencedor = this.Participantes[0];

    for (let index = 1; index < this.Participantes.lenght; index++) {
      let tempo = this.Participantes[index].CalcularTempoMedio(this.Distancia);
      if (tempo < menorTempo) {
        menorTempo = tempo;
        vencedor = this.Participantes[index];
      }
    }
    return (this.Vencedor = vencedor);
  }

  ExibirVencedor() {
    alert('O vencedor é ' + this.Vencedor.Nome);
  }
}

let corrida = new Corrida('Imola', 'Fórmula 1', 4900000);

corrida.Participantes[0] = new Carro('RedBull', 480, 330, 2);
corrida.Participantes[1] = new Carro('Mercedes', 460, 328, 3);
corrida.Participantes[2] = new Carro('Ferrari', 470, 329, 3);

corrida.DefinirVencedor();
corrida.ExibirVencedor();
