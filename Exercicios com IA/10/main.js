const form = document.getElementById('formCadatro'); // Pegamos o formulário inteiro
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmSenha = document.getElementById('confirmSenha'); // Pegando o campo de confirmação
const idade = document.getElementById('idade');
const termo = document.getElementById('termo');
const mensagem = document.getElementById('mensagem'); // Pegamos a div de mensagens

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o envio do formulário
    
    if (senha.value !== confirmSenha.value) {
        mensagem.innerText = "As senhas não coincidem!";
        mensagem.style.color = "red";
        return; // Para a execução caso as senhas sejam diferentes
    }

    if (!termo.checked) {
        mensagem.innerText = "Você deve aceitar os termos de uso!";
        mensagem.style.color = "red";
        return;
    }

    // Se tudo estiver correto, exibe sucesso
    mensagem.innerText = "Cadastro realizado com sucesso!";
    mensagem.style.color = "green";

    console.log(`Nome: ${nome.value}, e-mail:${email.value}, Senha: ${senha.value} ,Idade:${idade.value}`);
});
