function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];


    function recebeEventoForm (evento) {
       evento.preventDefault();

       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');
       
       const pessoa = {
        nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
       };
       pessoas.push(pessoa);
       resultado.innerHTML += `<p>Nome:${pessoa.nome} ${pessoa.sobrenome} Peso:${pessoa.peso}kg, Altura:${pessoa.altura}m</p>`;
       console.log(pessoas);
    }

    form.addEventListener('submit', recebeEventoForm);


}
meuEscopo();

//nome.value