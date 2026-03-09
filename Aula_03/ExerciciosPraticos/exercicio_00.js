// Exercício 1
alert ("Seja bem-vindo");

// Exercício 2
let nome = prompt ("Qual é o seu nome?");
alert ("Olá "+ nome);

// Exercício 3
let idade = prompt ("Qual é a sua idade?");
if (idade <18){
    alert ("Você é menor de idade!");
} else{
    alert ("Você é maior de idade!");
}

// Exercício 4
let resposta = confirm("Você deseja prosseguir?");
if (resposta){
    alert("Você desejouu prosseguir!");
} else{
    alert("O programa foi interompido!");
}

// Exercício 5
let var1 = prompt ("Digite um número aleatório: ");
let var2 = prompt ("Digite um segundo número aleatório");
let soma = parseFloat(var1) + parseFloat(var2);
alert ("A soma das variaveis é "+ soma);

// Exercício 6
let var3 = prompt ("Digite um número aleatório para descobrir o dobro dele: ");
let dobro = var3 * 2;
alert ("O dobro do número que você digitou é: "+ dobro);

