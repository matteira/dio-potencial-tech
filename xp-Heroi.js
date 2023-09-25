let heroName = "Gabriel";
let xp = 11000;

let levelHero;

if (xp <= 1000) {
  levelHero = "Ferro";
} else if (xp <= 2000) {
  levelHero = "Bronze";
} else if (xp <= 5000) {
  levelHero = "Prata";
} else if (xp <= 7000) {
  levelHero = "Ouro";
} else if (xp <= 8000) {
  levelHero = "Platina";
} else if (xp <= 9000) {
  levelHero = "Ascendente";
} else if (xp <= 10000) {
  levelHero = "Imortal";
} else {
  levelHero = "Radiante";
}

console.log("Nome do heroi " + heroName + " Nivel do heroi: " + levelHero);
