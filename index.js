let nomeDoheroi = 'Saimon'
let nivelDeXp = 10000

if(nivelDeXp <= 1000){
    console.log("O Herói de nome " + nomeDoheroi + " está no nivel de Ferro")
}
else if(nivelDeXp >= 1001 && nivelDeXp <= 2000){
    console.log("O Herói de nome "+ nomeDoheroi + " está no nivel Bronze ")
}
else if(nivelDeXp >= 2001 && nivelDeXp < 5000){
    console.log("O Herói de nome "+ nomeDoheroi + " está no nivel Prata ")
}
else if(nivelDeXp >= 5001 && nivelDeXp < 7000){
    console.log("O Herói de nome "+ nomeDoheroi + " está no nivel Ouro ")
}
else if(nivelDeXp >= 7001 && nivelDeXp < 8000){
    console.log("O Herói de nome "+ nomeDoheroi + " está no nivel Platina ")
}
else if(nivelDeXp >= 8001 && nivelDeXp < 9000){
    console.log("O Herói de nome "+ nomeDoheroi + " está no nivel Ascendente ")
}
else if(nivelDeXp >= 9001 && nivelDeXp <= 10000 ){
    console.log("O Herói de nome "+ nomeDoheroi + " está no nivel Imortal ")
}
else{
    console.log("O Herói de nome "+ nomeDoheroi + " está no nivel Radiante ")
}