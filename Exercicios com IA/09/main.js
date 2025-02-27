document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('botao');
    const nomeInput = document.querySelector('.nome');
    const emailInput = document.querySelector('.email');
    const nascimentoInput = document.querySelector('.nascimento');
    const celularInput = document.querySelector('.celular');
    const cpfInput = document.querySelector('.cpf');
    const resultado = document.getElementById('resultado');
    const pessoas = []; // Array para armazenar os dados

    // Expressões regulares para validação
    const regexCelular = /^\(?([0-9]{2})\)?([0-9]{4,5})\-?([0-9]{4})$/mg;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    botao.addEventListener('click', () => {
        const nome = nomeInput.value;
        const email = emailInput.value;
        const nascimento = nascimentoInput.value;
        const celular = celularInput.value;
        const cpf = cpfInput.value;
        const batismo = document.querySelector('input[name="batismo"]:checked');

        // Validação dos campos
        if (!nome || !email || !nascimento || !celular || !cpf || !batismo) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!regexCelular.test(celular)) {
            alert('Por favor, digite um número de celular válido.');
            return;
        }

        if (!regexEmail.test(email)) {
            alert('Por favor, digite um email válido.');
            return;
        }

        if (!validarCPF(cpf)) {
            alert('Por favor, digite um CPF válido.');
            return;
        }

        function validarCPF(cpf) {
            cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
            if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;

            let soma = 0, resto;
            for (let i = 1; i <= 9; i++) soma += parseInt(cpf[i - 1]) * (11 - i);
            resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) resto = 0;
            if (resto !== parseInt(cpf[9])) return false;

            soma = 0;
            for (let i = 1; i <= 10; i++) soma += parseInt(cpf[i - 1]) * (12 - i);
            resto = (soma * 10) % 11;
            if (resto === 10 || resto === 11) resto = 0;
            if (resto !== parseInt(cpf[10])) return false;

            return true;
        }

        // Formatar a data
        const data = new Date(nascimento);
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = (data.getMonth() + 1).toString().padStart(2, '0');
        const ano = data.getFullYear();
        const dataFormatada = `${dia}/${mes}/${ano}`;

        // Criar o objeto pessoa
        const pessoa = {
            nome,
            email,
            nascimento: dataFormatada,
            celular,
            cpf,
            batismo: batismo.value
        };

        pessoas.push(pessoa); // Adicionar ao array

        // Exibir os dados na tabela
        exibirDadosNaTabela();

        // Limpar os campos após submissão
        nomeInput.value = '';
        emailInput.value = '';
        nascimentoInput.value = '';
        celularInput.value = '';
        cpfInput.value = '';
        document.querySelectorAll('input[name="batismo"]').forEach(radio => radio.checked = false);
    });

    function exibirDadosNaTabela() {
        resultado.innerHTML = ''; // Limpar a tabela

        pessoas.forEach((pessoa, index) => {
            // Criar um elemento para cada pessoa
            const pessoaDiv = document.createElement('div');
            pessoaDiv.classList.add('pessoa');
            pessoaDiv.innerHTML = `
                <h2>Nome: ${pessoa.nome}</h2>
                <p><strong>E-mail:</strong> ${pessoa.email}</p>
                <p><strong>Nascimento:</strong> ${pessoa.nascimento}</p>
                <p><strong>Celular:</strong> ${pessoa.celular}</p>
                <p><strong>CPF:</strong> ${pessoa.cpf}</p>
                <p><strong>Batizado:</strong> ${pessoa.batismo}</p>
                <hr>
            `;
            resultado.appendChild(pessoaDiv); // Adicionar o elemento à tabela
        });
    }
});
