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

    textoidade.textContent = condicao;
}