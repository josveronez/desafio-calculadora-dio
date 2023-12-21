function calcWsLs (wins = 0, losses = 0) {
    return wins - losses
}
let result = calcWsLs(100, 30);

if (result <= 10){
    level = "Ferro";
}
if (result >= 11 && result <= 20){
    level = "Bronze"
}
if (result >= 21 && result <= 50){
    level = "Prata"
}
if (result >= 51 && result <= 80){
    level = "Ouro"
}
if (result >= 81 && result <= 90){
    level = "Diamante"
}
if (result >= 91 && result <= 100){
    level = "Lendário"
}
if (result >= 101 ){
    level = "Imortal"
}

    
console.log (`O Herói tem de saldo de ${result} e está no nível de ${level}`);
