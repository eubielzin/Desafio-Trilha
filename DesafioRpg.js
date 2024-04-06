function ataque(vida, ataques){
    let dano = vida - (20 * ataques)
    if(vida <= 0 || ataques >= 6){
        console.log(`O jogador foi de base. O HP do oponente ${dano}`)
    }
    else{
        return dano;
    }
}
const HP = 100
const vezesDeAtaques = 6
console.log(ataque(HP, vezesDeAtaques))
