// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date


function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    //console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);












/*
const data = new Date('2025-01-20T20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1); // Mês começa do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia semana', data.getDay()); // 0 - Domingo, 6 - Sabado
console.log(data.toString());
*/


/*
const data = new Date('2025-01-20T20:20:59');
console.log(data.toString());
*/

/*
const data = new Date(2019, 3, 20, 15, 14 , 27); // ano, mês, dia, hora, minutos, segundos, se milesimo de segundos
console.log(data.toString());
*/