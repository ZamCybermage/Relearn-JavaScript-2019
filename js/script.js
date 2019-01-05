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
passExams("Sulayman ", calculateScores(40,60));


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

//This is the literal method to write arrays

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

 //To invoke the funtion, just add '()' and its index number (which is [6] here)
  console.log(myArray[6](myArray[0]));



  //=======================Using the array constructor=====================

  //This is the constructor method for constructing arrays
  //This is hardly used

  var myArray = new Array(60, "Electron", false);
  console.log(myArray);


  //=======================Array Methods============================

  var trinbagoFlag = ["red", "white","black"];

  //To change values in arrays

   // 1) Call the array
   // 2) Set its index to a new value

  trinbagoFlag[2] = "Yellow";

  //Add items at the end to an array
  //'push()' method
   trinbagoFlag.push("Indigo");

  //Remove elements from end of array
   //'pop()' method
   trinbagoFlag.pop("Indigo");

   //Remove items from beginning of array
   //'shift()' method
   trinbagoFlag.shift();

   //Add a new item to replaced the removed item from initial array position
   //'unshift()' method
   trinbagoFlag.unshift("Violet");

  //Searching for position of an item in array
 // 'indexOf()' method
  console.log(trinbagoFlag.indexOf("white"));
  console.log(trinbagoFlag.indexOf("plum"));

//----------------------------------------------------------------------------------------
 //Example to find if the blue colour does not exist and add it if it does not exist
  if(trinbagoFlag.indexOf("blue") === -1){
    trinbagoFlag.push("blue");
    console.log(trinbagoFlag);
  }
 //-----------------------------------------------------------------


    console.log(trinbagoFlag);


  //=======================================================================================================


  //===============Objects====================================================

  //Creating a new object with constructor method

    var person = new Object();
    var occupation = 'job';
    var name = 'firstname';

    person.name = "Zaam";
    person['lastname'] = "Hamed";
    person[occupation] = "Digital Designer";


    //outputting to console
    console.log(person);
    console.log(person.firstname);
    console.log(person['lastname']);


//================================================================

//Creating objects with literals
var secondPerson = {
  firstname: "Azam",
  lastname: "Mohammed",
  age: 32,
  occupation: "Graphic Designer",
  cat: {
    name: "Piglette",
    age: 3
  },
  //Use anonymous functions
  //These are called methods
  meinFunktion: function(catName, ownerName, catAge){

    console.log(catName + " is the cat of " + ownerName + " and he is "
    + catAge  + " years old");
   }
 };

 console.log(secondPerson);
 console.log(secondPerson.cat.name);

 //Calling the method
 secondPerson.meinFunktion(secondPerson.cat.name, secondPerson.firstname, secondPerson.cat.age);



 //=====================================================================================

 //========================Loops================

 //Looping is the repeating a block of code once the condition is true

 var nobleGases = ["Helium", "Argon", "Krypton", "Xenon"];

 //outputting each item in the console
  for( var i =0; i < nobleGases.length; i++){
    // i = i+1
    //The value is incremented by when in a single loop
    console.log(nobleGases[i]);
  }



  //----Using 'break' statement
  //To stop the loop when the condition is true inside the if statement use 'break'
  var arabNames = ["Mahmud", "Salman", "Mohammed", "Abdullah"];

  for(var i = 0; i < arabNames.length; i++){
      //finding my surname from the array
      if(arabNames[i] === "Mohammed"){
        console.log(arabNames[i] + " is my surname");
        break;
      }
      //other statements can NOT be logged to console
      //nothing outside will run since 'break' was added above
      console.log(arabNames[i]);
  }



  //-----Using 'continue' statement
  //Below it will output everything in the array except  'Mohammed'
  //'continue' breaks one iteration in a loop if a specified condition occurs and continues with the next iteration in the loop
  // i.e. it breaks the current iteration and moves directly to the next iteration

  var arabNames = ["Mahmud", "Salman", "Mohammed", "Abdullah"];

  for(var i = 0; i < arabNames.length; i++){
      //finding my surname from the array
      if(arabNames[i] === "Mohammed"){
        console.log(arabNames[i] + " is my surname");
        continue;
      }
      console.log(arabNames[i]);
  }

//==========================================================
