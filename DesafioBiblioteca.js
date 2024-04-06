function calcularMulta(dias){
    let multa = 0.50 * dias
    return multa
}

let diasDeAtraso = 7;
let calculoDaMulta = calcularMulta(diasDeAtraso);

console.log(calculoDaMulta)
