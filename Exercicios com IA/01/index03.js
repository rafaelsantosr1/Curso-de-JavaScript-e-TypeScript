//Exercício 3:
//Crie uma função chamada somar que recebe dois números como parâmetros e retorna a soma deles. Em seguida, chame a função com dois números quaisquer e exiba o resultado no console.

//opção 1:
function somar() {
    const numero1 = 2;
    const numero2 = 4;
    const soma = numero1 + numero2;
    console.log(soma);
}

somar();

//opção 2:
function somar(numero1, numero2) {
  const soma = numero1 + numero2;
  console.log(soma);
}

somar(5, 10); // Somará 5 + 10 = 15
somar(20, 30); // Somará 20 + 30 = 50

//opção 3:
function somar(numero1, numero2) {
  const soma = numero1 + numero2;
  return soma;
}

const resultado = somar(5, 10); // resultado = 15
console.log(resultado); // Exibe 15
