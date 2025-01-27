/*
Rafael tem 30 anos, pesa 68 kg, tem 175cm de altura
e seu IMC é de xxxxxx
Rafael nasceu em 1994
*/

const nome = 'Rafael';
const sobrenome = 'Santos';
const idade = 31;
const peso = 68;
const altura = 1.75;
let imc; //peso / (altura * altura)
let anoNascimento;

imc = peso / (altura * altura);
anoNascimento = 2025 - idade;

console.log(`${nome} tem ${idade} anos pesa ${peso}kg, tem ${altura}cm de altura e seu IMC é de ${imc}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);


