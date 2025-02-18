const botao = document.getElementById('meuBotao');
const paragrafo = document.getElementById('meuParagrafo');
let mensagem = 'Olá mundo!';

botao.addEventListener('click', () => {
    paragrafo.textContent = mensagem;
    mensagem = mensagem === 'Olá mundo!' ? 'Bem-vindo de volta!' : 'Olá mundo!';
});