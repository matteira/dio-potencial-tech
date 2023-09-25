let saldoVitoria = 40;
let saldoDerrota = 10;
let cal = saldoVitoria - saldoDerrota;
let rank;


function rankedLevel(rank){
  if (cal <= 10) {
    rank = "Ferro";
  } else if (cal <= 20){
    rank = "Bronze";
  } else {
    rank = "Radiante";
  }

  return rank;
}

console.log("Saldo de vitoria do Heroi: " + saldoVitoria + ", Ranked do Heroi: " + rankedLevel())