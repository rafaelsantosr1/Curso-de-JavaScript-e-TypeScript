/*
&& -> false && true -> false "o valor mesmo"
|| -> or -> true && false -> vai retornar "o valor verdadeiro"

FALSY
false 
0
'' ""
null / udefined
NaN
*/



const a = 0;
const b = null;
const c = false;
const d = false;
const e = NaN;

console.log(a || b || c || d || e);




/*
const corUsuario = null;
const corPadrao = corUsuario || 'preto';
console.log(corPadrao);
*/


// console.log(0 || false || null || 'Luiz Otávio' || true); // retorna o primeiro valor verdadeiro




/*
function falaOi () {
    return 'Oi';
}
const vaiExecutar = false;
console.log(vaiExecutar && falaOi());
*/

// console.log('Luiz' && NaN && 'João')


// console.log('Luiz Otávio' && 0 && 'Maria');