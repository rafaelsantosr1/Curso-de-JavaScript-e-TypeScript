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

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}


function atualizarRelogio() {
    const data = new Date();
    const diaSemanaTexto = getDayWeekText(data.getDay());
    const mesTexto = getMonth(data.getMonth());

    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    const dataFormatada = `${diaSemanaTexto}, ${data.getDate()} de ${mesTexto} de ${data.getFullYear()} ${hora}:${min}:${seg}`;

    document.querySelector("#newdate").innerHTML = `<p>${dataFormatada}</p>`;
}

setInterval(atualizarRelogio, 1000);

atualizarRelogio();

/*
const h1 = document.querySelector('.container h1')
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

h1.innerHML = data.toLocaleDateString('pt-BR', opcoes);

*/