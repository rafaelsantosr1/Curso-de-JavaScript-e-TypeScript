function getDayWeekText(diaSemana) {
    switch (diaSemana) {
        case 0: 
        return 'Domingo';
        case 1: 
        return 'Segunda-feira';
        case 2: 
        return 'Terça-feira';
        case 3: 
        return 'Quarta-feira';
        case 4: 
        return 'Quinta-feira';
        case 5: 
        return 'Sexta-feira';
        case 6: 
        return 'Sábado';
        default: 
        return '';
    }
}

function getMonth(mes) {
    switch (mes) {
        case 0: 
        return 'Janeiro';
        case 1: 
        return 'Fevereiro';
        case 2: 
        return 'Março';
        case 3: 
        return 'Abril';
        case 4: 
        return 'Maio';
        case 5: 
        return 'Junho';
        case 6: 
        return 'Julho';
        case 7: 
        return 'Agosto';
        case 8: 
        return 'Setembro';      
        case 9: 
        return 'Outubro';      
        case 10: 
        return 'Novembro';     
        case 11: 
        return 'Dezembro';   
        default: 
        return '';
    }
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function getHours(data) {
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${hora}:${min}`;
}

const data = new Date();
const diaSemana = data.getDay();
const mes = data.getMonth();

const diaSemanaTexto = getDayWeekText(diaSemana);
const mesTexto = getMonth(mes);
const time = getHours(data);



// console.log(` ${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${time} `);


 const dataFormatada = (`${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${time} `);

 document.querySelector("#newdate").innerHTML = `<p>${dataFormatada}<p>`;