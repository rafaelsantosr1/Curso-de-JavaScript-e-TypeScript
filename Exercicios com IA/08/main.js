document.addEventListener("DOMContentLoaded", () => {
    const inputNumero = document.querySelector(".numero");
    const resultado = document.querySelector("#resultado");
    const botao = document.querySelector("#botao");

    botao.addEventListener("click", () => {
        const numero = parseInt(inputNumero.value);

        if (!isNaN(numero)) {
            if (numero % 2 === 0) {
                resultado.textContent = "O número é par.";
            } else {
                resultado.textContent = "O número é ímpar.";
            }
        } else {
            resultado.textContent = "Digite um número válido.";
        }
    });
});
