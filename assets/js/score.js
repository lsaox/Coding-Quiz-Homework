var highScores=JSON.parse(localStorage.getItem("highScores")) || []
var scoreList= document.getElementById("score-list")
var clearBtn= document.querySelector("#clear")

for (let i = 0; i < highScores.length; i++) {
    var li= document.createElement("li")
    li.textContent=`Initials: ${highScores[i].initials}  Score: ${highScores[i].score}`
    scoreList.append(li)
    
}

clearBtn.addEventListener("click", ()=>{
    localStorage.clear()
    window.location.reload()
})