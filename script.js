// Seleciona os elementos do HTML
const taskInput = document.getElementById("taskinput"); // campo de texto
const addButton = document.getElementById("addButton"); // botão de adicionar
const taskList  = document.getElementById("tasklist"); // lista de tarefas 

// Adiciona evento ao botão
addButton.addEventListener("click", addTask);

// Função que adiciona uma nova tarefa
function addTask() {
    const taskText = taskInput.value.trim(); // pega o texto do input e remove espaços extras
    if (taskText === "") { // se estiver vazio, alerta
        alert("Digite uma tarefa");
        return;
    }

    const li = document.createElement("li"); // cria o item da lista

    // Cria o span com o texto da tarefa
    const span = document.createElement("span");
    span.textContent = taskText;

    // Permite riscar a tarefa quando clicada
    span.addEventListener("click", function() {
        span.style.textDecoration =
            span.style.textDecoration === "line-through" ? "none" : "line-through";
    });

    // Cria botão de deletar tarefa
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function(){
        li.remove(); // remove tarefa
    });

    li.appendChild(span);       // adiciona o texto ao item
    li.appendChild(deleteBtn);  // adiciona o botão ao item
    taskList.appendChild(li);   // adiciona o item à lista

    taskInput.value = "";       // limpa o campo de input
    taskInput.focus();          // foca de volta no input
}
