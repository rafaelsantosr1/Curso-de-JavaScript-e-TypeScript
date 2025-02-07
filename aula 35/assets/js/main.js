const elementos = [
    {tag: 'p', texto: 'Frase 1'}, // 0
    {tag: 'div', texto: 'Frase 2'}, // 1
    {tag: 'footer', texto: 'Frase 3'}, // 2
    {tag: 'section', texto: 'Frase 4'}, // 3
];

const container = document.querySelector('.container');
const div = document.createElement('div');

    for (let i = 0; i < elementos.length; i++) {
    const elemento = document.createElement(elementos[i].tag);
    elemento.textContent = elementos[i].texto;
    container.appendChild(elemento);
}

container.appendChild(div);