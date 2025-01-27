const nome = prompt('Digite seu nome completo:');
const quantLetras = nome.length;
const segLetra = nome.charAt(1);


document.body.innerHTML += `O seu nome é: <strong>${nome}</strong> <br />`;
document.body.innerHTML += `Seu nome tem <strong>${quantLetras}</strong> letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: <strong>${segLetra}</strong> <br />`;
document.body.innerHTML += `Qual o primeiro índice da letra LETRA a no seu nome? <strong>${nome.indexOf('a')}</strong> <br />`;
document.body.innerHTML += `Qual o último índice da letra LETRA no seu nome? <strong>${nome.lastIndexOf('a')}</strong> <br />`;
document.body.innerHTML += `As últimas 3 letras do seu nome são: <strong>${nome.slice(-3)}</strong> <br />`;
document.body.innerHTML += `As palavras do seu nome são: <strong>${nome.split(' ')}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras maiúsculas: <strong>${nome.toLocaleUpperCase()}</strong> <br />`;
document.body.innerHTML += `Seu nome com letras minúsculas: <strong>${nome.toLocaleLowerCase()}</strong> <br />`;