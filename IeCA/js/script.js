const questions = [
  {
    question: "Por que é importante plantar árvores e flores?",
    options: ["a) Para deixar o jardim mais bonito.", "b) Para ajudar o meio ambiente e os animais."],
    answer: "b"
  },
  {
    question: "O que as plantas precisam para crescer saudáveis?",
    options: ["a) Água, sol e solo fértil.", "b) Areia e fotossíntese."],
    answer: "a"
  },
  {
    question: "O que é a fotossíntese nas plantas?",
    options: ["a) Um processo onde as plantas usam a luz do sol para fazer comida.", "b) O jeito delas se comunicarem umas com as outras"],
    answer: "a"
  },
  {
    question: "Por que as plantas têm raízes?",
    options: ["a) Para os animais poderem viver nela.", "b) Para segurar a planta no solo e pegar água e nutrientes."],
    answer: "b"
  },
  {
    question: "O que acontece quando plantamos novas árvores?",
    options: ["a) Elas crescem instantaneamente e todas geram frutos.", "b) Elas ajudam a purificar o ar e fornecem sombra."],
    answer: "b"
  },
  {
    question: "O que você pode fazer para ajudar as plantas a crescerem saudáveis?",
    options: ["a) Falar alto com elas todos os dias.", "b) Regar e cuidar delas regularmente."],
    answer: "b"
  },
  {
    question: "Por que as abelhas gostam de flores?",
    options: ["a) Porque as flores são macias para elas descansarem.", "b) Porque elas pegam néctar das flores para fazer mel."],
    answer: "b"
  },
  {
    question: "O que é uma horta?",
    options: ["a) Um lugar onde cultivamos vegetais e ervas para comer.", "b) Um lugar para plantar árvores altas."],
    answer: "a"
  },
  {
    question: "Quando é uma boa época para plantar sementes no jardim?",
    options: ["a) Na primavera, quando o clima começa a esquentar.", "b) No inverno, quando está frio."],
    answer: "a"
  },
  {
    question: "Por que devemos cuidar das plantas que plantamos?",
    options: ["a) Elas não precisam de ajuda.", "b) Porque cuidar delas ajuda a natureza a ficar equilibrada."],
    answer: "b"
  }
];

const quizContainer = document.getElementById("quiz-container");
const finishButton = document.getElementById("finish-button");
let score = 0;

function createQuestionElement(questionObj) {
  const questionElement = document.createElement("div");
  questionElement.classList.add("question");
  questionElement.innerHTML = `<p>${questionObj.question}</p>`;
  
  questionObj.options.forEach(option => {
    const radioInput = document.createElement("input");
    radioInput.type = "radio";
    radioInput.name = questionObj.question;
    radioInput.value = option.charAt(0);
    questionElement.appendChild(radioInput);
    questionElement.innerHTML += `<label>${option}</label><br>`;
  });

  return questionElement;
}

questions.forEach(question => {
  quizContainer.appendChild(createQuestionElement(question));
});

finishButton.addEventListener("click", () => {
  const selectedInputs = document.querySelectorAll("input:checked");
  selectedInputs.forEach(input => {
    const question = questions.find(q => q.question === input.name);
    if (question && input.value === question.answer) {
      score++;
    }
  });

  quizContainer.innerHTML = `<p>Você marcou ${score} de ${questions.length} pontos.</p>`;
  finishButton.style.display = "none";
});
