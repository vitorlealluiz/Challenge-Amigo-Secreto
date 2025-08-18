let amigos = []; //array de amigos

function adicionarAmigo(){
    let nome = document.getElementById("amigo").value; //recebe o nome do amigo
    validarEntrada(nome)
    amigos.push(nome); //adiciona na lista
    exibirNomes();
    limparCampo(); //chama a função que limpa o campo
}

function validarEntrada(entrada){
    if(entrada == ""){
        alert("Por favor, insira um nome.");
        location.reload(); //atualiza a página
    }
}

function limparCampo(){
    let inputNome = document.querySelector("input");
    inputNome.value = "";
}

function exibirNomes(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, i) => {
        let item = document.createElement("li");
        item.textContent = amigo;

        //Criar botão para excluir amigo
        let botaoRemover = document.createElement("button");
        botaoRemover.classList.add("botao-remover");
        botaoRemover.textContent = "X";
        botaoRemover.onclick = function() {
            amigos.splice(i, 1);
            exibirNomes();
        };

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

function sortearAmigo(){
    validarEntrada(amigos);
    let numeroSorteio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroSorteio];
    document.getElementById("resultado").innerHTML = `<li>${amigoSorteado}</li>`;
}

//Adicionar amigo caso o usuário digite "enter"
document.getElementById("amigo").addEventListener("keypress", function(e){
   if(e.key === "Enter"){
        adicionarAmigo();
    }
});
