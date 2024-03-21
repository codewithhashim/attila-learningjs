const questions = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5"],
    answer: "4"
  },
  {
    question: "Which is a JavaScript data type?",
    options: ["String", "Blueprint", "Speaker"],
    answer: "String"
  },
  {
    question: "Which method can add an element to the end of an array in JavaScript?",
    options: ["shift()", "unshift()", "push()"],
    answer: "push()"
  }
];

function startQuiz() {
  let score = 0;
  
  for (let i = 0; i < questions.length; i++) {
    const userAnswer = prompt(
      questions[i].question + "\n" +
      "Options:\n" +
      questions[i].options.join("\n") +
      "\n\nEnter the correct answer:"
    );
    if (userAnswer.toUpperCase() === questions[i].answer.toUpperCase()) {
      alert("Correct!");
      score++;
    } else {
      alert(`Wrong! The correct answer is ${questions[i].answer}.`);
    }
  }
  alert(`Quiz completed! Your score is ${score}/${questions.length}.`);
}
startQuiz();