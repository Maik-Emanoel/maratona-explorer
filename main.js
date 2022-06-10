const answerElement = document.querySelector("#answer")
const inputQuestion = document.querySelector("#inputQuestion")
const buttonQuestion = document.querySelector('#buttonQuestion')
const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente que sim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim."
]

// clica em fazer pergunta

function askQuestion() {

  if(inputQuestion.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonQuestion.setAttribute("disabled", true)

  const question = "<div>" + inputQuestion.value + "</div>"


  // gerar número aleatório

  const answersTotal = answers.length
  const randomNumber = Math.floor(Math.random() * answersTotal)

  answerElement.innerHTML = question + answers[randomNumber]

  answerElement.style.opacity = 1

  // sumir a resposta depois de 3 segundos

  setTimeout(function() {
    answerElement.style.opacity = 0
    buttonQuestion.removeAttribute("disabled")
  }, 3000)
}
