# 1. document.addEventListener('DOMContentLoaded', () => { ... });
Este código garante que o JavaScript só seja executado depois que o HTML da página for completamente carregado. Isso é importante porque o JavaScript precisa acessar os elementos HTML (tabuleiro, cartas) e eles só existem depois que o HTML é carregado.

# 2. const tabuleiro = document.getElementById('tabuleiro');
Seleciona o elemento HTML com o id "tabuleiro" (que representa o tabuleiro do jogo) e armazena na variável tabuleiro.

# 3. const cartas = Array.from(document.querySelectorAll('.carta'));
Seleciona todos os elementos HTML com a classe "carta" (que representam as cartas do jogo) e os converte para um array. O método Array.from é usado para transformar o NodeList retornado por querySelectorAll em um array, permitindo que você use métodos de array como forEach.

# 4. let cartasViradas = [];
Cria um array vazio chamado cartasViradas. Este array vai armazenar as duas cartas que o jogador virou para verificar se são um par.

# 5. let podeVirar = true;
Cria uma variável booleana chamada podeVirar e inicializa com true. Essa variável controla se o jogador pode clicar para virar uma carta. Ela é usada para evitar que o jogador clique em várias cartas seguidas enquanto a verificação de par está em andamento.

# 6. function embaralharCartas() { ... }
Essa função embaralha as cartas do jogo. Ela usa o algoritmo de Fisher-Yates para embaralhar o array cartas de forma aleatória.
Após embaralhar o array, a função limpa o tabuleiro HTML (tabuleiro.innerHTML = '';) e adiciona as cartas de volta ao tabuleiro na ordem embaralhada. Isso garante que a ordem visual das cartas no HTML corresponda à ordem do array embaralhado.

# 7. function virarCarta(carta) { ... }
Essa função é chamada quando o jogador clica em uma carta. Ela recebe a carta clicada como argumento.
A função verifica algumas condições antes de virar a carta:
!podeVirar: Se podeVirar for falso (ou seja, se já houver duas cartas viradas ou uma verificação de par em andamento), a função não faz nada.
cartasViradas.length >= 2: Se já houver duas cartas viradas, a função não faz nada.
carta === cartasViradas[0]: Se o jogador clicar na mesma carta que já está virada, a função não faz nada.
carta.classList.contains('parEncontrado'): Se a carta já faz parte de um par encontrado, a função não faz nada.
Se todas as condições acima forem falsas, a função vira a carta:
Adiciona a classe virada à carta (essa classe deve estar definida no CSS para mostrar o verso da carta).
Adiciona a carta ao array cartasViradas.
Se já houver duas cartas viradas (cartasViradas.length === 2), a função chama verificarPar() para verificar se as cartas são um par.

# 8. function verificarPar() { ... }
Essa função é chamada quando o jogador vira duas cartas. Ela verifica se as duas cartas são um par (ou seja, se têm o mesmo valor no atributo data-valor).
Se as cartas são um par:
Adiciona a classe parEncontrado às duas cartas (essa classe pode ser usada no CSS para dar um estilo visual diferente às cartas encontradas).
Limpa o array cartasViradas.
Verifica se todas as cartas já foram encontradas. Se sim, o jogador venceu!
Se as cartas não são um par:
Define podeVirar como false para impedir que o jogador vire mais cartas enquanto o par não correspondente é mostrado por um curto período.
Depois de 1 segundo, as cartas são desviradas e podeVirar é definido como true novamente.

# 9. cartas.forEach(carta => { ... });
Essa parte do código adiciona um evento de clique para cada carta. Quando o jogador clica em uma carta, a função virarCarta é chamada.

# 10. embaralharCartas();
Essa linha embaralha as cartas no início do jogo.