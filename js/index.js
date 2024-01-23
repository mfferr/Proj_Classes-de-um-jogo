class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = " ";

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "atacou";
        break;
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
  }
}

const h1 = new Heroi("Hércules", 100, "guerreiro");
const h2 = new Heroi("Merlim", 10, "mago");
const h3 = new Heroi("Shaolin", 22, "monge");
const h4 = new Heroi("Mochizuki Chiyome", 80, "ninja");

h1.atacar();
h2.atacar();
h3.atacar();
h4.atacar();
