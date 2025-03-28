const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btntarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBoraoApagar(li) {
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');
    li.appendChild(botaoApagar);
}

function criaTarefa(textoInput){
    const li = criaLi()
    li.innerText = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaBoraoApagar(li);
}

btnTarefa.addEventListener('click', function(){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener('krpress', function(e) {
    if (e.key === 'Enter') {
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});

document.addEventListener('click', function(e){
    const el = e.target;

    if (el.classList.contains('apagar')) {
        el.parentElement.remove();
        salvarTarefas();
    }
});


function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
    
}
adicionaTarefasSalvas();