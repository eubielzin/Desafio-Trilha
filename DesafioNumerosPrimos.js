function EncontraNumeroPrimo(numero){
    for(let i = 2; i < Math.sqrt(numero); i++){
        if(numero % i === 0){
            return false
        };
    };
    return true;
};

let numeroDosCampos = [23, 16, 11, 8, 19, 14, 5, 21];
let count = [];

for(let i = 0; i < numeroDosCampos.length; i++){
    if(EncontraNumeroPrimo(numeroDosCampos[i])){
        count.push(numeroDosCampos[i])
    }
}

console.log("Os numeros primos: ", count)
