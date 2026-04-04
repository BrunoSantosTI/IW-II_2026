function funcao1(){
    let num = prompt("Digite um valor: ");
    if (num % 2 == 0) {
        alert("O seu número é par!");
    } else {
        alert("O seu número é ímpar!");
    }
}

function funcao2(){
    let idade = prompt("Digite a sua idade: ");
    if (idade >= 18){
        alert("Você é maior de idade!");
    } else{
        alert("Você é menor de idade!");
    }
}

function funcao3(){
    for (let i = 1; i < 11; i++) {
        console.log(i);
    }
}

function funcao4(){
    let num = prompt("Digite um valor: ");
    while (num>=0){
        console.log(num);
        num--;
    }
}

function funcao5(){
    let num = prompt("Digite um valor: ");
    for (let i = 1; i < 11; i++) {
        console.log(num + "x" + i + "=" + num * i);
    }
}

function funcao6(){
    let num = Number(prompt("Digite um número: "));
    let i = 1;
    let soma = 0;

    while (i <= num) {
        soma = soma + i;
        i++;
    }

    console.log("A soma é: " + soma);
}

function funcao7(){
    let num = Number(prompt("Digite um número: "));
    let primo = true;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }

    if (num <= 1) {
        console.log("Não é primo");
    } else if (primo) {
        console.log("É número primo");
    } else {
        console.log("Não é primo");
    }
}

function funcao8(){
    let user = prompt("Digite o seu nome de usuário: ");
    let senha = Number(prompt("Digite a sua senha (apenas números): "));
    let userC = "vanin";
    let senhaC = 12345;

    while (true) {
        if ((user != userC) && (senha != senhaC) ){
            alert("Tente novamente!");
        } else {
            alert ("Seja muito bem-vindo senhor Vanin!");
            break
        }
    }
}

function funcao9(){
    let num = Number(prompt("Digite um valor: "));
    let soma = 0;
    while (num > 0){
        num  = Number(prompt("Digite outro valor, este será somado até que digite um valor menor que 0"));
        soma = soma + num;
        total = soma + 1;
        if (num < 0 ){
            alert("A soma total é: " + soma);
            break
        }
    }
}

function funcao10(){
    let numeroSecreto = Math.floor(Math.random() * 10) + 1;
    let palpite;

    while (palpite != numeroSecreto) {
        palpite = parseInt(prompt("Adivinhe um número de 1 a 10:"));

        if (palpite < numeroSecreto) {
            alert("Muito baixo! Tente um número maior.");
        } else if (palpite > numeroSecreto) {
            alert("Muito alto! Tente um número menor.");
        } else {
            alert("Parabéns! Você acertou ");
        }
    }
}

function funcao11(){
    let numero = parseInt(prompt("Digite um número:"));
    let fatorial = 1;

    if (numero <= 0) {
        alert("Fatorial não existe para números negativos ou zero.");
    } else {
        for (let i = 1; i <= numero; i++) {
            fatorial *= i;
        }
        alert("O fatorial de " + numero + " é: " + fatorial);
    }
}

function funcao12(){
    let nota = parseFloat(prompt("Digite uma nota de 0 a 10"));

    if (nota>=0 && nota <= 10) {
        alert ("É uma nota válida!");
    } else {
        alert ("Não é uma nota válida!");
    }
}

function funcao13(){
    let n1 = parseFloat(prompt("Digite a sua primeira nota"));
    let n2 = parseFloat(prompt("Digite a sua segunda nota"));
    let n3 = parseFloat(prompt("Digite a sua terceira nota"));
    let media = (n1+n2+n3)/3;
    let situacao;
    if (media >= 7) {
        situacao = "aprovado";
        alert("Sua situação é: " + situacao);
    } else {
        situacao = "reprovado";
        alert("Sua situação é: " + situacao);
    }
}

function funcao14(){
    let valor = parseInt(prompt("Digite o valor para saque:"));

    let cedulas = [100, 50, 20, 10, 5, 2, 1];

    for (let i = 0; i < cedulas.length; i++) {
        let qtd = Math.floor(valor / cedulas[i]);
        
        if (qtd > 0) {
            alert(qtd + " cédula(s) de R$" + cedulas[i]);
            valor = valor % cedulas[i];
        }
    }
}

function funcao15(){
    let numero = parseInt(prompt("Digite um número:"));

    for (let i = 1; i <= numero; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}