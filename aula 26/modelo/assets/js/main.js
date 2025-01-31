/*
const peso = 68;
const altura = 1.75;
let imc; //peso / (altura * altura)

imc = peso / (altura * altura);
*/

function tabelaIMC() {
    const form = document.querySelector("form");
    const resultado = document.querySelector(".resultado");

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const peso = parseFloat(form.querySelector("#input-peso").value);
        const altura = parseFloat(form.querySelector("#input-altura").value) / 100;

        console.log('Peso:', peso, 'Altura:', altura);

        
        const imc = peso / (altura * altura);

        let categoria = "";
        if (imc < 18.5) {
            categoria = "Abaixo do peso";
        }
        else if (imc <= 24.9) {
            categoria = "Peso normal";
        }
        else if (imc <= 29.9) {
            categoria = "Sobrepeso";
        }
        else if (imc <= 34.9) {
            categoria = "Obesidade grau 1";
        }
        else if (imc <= 39.9) {
            categoria = "Obesidade grau 2";
        }
        else {
            categoria = "Obesidade grau 3";
        }
        resultado.innerHTML = `<p>Seu IMC é <strong>${imc.toFixed(2)}</strong> - <strong>${categoria}</strong></p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}

tabelaIMC();



