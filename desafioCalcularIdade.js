function calcularIdade(data){
    let anoAtual = 2024;
    let mesAtual = 4;
    let diaAtual = 3;

    //let caractersDaData = data.split("-");
    let passarAnoParaInt = dataDeNacimento.slice(0, 10);
    let anoDoNacimento = parseInt(passarAnoParaInt)

    let passarMesParaInt = dataDeNacimento.slice(5, 10)
    let mesDeNascimento = parseInt(passarMesParaInt)

    let passarDiaParaInt = dataDeNacimento.slice(8, 10)
    let diaDoNascimento = parseInt(passarDiaParaInt)

    let idade = anoAtual - anoDoNacimento

    if(mesAtual < mesDeNascimento || (mesAtual === mesDeNascimento && diaAtual < diaDoNascimento)){
        idade--
    }

    return idade
}

let dataDeNacimento = "2005-01-25"
const idade = calcularIdade(dataDeNacimento)

console.log(`A sua idade é de ${idade}`);
