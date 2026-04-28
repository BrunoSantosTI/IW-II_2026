function aparecer(){
    var paragrafo = document.getElementsByClassName("escondido");
    var i;
    for (i = 0; i<paragrafo.length; i++) {
        paragrafo[i].style.display = "block";
        
    }
}

function mostrarNome() {
    let nome = document.getElementById("inputNome").value;
    let mensagem = document.getElementById("mensagem");
    
    mensagem.textContent = "Olá, " + nome + "!";
}

function maioridade(){
    let idade  = document.getElementById("inputIdade").value;
    let textoidade = document.getElementById("textoidade");
    let condicao;

    if (idade>=18) {
        condicao = "maior de idade";
    } else {
        condicao = "menor de idade";
    }

    textoidade.textContent = "Você é " + condicao;
}

function mudarcor() {
    document.body.style.backgroundColor = "#add8e6";
}

function Mododark() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    
    let b1 = document.getElementById("darkbtn");
    let b2 = document.getElementById("lightbtn");

    if (b1.style.display !== "none") {
      b1.style.display = "none";
      b2.style.display = "inline";
    }
}

function Modolight() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";

    let b1 = document.getElementById("darkbtn");
    let b2 = document.getElementById("lightbtn");

    if (b1.style.display !== "inline") {
        b1.style.display = "inline";
        b2.style.display = "none";
    }
}

function adicionarItem() {
    let input = document.getElementById("texto");
    let texto = input.value;

    if (texto === "") return;

    let li = document.createElement("li");
    li.textContent = texto;

    // EXERCÍCIO 7 (remover ao clicar)
    li.onclick = function() {
      li.remove();
    };

    document.getElementById("lista").appendChild(li);

    input.value = "";
}

function ParImpar() {
    let num = document.getElementById("ParImpar").value;
    let textovalor = document.getElementById("textovalor");

    let resultado = num % 2;
    let valor;

    if (resultado == 0) {
        valor = "Par";
    } else {
        valor = "Impar";
    }

    textovalor.textContent = "O número é " + valor;
}

function validarSenha() {
    let senha = document.getElementById("senha").value;
    let resultado = document.getElementById("resultadoSenha");

    if (senha.length >= 6) {
      resultado.textContent = "Senha válida";
    } else {
      resultado.textContent = "Senha inválida";
    }
}

function adicionarNome() {
    let input = document.getElementById("nome");
    let nome = input.value;

    if (nome === "") return;

    let li = document.createElement("li");
    li.textContent = nome;

    let btn = document.createElement("button");
    btn.textContent = "Remover";
    btn.className = "btn-lista";

    btn.onclick = function() {
      li.remove();
      atualizarContador();
    };

    li.appendChild(btn);
    document.getElementById("listaNomes").appendChild(li);

    input.value = "";

    atualizarContador();
}

function atualizarContador() {
    let total = document.getElementById("listaNomes").children.length;
    document.getElementById("contador").textContent = total;
}