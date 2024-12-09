const closes=document.getElementById('closes')
const first=document.getElementById('first')

const questions=[{question:" Which player has the most centuries in World Cup history?", options:["a)Ricky Ponting","b)Sachin Tendulkar","c)AB de Villiers"],correct:1},
                {question:"Who was the leading wicket-taker in the 2019 World Cup?", options:["a)Mitchell Starc","b)Jasprit Bumrah","c)Jofra Archer"],correct:0},
                {question:"Who won the first ICC Cricket World Cup in 1975?", options:["a)West Indies","b)Australia","c)India"],correct:0},
                {question:" Which country has won the most ICC Cricket World Cups?", options:["a)India","b)Australia","c) England"],correct:1},
                {question:"Who scored the highest individual score in a World Cup match?", options:["a) Sachin Tendulkar","b) Chris Gayle","c)Martin Guptill"],correct:2},
                {question:"Which country hosted the ICC Cricket World Cup in 2019?", options:["a)Australia","b) India","c)England"],correct:2},
                {question:"Who was the captain of the Indian team during the 1983 World Cup?", options:["a) Kapil Dev","b)Ravi Shastri","c)Mohinder Amarnath"],correct:0},
                {question:"Which team did India defeat in the 2011 World Cup final?", options:["a)Pakistan","b) Sri Lanka","c) Australia"],correct:1},
                {question:"Who was the leading wicket-taker in the 2019 World Cup?", options:["a)Mitchell Starc","b)Trent Boult","c) Jofra Archer"],correct:0},
                {question:"Which player has the most centuries in World Cup history?", options:["a)Ricky Ponting","b) Sachin Tendulkar","c)AB de Villiers"],correct:1},
                ]


let  currentquestion=0
let score =0

function start(){
    closes.style.display='none'
    if (currentquestion<questions.length) {
        first.innerHTML=""

        const one=document.createElement('div')
        one.className="createcricket"
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


