//creating variables representing the elements

const restartBtn=document.getElementById('restart');
const prevBtn=document.getElementById('prev');
const nextBtn=document.getElementById('next');
const submitBtn=document.getElementById('submit');
const truetBtn=document.getElementById('true');
const falseBtn=document.getElementById('false');
const questionText=document.getElementById('question-text');
const userScore=document.getElementById('user-score');
const wrongright=document.getElementById('wr');

let currentQuestion=0;
var score=0;

let questions=[
   { question: "What does HTML stands for?",
    answers:[
        {option:"Hyper Text Markup Language",answer:"true"},
        {option:"How to Make Lasagna",answer:"false"},
    ]
},
{ question: "how many tags are there in a regular element?",
    answers:[
    {option:"three",answer:"false"},
    {option:"two",answer:"true"}
        ]

},
{ question: "what is the difference between an opening and a closing tag?",
  answers:[
      {option:"There is no difference",answer:"false"},
      {option:"Closing tag has a / in front",answer:"true"}
         ]
},
{ question:"Is this an opening tag or  closing tag?",
  answers:[
      {option:"Opening",answer:"true"},
      {option:"Closing",answer:"false"}
            ]
},
{ question:"Where is the meta tag only Found?",
  answers:[
      {option:"The Last page",answer:"false"},
      {option:"The home Page",answer:"true"}
         ]
}

]

restartBtn.addEventListener('click',restart);
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);

function beginQuiz()
{
    currentQuestion=0;
    questionText.innerHTML=questions[currentQuestion].question;
    truetBtn.innerHTML=questions[currentQuestion].answers[0].option;
    truetBtn.onclick=() => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer=="true")
        {
            if(score<5){
                score++;
                wrongright.innerHTML="Correct!!";
            }
            
        }
        else
        {
            wrongright.innerHTML="Wrong!!";
        }
        userScore.innerHTML=score;
       
        if(currentQuestion<4){
            setTimeout(next,5000);
        }
     
    }
    falseBtn.innerHTML=questions[currentQuestion].answers[1].option;
    falseBtn.onclick=() =>{
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer=="true"){
            if(score<5)
            {
                score++;
                wrongright.innerHTML="Correct!!";
               
            }
        }
        else{
            wrongright.innerHTML="Wrong!!";
        }
        userScore.innerHTML=score;
        if(currentQuestion<4){
                       setTimeout(next,5000);
                 }
            }
            
            prevBtn.classList.add('hide');

}

beginQuiz();

function restart()
{
    currentQuestion=0;
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    truetBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score=0;
    userScore.innerHTML=score;
    beginQuiz();
}

function next()
{
    wrongright.innerHTML="";
    currentQuestion=currentQuestion+1;
    if(currentQuestion>=4)
    {
        nextBtn.classList.add('hide');
        prevBtn.classList.remove('hide');
    }
    questionText.innerHTML=questions[currentQuestion].question;
    truetBtn.innerHTML=questions[currentQuestion].answers[0].option;
    truetBtn.onclick=() => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer=="true")
        {
            if(score<5)
            {
                score++;
                wrongright.innerHTML="Correct!!";
            }
        }
        else
        {
            wrongright.innerHTML="Wrong!!";
        }
        userScore.innerHTML=score;
        if(currentQuestion<4){
            setTimeout(next,5000);
        }
    }
    falseBtn.innerHTML=questions[currentQuestion].answers[1].option;
    falseBtn.onclick=() => {
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer=="true"){
            if(score<5)
            {
                score++;
                wrongright.innerHTML="Correct!!";
            }
        }
        else
        {
            wrongright.innerHTML="Wrong<i></i>!!";
        }
        userScore.innerHTML=score;
        if(currentQuestion<4){
            setTimeout(next,5000);
                 }
            }
            prevBtn.classList.remove('hide');
         
}

function prev(){
    
    currentQuestion=currentQuestion--;
    if(currentQuestion<=0)
    {
        nextBtn.classList.remove('hide');
        prevBtn.classList.add('hide');
    }
    questionText.innerHTML=questions[currentQuestion].question;
    truetBtn.innerHTML=questions[currentQuestion].answers[0].option;
    truetBtn.onclick=() => {
        let ano=0;
        if(questions[currentQuestion].answers[ano].answer=="true")
        {
            if(score<5)
            {
                score++;
                wrongright.innerHTML="Correct!!";
            }
        }
        else
        {
            wrongright.innerHTML="Wrong!!";
        }
        userScore.innerHTML=score;
        if(currentQuestion<4){
            setTimeout(next,5000);
        }
    }
    falseBtn.innerHTML=questions[currentQuestion].answers[1].option;
    falseBtn.onclick=() =>{
        let ano=1;
        if(questions[currentQuestion].answers[ano].answer=="true"){
            if(score<5)
            {
                score++;
                wrongright.innerHTML="Correct!!";
            }
        }
        else
        {
            wrongright.innerHTML="Correct!!";
        }
        userScore.innerHTML=score;
        if(currentQuestion<4){
            setTimeout(next,5000);
                 }
            }
        nextBtn.classList.remove('hide');
}
function submit()
{
    prevBtn.classList.add('hide');
    nextBtn.classList.add('hide');
    submitBtn.classList.add('hide');
    truetBtn.classList.add('hide');
    falseBtn.classList.add('hide');
    questionText.innerHTML="Congratulations on submitting the quiz.";
}