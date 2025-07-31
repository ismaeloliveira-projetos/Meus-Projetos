function adicionarTarefa() {
  const input = document.getElementById("input-nova-tarefa");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = texto;

  // Botão de excluir com confirmação
  const botaoExcluir = document.createElement("button");
  botaoExcluir.textContent = "Excluir";
  botaoExcluir.style.marginLeft = "10px";
  botaoExcluir.onclick = function () {
    const confirmar = confirm("Deseja realmente excluir esta tarefa?");
    if (confirmar) {
      li.remove();
    }
  };

  li.appendChild(botaoExcluir);
  document.getElementById("lista-tarefas").appendChild(li);
  input.value = "";
}
