const questions=[
    {
        question: "Who is the biggest seller of coffee in the world?",
        answer:["Colombia", "Etiopia", "Brazil", "Argentina"],
        correct:"Brazil"

    },
     {
        question: "What is the official animal of Scotland",
        answer:["Nessie", "Wolf", "Eagle", "Unicorn"],
        correct:"Unicorn"

    },
     {
        question: "What is the name of a group of frogs?",
        answer:["Army", "Armada", "Murder", "Assembly"],
        correct:"Army"

    },

]







var startContainer=document.querySelector(".start-container")
var startBtn=document.querySelector("#start-btn")
var quizContainer=document.querySelector(".quiz")
var questionEl= document.querySelector("#question")
var answerBtn=document.querySelector(".answer-btn")
var timerContainer= document.querySelector(".timer")
var timeEL=document.querySelector("#time")
var endGame=document.querySelector(".end-game")
var userInput=document.querySelector("#user-input")
var submitBtn=document.querySelector("#submit-btn")

var index=0
var score=0
var timer;
var timeLeft=30
let highScores=[]


function startQuiz(){
    startContainer.classList.add("hide")
    quizContainer.classList.replace("hide", "show")
    timerContainer.classList.replace("hide", "show")
    showQuestions()
    startTimer()
}

function showQuestions(){
    if(index===questions.length){
        endQuiz()
    }
    questionEl.textContent=questions[index].question
    answerBtn.innerHTML=""
    for (let i = 0; i < questions[index].answer.length; i++) {
       const btn= document.createElement("button")
       btn.textContent=questions[index].answer[i]
       answerBtn.append(btn)
        
    }
}

function startTimer(){
    timer= setInterval(function(){
        timeLeft--
        timeEL.textContent=timeLeft

        if(timeLeft===0){
            endQuiz()
        }
    },1000)
}

function checkAnswer(answer){
    if(answer === questions[index].correct){
        score++
        index++
        showQuestions()
    }else{
        index++
        showQuestions()
        timeLeft-=5
    }
}

function endQuiz(){
    clearInterval(timer)
    quizContainer.style.display="none"
    endGame.classList.replace("hide", "show")
}
function storeScore(){
    var userInitials =userInput.value
    console.log(userInitials);
    highScores=JSON.parse(localStorage.getItem("highScores")) || []

    if(userInitials !== ""){
        var newScore={
            initials: userInitials,
            score:score
        }
        console.log(newScore);
        highScores.push(newScore)
        console.log(highScores);
        localStorage.setItem("highScores", JSON.stringify(highScores))
        window.location.assign("score.html")
    }
}

//EVENT LISTERNERS

startBtn.addEventListener("click", startQuiz)

answerBtn.addEventListener("click", ()=>{
    var userAnswer= this.event.target.textContent
   checkAnswer(userAnswer);
})

submitBtn.addEventListener("click",storeScore)