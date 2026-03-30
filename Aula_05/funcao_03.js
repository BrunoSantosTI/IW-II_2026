let num = parseInt(prompt("Digite um número:"));
let fatorial = 1;

if (num <= 0) {
    alert("Fatorial não existe para números negativos ou zero.");
} else {
    for (let i = 1; i <= num; i++) {
        fatorial *= i;
    }
    alert("O fatorial de " + num + " é: " + fatorial);
}