class bio {

    constructor (nomeDoHeroi, idade, classeDoHeroi, tipoDeAtaque){
        this.nomeDoHeroi = nomeDoHeroi;
        this.idade = idade;
        this.classeDoHeroi = classeDoHeroi;
        this.tipoDeAtaque = tipoDeAtaque;
    }

    Heroi(){
        console.log("Esse é o nome do heroi: " + this.nomeDoHeroi + ", sua idade: " + this.idade +" e sua classe: " + this.classeDoHeroi)
    }

    Ataque(){
        console.log("Ele é "+ this.classeDoHeroi + " usando o " + this.tipoDeAtaque)
    }
}

let novoHeroi = new bio("Gabriel", 23 , "Guerreiro", "Ataque de espada");

novoHeroi.Heroi();
novoHeroi.Ataque();