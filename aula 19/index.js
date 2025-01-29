/*
Primitivos (imutáveis) - string, number, boolean, undefined,
 null(bigint, symbol) - Valores copiados

Referência (mutável) - array, object, funtion - Passados pro referência


 */
let a = [1, 2, 3];
let b = a;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

/*
let a = 'A';
let b = a; // Cópia
console.log(a, b);

a = 'Outra coisa';
console.log(a, b);
*/