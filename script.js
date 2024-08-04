function addTask() {
    const tarefa = document.getElementById("tarefa")
    const texto = tarefa.value

    if (texto !== "") {
        const lista = document.getElementById("lista")

        const li = document.createElement("li")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.className = "checkbox"
        checkbox.onclick = function() {
            li.classList.toggle("completed")
        }

       const span = document.createElement("span")
        span.textContent = texto

       const removerBotao = document.createElement("span")
       removerBotao.textContent = "Remover"
       removerBotao.className = "remove"
       removerBotao.onclick = function() {
            lista.removeChild(li)
        }

        li.appendChild(checkbox)
        li.appendChild(span)
        li.appendChild(removerBotao)
        lista.appendChild(li)

        tarefa.value = ""
    }
}