async function buscarEndereco() {
  const cep = document.getElementById("cep").value;

  if (cep.length !== 8 || isNaN(cep)) {
    alert("Digite um CEP válido com 8 números.");
    return;
  }

  try {
    const response = await fetch(`https://brasilapi.com.br/api/cep/v1/${cep}`);

    if (!response.ok) {
      throw new Error("CEP não encontrado.");
    }

    const data = await response.json();

    document.getElementById("logradouro").value = data.street || "";
    document.getElementById("bairro").value = data.neighborhood || "";
    document.getElementById("cidade").value = data.city || "";
    document.getElementById("estado").value = data.state || "";

  } catch (error) {
    alert("Erro ao buscar o CEP: " + error.message);
  }
}

function salvarDados() {
  const logradouro = document.getElementById("logradouro").value;
  const bairro = document.getElementById("bairro").value;
  const cidade = document.getElementById("cidade").value;
  const estado = document.getElementById("estado").value;
  const numero = document.getElementById("numero").value;

  // Aqui você pode fazer o que quiser com os dados, por exemplo:
  // enviar para um servidor, salvar no localStorage, ou só mostrar no console
  console.log("Dados salvos:");
  console.log("Logradouro:", logradouro);
  console.log("Bairro:", bairro);
  console.log("Cidade:", cidade);
  console.log("Estado:", estado);
  console.log("Número:", numero);

  alert("Dados salvos com sucesso!\n" +
        `Logradouro: ${logradouro}\n` +
        `Bairro: ${bairro}\n` +
        `Cidade: ${cidade}\n` +
        `Estado: ${estado}\n` +
        `Número: ${numero}`);
}
