const numeros = [1,2,3,4,5,6,7,8,9];

for (let i in numeros) {
    let numero = numero[i];

    if (numero === 6) {
        continue;
    }
    console.log(numero);

    if (numero === 8) {
        break;
    }
} 

