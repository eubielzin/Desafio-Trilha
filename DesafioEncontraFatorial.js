function encontrarFatorialDoNumero(numero){
    if(numero === 0 || numero === 1){
        return 1;
    }
    let fatorial = 1
    for(let i = 2; i <= numero; i++){
         fatorial *= i;
    }   
    return fatorial
}
let numero = 12
let calcularFatorial = encontrarFatorialDoNumero(numero);
console.log(`O fatorial de ${numero} é ${calcularFatorial}`)
