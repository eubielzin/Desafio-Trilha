let frase = "What is Lorem Ipsum?";

function contarPalavra(frase){
    frase = frase.trim();

    let palavra = frase.split(/\s+/);

    return palavra.length;
}

console.log(contarPalavra(frase));
