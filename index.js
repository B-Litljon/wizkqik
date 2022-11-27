//-QUESTIONS-//
var questions = [
    { 
    question: 'test1', 
    options: [1,2,3,4],
    answer: 1   //1 is just a placeholder for the answer for now 
    },
    { 
        question: 'test2', 
        options: [1,2,3,4],
        answer: 1   //1 is just a placeholder for the answer for now 
    },
    { 
        question: 'test3', 
        options: [1,2,3,4],
        answer: 1   //1 is just a placeholder for the answer for now 
    },
    { 
        question: 'test4', 
        options: [1,2,3,4],
        answer: 1   //1 is just a placeholder for the answer for now 
    },
    { 
        question: 'test5', 
        options: [1,2,3,4],
        answer: 1   //1 is just a placeholder for the answer for now 
    },
    { 
        question: 'test6', 
        options: [1,2,3,4],
        answer: 1   //1 is just a placeholder for the answer for now 
    }
    
    
]
//---------------------------------------------------------------
//-WORKING BUTTONS ON PAGE-//
var startButton = document.querySelector('#game-button');
var QUIZ = document.querySelector('#quiz-question');
var choices = document.querySelector('#quiz-choices');
var rightOrWrong = document.querySelector('#confirm')
//--------------------------------------------------------
//-FUNCTION TO GENERATE THE QUIZ-//
var currentQuestionIndex = 0;
function generateQuestions(){
    // empty string until the start button is clicked { => (l:47&48)
    QUIZ.innerHTML = "";
    choices.innerHTML = "";
    // }
    
    // if the current question index is greater than or equal the # of questions..
    // .. this if statement will print 'GAME OVER' 
    if(currentQuestionIndex >= questions.length){
        var h1El = document.createElement('h1');
        h1El.textContent = 'GAME OVER';
        QUIZ.append(h1El);
        return;
    }
    //-------------------------------------------------------------
    //-GENERATES THE CURRENT QUESTION-//
    var currentQuestion = questions[currentQuestionIndex];
    var h1El = document.createElement('h1');
    h1El.textContent = currentQuestion.question;
    QUIZ.append(h1El);
    //------------------------------------------------------------
    //-FOR LOOP TO GO THROUGH EACH ANSWER IN THE ARRAY-// 
    //(broken because i did what teach said not to do by accident:
    //'never.repeat.yourself')
    for(var i = 0; i < currentQuestion.options.length; i++){
        var liEl = document.createElement('li');   
        liEl.textContent = currentQuestion.options[i];
        choices.append(liEl);
    }
}
//-------------------------------------------------------------------
//-CHECKS TO MAKE SURE THE SELECTED ANSWER MATCHES THE CORRECT ANSWER FOR THE QUESTION-//
function check(event){
    console.log(questions[currentQuestionIndex].answer)
    // right answer =>
    if(questions[currentQuestionIndex].answer == event.target.innerText){
        rightOrWrong.textContent = '';
        rightOrWrong.textContent = 'YOU RIGHT!!!'
    }else {  //wrong answer =>
        rightOrWrong.textContent = '';
        rightOrWrong.textContent = 'CLOSE BUT NO CIGAR ';
    }
    currentQuestionIndex++;
    generateQuestions();
}
startButton.addEventListener('click', generateQuestions);
choices.addEventListener('click', check)