// Selecionar elementos:

document.getElementById('meuElemento'); // Por ID
document.querySelector('.minhaClasse'); // Por classe
document.querySelectorAll('p'); // Todos os parágrafos

// Modificar conteúdo:

elemento.textContent = 'Novo texto';
elemento.innerHTML = 'Novo <strong>HTML</strong>';

// Alterar estilos:

elemento.style.backgroundColor = 'red';
elemento.classList.add('novaClasse');

//Clique:

elemento.addEventListener('click', function() {
    // Faça algo quando o elemento for clicado
  });

// Carregamento da página:

window.addEventListener('load', function() {
    // Faça algo quando a página carregar
  });
