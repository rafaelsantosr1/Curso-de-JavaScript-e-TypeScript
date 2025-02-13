// Escreva uma função que recebe 2 números e retorne o maior deles


function maiorNumero(numero1, numero2) {

    if (numero1 > numero2) {
        return numero1;
        // Verifica se o número 1 é maior que o número 2, se for, retorna o número1
    } else {
        return numero2;
        // Ao contrário, retorna número2
    }
}

console.log(maiorNumero(5, 8));