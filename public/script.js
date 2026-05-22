async function chamarAPI() {
  const resposta = await fetch("https://projeto-simples-back-teste-2.onrender.com")
  const dados = await resposta.json()
  document.getElementById("resposta").textContent = dados.message
}