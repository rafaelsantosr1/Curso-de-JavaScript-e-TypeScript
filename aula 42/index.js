/* Escreva uma função chamada ePaisagem que
recebe dois argumentos, largura e altura de
uma imagem (number).
Retorne true se a imagem estiver no modo 
paisagem.
*/


function ePaisagem(largura, altura){
    if (largura >= altura)
        return true;
    else {
        return false;
    }
}

console.log(ePaisagem(200, 190));

/*
function ePaisagem(largura, altura) {
    return largura >= altura ? true : false;
}

console.log(1080, 1920);
*/

/*
const ePaisagem = (largura, altura) => largura >= altura;

console.log(ePaisagem(1080, 1920));
*/