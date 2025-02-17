const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

iniciar.addEventListener('click', startTimer);
pausar.addEventListener('click', pauseTimer);
zerar.addEventListener('click', resetTimer);

let seconds = 0;
let timer;

function criaHoraDosSegundos(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' });
}

function startTimer(){
    if (!timer) {
        timer = setInterval(() => {
            seconds++;
            relogio.innerText = criaHoraDosSegundos(seconds);
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {
    pauseTimer(); // Para o timer antes de resetar
    seconds = 0;
    relogio.innerText = '00:00:00';
}