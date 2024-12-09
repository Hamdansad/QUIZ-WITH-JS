const closes = document.getElementById('closes')
const first = document.getElementById('first')

const questions = [{ question: "Which player scored the fastest hat-trick in the Premier League?", options: ["a)cristiano ronaldo", "b)Sadio Mane", "c)Harry kane"], correct: 1 },
{ question: "Which player, with 653 games, has made the most Premier League appearances?", options: ["a)Gareth Barry", "b)David James", "c)mohamed Salah"], correct: 0 },
{ question: "Who is the Champions League's top goalscorer of all time?", options: ["a)Robert Lewandowski", "b)Cristiano Ronaldo", "c)Luka Modrić"], correct: 1 },
{ question: "Which team won the first Premier League title?", options: ["a)Manchester United", "b)Manchester City", "c)Liverpool"], correct: 0 },
{ question: "Which country has won the most World Cups?", options: ["a)Argentina", "b)France", "c)Brazil"], correct: 2 },
{ question: "Messi has spent his entire professional career at Barcelona, but what was his schoolboy team?", options: ["a)Barcelona", "b)Newell's Old Boys", "c)Atletico Madrid"], correct: 1 },
{ question: "In which year was the first European Championship held?", options: ["a)1960", "b)1972", "c)1981"], correct: 0 },
{ question: "Which club has won the most Champions League titles?", options: ["a)Manchester United", "b)Barcelona", "c)Real Madrid"], correct: 2 },
{ question: "Messi has won a record number of Ballon d'Or awards - how many? ", options: ["a)6", "b)7", "c)4"], correct: 0 },
{ question: "The record number of World Cup goals is 16, scored by who?", options: ["a)Angel Di Maria", "b)cristiano ronaldo", "c)Miroslav Klose"], correct: 2 },
]


let currentquestion = 0
let score = 0

function start() {
  closes.style.display = 'none'
  if (currentquestion < questions.length) {
    first.innerHTML = ""

    const one = document.createElement('div')
    one.className = "createone"
    first.className = "second"
    first.appendChild(one)

    const questiontype = document.createElement("p")
    questiontype.textContent = questions[currentquestion].question
    one.appendChild(questiontype)

    questions[currentquestion].options.forEach((option, index) => {
      const choices = document.createElement("button")
      choices.className = "btnedit"
      choices.textContent = option;
      one.appendChild(choices)
      choices.onclick = () => checkanswer(index)

    })



  }
  else {
    showfinalresult()
  }
  function checkanswer(selectedindex) {
    if (selectedindex === questions[currentquestion].correct) {
      score++
    }
    currentquestion++
    start()
  }
  function showfinalresult() {
    first.innerHTML = ""
    const result = document.createElement("h2")
    result.className = "result"
    result.innerHTML = `congratulations!  <br> Quiz Completed!  <br> Your score is ${score} out of ${questions.length}`;
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


