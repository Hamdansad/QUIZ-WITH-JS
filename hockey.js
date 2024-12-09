const closes=document.getElementById('closes')
const first=document.getElementById('first')

const questions=[{question:"In which Olympics was field hockey introduced for the first time?", options:["a)1900 Summer Olympics","b)1908 Summer Olympics","c) 1920 Summer Olympics"],correct:1},
                {question:"Which of the following is also known as Rink hockey ?", options:["a) Ice Hockey","b)Field Hockey","c)Roller Hockey"],correct:2},
                {question:" How many players are allowed on the field for each team during a field hockey match?", options:["a)10","b)8","c)11"],correct:0},
                {question:"Which country has won the most Olympic gold medals in field hockey (as of 2024)?", options:["a) Great Britain","b)India","c)Germany"],correct:1},
                {question:" A player receives a green card during a field hockey match. What is the penalty?", options:["a)2-minute suspension ","b)No penalty ","c) Penalty shot"],correct:0},
                {question:"Who is known as the Wizard of Dribble in Indian hockey?", options:["a)Balbir Singh Sr.","b)Roop Singh ","c)Dhanraj Pillay"],correct:2},
                {question:"Which country hosted the first Men's Hockey World Cup in 1971?", options:["a)India ","b)Spain","c)Pakistan"],correct:1},
                {question:" What is the maximum weight of a field hockey ball?", options:["a)150 grams","b) 160 grams","c)163 grams "],correct:2},
                {question:"When was the Women's FIH Hockey World Cup last held (as of March 2024)?", options:["a)2023","b) 2021","c)  2022"],correct:0},
                {question:"The distance between thepenalty spot and the goal is?", options:["a)5yrds","b)7yrds ","c)8yrds"],correct:1},
                ]


let  currentquestion=0
let score =0

function start(){
    closes.style.display='none'
    if (currentquestion<questions.length) {
        first.innerHTML=""

        const one=document.createElement('div')
        one.className="createhockey"
        first.className="second" 
        first.appendChild(one)

        const questiontype=document.createElement("p")
        questiontype.textContent=questions[currentquestion].question
        one.appendChild(questiontype)

        questions[currentquestion].options.forEach((option,index) => {
            const choices=document.createElement("button")
            choices.className="btnedit"
            choices.textContent = option;
            one.appendChild(choices)
            choices.onclick=()=> checkanswer(index)

        })

        
        
    }
    else{
        showfinalresult()
    }
    function checkanswer(selectedindex){
        if(selectedindex===questions[currentquestion].correct){
            score++
        }
        currentquestion++
        start()
    }
    function showfinalresult() {
        first.innerHTML=""
        const result=document.createElement("h2")
        result.className="result"
        result.innerHTML= `congratulations!  <br> Quiz Completed!  <br> Your score is ${score} out of ${questions.length}`;
        first.appendChild(result)
        const defaults = {
            spread: 360,
            ticks: 50,
            gravity: 0,
            decay: 0.94,
            startVelocity: 30,
            shapes: ["star"],
            colors: ["FFE400", "FFBD00", "E89400", "FFCA6C", "FDFFB8"],
          };
          
          function shoot() {
            confetti({
              ...defaults,
              particleCount: 40,
              scalar: 1.2,
              shapes: ["star"],
            });
          
            confetti({
              ...defaults,
              particleCount: 10,
              scalar: 0.75,
              shapes: ["circle"],
            });
          }
          
          setTimeout(shoot, 0);
          setTimeout(shoot, 100);
          setTimeout(shoot, 200);
       
    }
    
   
}

