const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = ("");


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Enter your name:");
//console.log("Candidate Name: " + candidateName);
}


function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

//let candidateAnswer = input.question(questions[i]);

for  (let i=0; i < questions.length; i++){
  let candidateAnswer = input.question(questions[i]);
  candidateAnswers.push(candidateAnswer);
  console.log("Your answer:" + candidateAnswer);
  console.log("Correct answer:" + correctAnswers[i])
}
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let answersCorrect = 0;
  for (let i=0; i < candidateAnswers.length; i++){
    if (correctAnswers[i].toLowerCase().includes(candidateAnswers[i].toLowerCase())){
    answersCorrect++;
    } else {
      answersCorrect;
     // console.log("That is not correct");
    }
}

let grade = (answersCorrect/questions.length) * 100;
console.log("Overall Grade:" + grade + "% " + "(" + (answersCorrect)+ " of " + (questions.length) + " responses correct)");

if (grade >= 80){
  console.log("Status: Passed");
} else {
  console.log("Status: Failed");
}
  //let grade = ((number of Correct Answers)/(Number of Quiz Questions))*100 //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log("Welcome to your first quiz " + candidateName);
  askQuestion();
  gradeQuiz(this.correctAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};