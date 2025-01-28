/* Digite um número  
Seu número é h1
Raiz quadrada xxxxx
É NaN: false
Arrendondando para baixo:
Arredondando para cima: 
Com duas casa decimais: 
*/

const numero = prompt('Digite um número:');
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const raiz = Math.sqrt(numero);

numeroTitulo.innerHTML = numero;
texto.innerHTML += `<p>Raíz quadrada ${raiz}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arrendondando para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;