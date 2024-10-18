const questions = [
  {
    question : "Who invented the World Wide Web?",
    answers : [
      {text: "Bill Gates", correct:false },
      {text: "Tim Berners-Lee", correct:true },
      {text: "Steve Jobs", correct: false},
      {text: "Mark Zuckerberg", correct: false}
    ]
  },
  {
    question : "What is the name of the first computer mouse?",
    answers : [
      {text: "RollerBall", correct: false},
      {text: "Engelbart Mouse", correct:true },
      {text: "Trackball", correct:false },
      {text: "Genie", correct:false}
    ]
  },
  {
    question : "Which programming language is often used for websites?",
    answers : [
      {text: "Python", correct: false},
      {text: "Java", correct:false },
      {text: "JavaScript", correct: true},
      {text: "C++", correct: false}
    ]
  },
  {
    question : "What is the name of the virtual reality headset developed by Meta (formerly Facebook)?",
    answers : [
      {text: "Oculus Quest", correct:true },
      {text: "PlayStation VR", correct:false },
      {text: "HTC Vive", correct:false },
      {text: "HoloLens", correct: false}
    ]
  },
  {
    question : "What is the name of the first social media platform?",
    answers : [
      {text: "Facebook", correct:false },
      {text: "MySpace", correct:false },
      {text: "Twitter", correct: false},
      {text: "Friendster", correct: true}
    ]
  }
]

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score = 0;
function startQuiz(){
  currentQuestionIndex = 0;
  score=0;
  nextButton.innerHTML="Next"
  showQuestion();
}

function showQuestion(){

  resetState();

  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex+1;
  questionElement.innerHTML = questionNo+". " + currentQuestion.question;
  

  currentQuestion.answers.forEach(answer=>{
    const button = document.createElement("button");
    button.innerHTML=answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
    if(answer.correct){
      button.dataset.correct= answer.correct;
    }
    button.addEventListener("click",selectAnswer);
  })
}

function resetState(){
  nextButton.style.display ="none";
  while(answerButton.firstChild){
    answerButton.removeChild(answerButton.firstChild);
  }
};

function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct==="true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButton.children).forEach(button=>{
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
};

function showScore(){
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length} !!`;
  nextButton.innerHTML = "Restart Quiz";
  nextButton.style.display="block"; 
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else {
    showScore();
  }
}

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex<questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})

startQuiz() 