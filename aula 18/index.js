function criaPessoa (nome, sobrenome, idade) {
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('Fulano', 'Miranda', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32);
const pessoa3 = criaPessoa('João', 'Moreira', 55);
const pessoa4 = criaPessoa('Junior', 'Batista', 44);
const pessoa5 = criaPessoa('Jean', 'Miranda', 68);

console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);
