//Question Bank
var questionBank= [
    {
        question : 'Grand Central Terminal, Park Avenue,New York is the worlds',
        option : ['largest railway station','highest railway station','longest railway station','None of the above'],
        answer : 'largest railway station'
    },
    {
        question : 'Entomology is the science that studies',
        option : ['Behavior of human beings','Insects','The origin and history of technical and scientific terms','The formation of rocks'],
        answer : 'Insects'
    },
    {
        question : 'Garampani sanctuary is located at',
        option : ['Junagarh, Gujarat','Diphu, Assam','Kohima, Nagaland','Gangtok, Sikkim'],
        answer : 'Diphu, Assam'
    },
    {
        question : 'For which of the following disciplines is Nobel Prize awarded?',
        option : ['Physics and Chemistry','Physiology or Medicine','Literature, Peace and Economics','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'Hitler party came into power in 1933 is known as',
        option : ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'],
        answer : 'Nazi Party'
    },
    {
        question : '2010 World Cup Was Hosted in Which Country  ',
        option : ['Russia','England','Madagascar','South Africa'],
        answer : 'South Africa'
    },
    {
        question : 'Who was The First Black American President',
        option : ['Celestine Babayaro','Eric Cantona King','Barack Obama','Atiku Abubakar'],
        answer : 'Barack Obama'
    },
    {
        question : 'In What Year Did The Deadly Corana-virus Pandemic Broke Out',
        option : ['2008','2019','2020','2021'],
        answer : '2019'
    },
    {
        question : 'Chelsea Football Club Lift Thier First Uefa Champions League Trophy in What year ',
        option : ['2021','2012','1995','2010'],
        answer : '2012'
    },
    {
        question : 'What is The Life-span of a Mosuito',
        option : ['Culex Pipen','Six Days','Three Days','One Month'],
        answer : 'Culex Pipen'
    },
    {
        question : 'What is The Full Meaning of NAFDAC',
        option : ['Nigeria Agency of Food and Colorado','National Agency For Food and Drug Administration and control','Nigeria Agency For Food and Drug','None of The above'],
        answer : 'National Agency For Food and Drug Administration and control'
    },
    {
        question : 'Who sang Zazuu',
        option : ['Chris Brown','Kendrick Lamar','Portable','Dr Sid'],
        answer : 'Portable'
    },
    {
        question : 'Who is The Most Followed  Human Beign on Social Media',
        option : ['Selena Gomez','Beyonce','Cristiano Ronaldo','Davido'],
        answer : 'Cristiano Ronaldo'
    },
]
console.log(questionBank)
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scoreboard= document.getElementById('scoreboard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0; 
var score= 500;

var fifty = new Audio('/audio/50-50_sound.mp3')
var closen = new Audio('/audio/Closing Theme_sound.mp3')
var incorrectSound = new Audio ('/audio/sound_wrong.mp3')

//function to displayQuestions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background= 'none';
    }
    question.innerHTML= 'Q.'+(i+1)+ ' '+questionBank[i].question;
    option0.innerHTML=questionBank[i].option[0];
    option1.innerHTML=questionBank[i].option[1];
    option2.innerHTML=questionBank[i].option[2];
    option3 .innerHTML=questionBank[i].option[3];
    // stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+''+questionBank.length;
}
//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score>questionBank.length){
        score= score * 2;
        document.getElementById(e.id).style.background= 'limegreen';
        fifty.play()
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
        incorrectSound.play()
        points.innerHTML = `Congratulations <br> You Won <br> $ ${score}`;
        scoreboard.style.display = 'grid'
        quizContainer.style.display = 'none'
        icon.style.display = 'none';
        backgroundSound.pause()
        closingSound.play()

    }
    setTimeout(nextQuestion,100);
}

// function to display next question
function nextQuestion(){
    if(i<questionBank.length-1){
        i=i+1;
        displayQuestion();
        a.innerHTML = `$ ${score}`
        // earned.innerHTML = `$ ${score}`;
    }
    else{
        points.innerHTML= `Congratulations <br> You Won <br> $ ${score}`;
        questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
        closen.play()
        points.innerHTML = `Game Over <br><br> <br><br><br><br> Congratulations <br> You Won <br> $ ${score}`;
    }
}
//click events to next button
next.addEventListener('click',nextQuestion);

 
//Back to quiz button event
function backToQuiz(){
    location.reload
}

// function to check answer
// function checkAnswer(){
//     var answerBank= document.getElementById('answerBank');
//     var answers= document.getElementById('answers');
//     answerBank.style.display= 'block';
//     scoreboard.style.display= 'block';
//     for(var a=0;a<questionBank.lenghth;a++)
//     {
//         var list= document.createElement('li');
//         list.innerHTML= questionBank[a].answer;
//         answers.appendChild(list);
//     }
// }

displayQuestion();   



//function for 50-50 option
function fiftyFifty(){
var fiftyFifty = document.getElementById("img")
option1.innerHTML = "...."
option3.innerHTML = "...."
document.getElementById("img").src="/pics/50-50-used.png"
fiftyFifty.onclick = ""
fifty.play()

}

function playGame(){
     window.location.href = "wwtbam.html" 

}