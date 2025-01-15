// Seleciona todos os botões e listas
const buttons = document.querySelectorAll(".apertar-botao");
const listas = document.querySelectorAll(".lista1");

// Função que ativa a lista correspondente ao botão clicado
function toggleList(event) {
    const targetId = event.target.getAttribute("data-target");
        const targetList = document.getElementById(targetId);

    // Oculta todas as listas e exibe apenas a correspondente
    listas.forEach(lista => {
        lista.classList.toggle("active", lista === targetList);
    });
        }

// Adiciona o evento de clique aos botões
buttons.forEach(button => {
    button.addEventListener("click", toggleList);
});