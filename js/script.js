//See README.md file for notes


//=====================solutions to the coding task=====================



// variable to represent the scores of exams for Osama and Mohamed and set values as 90 and 46.
var scoreOfOsama = 90;
var scoreOfMohammed = 46;


//variable to set the lower limit for passing an exam and assign to it value as 55
var passScore = 55;


//condition in if statement, which will check if both students have passed an exam and log the result in the console.
if(scoreOfOsama >= passScore && scoreOfMohammed >= passScore){
  console.log("Both students passed");
}

//Use else if statement in order to check if one of the students has passed an exam and log the result to the console.
else if(scoreOfOsama >= passScore || scoreOfMohammed >= passScore){
  console.log("One of the students passed");
}

//In case of passing the exam by one of the students, find out which one was that and display in console as additional information, the student name and his points.
//Student who pass exams must have higher score
if(scoreOfOsama > scoreOfMohammed){
  console.log("and it is Osama with " + scoreOfOsama + " points");
}

/* else{
  console.log(" and it is Mohamed with " + scoreOfMohammed + " points");
} */

//Use else statement in order to display in console that both students have failed
else{
   console.log("Both students have failed");
}




//=========================Functions===========================


//To ensure someone meet the requirements for getting into a university or college

function passExams(name, score){
  //Passing grade for university
  var passUniversity = 80;
  //passing grade for college
  var passCollege = 50;
 //determine if requirements is met for university
  if(score >= passUniversity ){
   //This condition must be true. If it is false, then the score was lower than the requirements
    console.log(name + "has enrolled in university and has passed with " + score + " points.");
  }
  //determine if requirements is met for university
  else if(score >= passCollege){
   console.log(name + "has enrolled in university and has passed with " + score + " points.");
  }
  //To determine if student failed
  else{
    console.log(name + "has failed");
  }
}

// //calling the function
// passExams("Ahmed ", 60);
// passExams("Zamin ", 40);
// passExams("Salim ", 99);

//==========================================================================================


//Functions to calculate scores and log to console

function calculateScores(quizScore, essayScore){
 var score = quizScore + essayScore;

 //'return' stops the execution of the function and returns the value
  return score;
}

passExams("Ahmed ", calculateScores(30,30));
passExams("Zamin ", calculateScores(20,10));
passExams("Salim ", calculateScores(33,66));


//==========================================================================================

//======Function statements============

function add(a,b) {
  console.log(a + b);
}
add(50,20);



//========Function Expression=========
//Also called anonymous functions

var sum = function(a,b){
   console.log(a + b);
}

sum(4444,39);



//=======================Arrays===================================================

 var myArray = ["Hydrogen",
               "Helium",
               "Proton",
                60,
                true,
                [20,40,80],
                function(name){
                  return "Hello " + name;
                }
              ];

 //To invoke the funtion, just add '()'
  console.log(myArray[6](myArray[0]));
