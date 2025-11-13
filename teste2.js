class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        const mapaAtaques = {
            mago: "magia",
            guerreiro: "espada",
            monge: "artes marciais",
            ninja: "shiriken"
        };

        const ataque = mapaAtaques[this.tipo.toLowerCase()];
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

const heroi1 = new Heroi("Merlin", 150, "mago");
const heroi2 = new Heroi("Conan", 30, "guerreiro");
const heroi3 = new Heroi("Li", 28, "monge");
const heroi4 = new Heroi("Kage", 25, "ninja");

heroi1.atacar();
heroi2.atacar();
heroi3.atacar();
heroi4.atacar();

const heroi5 = new Heroi("Alguém", 40, "arqueiro");
heroi5.atacar();