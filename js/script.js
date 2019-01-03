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


//===================
