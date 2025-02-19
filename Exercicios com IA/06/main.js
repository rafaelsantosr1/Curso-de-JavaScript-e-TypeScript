const botao = document.getElementById('botao'); // Corrigido para 'botao'
let paragrafo = document.getElementById('paragrafo');

botao.addEventListener('click', () => {
  let textoParagrafo = paragrafo.textContent;
  const novoParagrafo = textoParagrafo.replace(/[a]/ig, '4');
  paragrafo.textContent = novoParagrafo;
});