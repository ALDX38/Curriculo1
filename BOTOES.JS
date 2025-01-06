const buttons = document.querySelectorAll(".apertar-botao");
const listas = document.querySelectorAll(".lista1");
const Qualidades = document.querySelector('.Qualidades'); 

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        listas.forEach((lista) => {
            lista.classList.remove("active");
            Qualidades.classList.remove("active"); 
        });

        const targetId = button.getAttribute("data-target");
        const targetList = document.getElementById(targetId);
        if (targetList) {
            targetList.classList.add("active");
        }
    });
});