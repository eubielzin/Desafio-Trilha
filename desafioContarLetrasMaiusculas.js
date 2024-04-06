function contarLetrasMaiusculas(frase) {
    let cont = 0;
    for (let i = 0; i < texto.length; i++) {
        if (frase[i] >= 'A' && frase[i] <= 'Z') {
            cont++;
        }
    }
    return cont;
}

let texto = "LoReM IpSuM Is sImPlY DuMmY TeXt oF ThE PrInTiNg aNd tYpEsEtTiNg iNdUsTrY";
let numeroDeMaiusculas = contarLetrasMaiusculas(frase);
console.log("Número de letras maiúsculas: " + numeroDeMaiusculas);
