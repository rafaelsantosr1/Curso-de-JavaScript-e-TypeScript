document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    const paragrafo = document.querySelector('.paragrafo');

    botao.addEventListener('click', () => {
        paragrafo.textContent = 'em JavaScript';
    });
});