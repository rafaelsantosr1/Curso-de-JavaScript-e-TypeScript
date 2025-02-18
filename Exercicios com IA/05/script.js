const botao = document.getElementById('meuBotao');
const campo = document.getElementById('meuCampo');

botao.addEventListener('click', () => {
    const texto = campo.value;
    const novoTexto = texto.replace([aeiou]/ig, '*');
    alert(novoTexto);
});