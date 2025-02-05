document.addEventListener('DOMContentLoaded', () => {
    const tabuleiro = document.getElementById('tabuleiro');
    const cartas = Array.from(document.querySelectorAll('.carta'));

    let cartasViradas = [];
    let podeVirar = true;

    function embaralharCartas() {
        for (let i = cartas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
        }

        // Aplicar o embaralhamento visualmente no HTML
        tabuleiro.innerHTML = '';
        cartas.forEach(carta => {
            tabuleiro.appendChild(carta);
        });
    }


    function virarCarta(carta) {
        if (!podeVirar || cartasViradas.length >= 2 || carta === cartasViradas[0]) return;

        carta.classList.add('virada');
        cartasViradas.push(carta);

        if (cartasViradas.length === 2) {
            verificarPar();
        }
    }

    function verificarPar() {
        const carta1 = cartasViradas[0];
        const carta2 = cartasViradas[1];

        if (carta1.dataset.valor === carta2.dataset.valor) {
            cartasViradas = [];
            if (document.querySelectorAll('.carta:not(.virada)').length === 0) {
                setTimeout(() => {
                    alert('Parabéns! Você venceu!');
                }, 500);
            }
        } else {
            podeVirar = false;
            setTimeout(() => {
                carta1.classList.remove('virada');
                carta2.classList.remove('virada');
                cartasViradas = [];
                podeVirar = true;
            }, 1000);
        }
    }

    cartas.forEach(carta => {
        carta.addEventListener('click', () => virarCarta(carta));
    });

    embaralharCartas();

});