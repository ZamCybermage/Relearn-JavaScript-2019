
Conditional Statements

This evaluates whether a statement true or false

if...else

For more than two conditionals:

if(conditional){
  code to execute if true;

} else if(conditional 2){
  block of code to execute if condition 2 is true;

} else{
  block of code if condition is false;
}



Logcal Operators

-Used to determine the logic between variables and values

--Three types:

 AND which is "&&"
 OR which is "||"
 NOT which is "!"


 Logical AND (&&)
-----------------
 (true && true) --> true
 (true && false) --> false
 (false && false) --> false


 Logical OR (||)
----------------
 (true || true) --> true
 (true || false) --> true
 (false || false) --> false



  Logical NOT (!)
 ----------------
  (!true) --> false
  (!false) --> true


  ---------------------------------------------------------------------------------------------------------------------------------------------------

  Excercise:

  ==================Coding Task 1====================

  [x] Create a variable to represent the scores of exams for Osama and Mohamed and set values as 90 and 46.

  [x] Create a variable to set the lower limit for passing an exam and assign to it value as 55.

  [x] Write  the condition in if statement, which will check if both students have passed an exam and log the result in the console.

  [x] Use else if statement in order to check if one of the students has passed an exam and log the result to the console.

  [x] Use else statement in order to display in console that both students have failed.

  [x] In case of passing the exam by one of the students, find out which one was that and display in console as additional information, the student name and his points.

  [x] Test all possible cases (a. both students passed an exam; b. Osama has passed and Mohamed has failed; c. Mohamed has passed and Osama has failed. d. Both students have failed).





---------------------------------------------------------------------------------------------------------------------------------------------------

  solutions:

  var scoreOsama = 90;
  var scoreMohammed = 46;
  var passScore = 55;


  if(passScore >= scoreOsama && scoreMohammed){

    console.log("Both students have passed");
  }
  else if(passScore >= scoreOsama){
    console.log("Osama has passed the exam");
  }


  else if(passScore >= scoreOsama){
    console.log("Osama has failed");
  }

  else if(passScore >= scoreMohammed){
    console.log("Mohamed has passed the exam");
  }

  else if(passScore <= scoreMohammed){
    console.log("Mohamed has failed the exam");
  }

  if(passScore >= scoreOsama && scoreMohammed){
    console.log("Both students have failed");
  }

  else{
    console.log("Osama has passed the exam with " + scoreOsama+ " points.");
  }



  =============================================================================================

  =======Functions==============

  function myFunction(parameter1, parameter2){

    //Code block to run
  }

  myFunction(argument1, argument2);

  ==================================

  'return' stops execution of function and returns the value of the function.



  ====================Expressions vs Statements=======================


  -statements are instructions to be executed by the web browser.
  -expressions always give a value (e.g w = 60; 60 ===true;) and can be written whereever a value is expected.


  ===========================================


  =====Objects================

  These are collections of related variables and functions, which are represented as name/value pairs

  -Almost everything in JavaScript is an object
  -To add properties to an object, use a '.' notation


  Can be compared to a human:

   ------------------------------------------
   properties      
  ------------------------------------------                 
  human.firstName= "Not";    
  human.lastName = "Sure";
  human.age = 40;
  human.profession = "Web Developer";
  person.height = 190;

  ------------------------------------------
  methods     
 ------------------------------------------
  Actions of the human

  human.speak();
  human.run();
  human.work();
  human.reproduce();
  human.party();
  human.drinkAlcohol();
  human.read()
  ---------------------------------------------------------------

//Creating a new object

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


=======================================================================

  //Creating objects with literal notation

----------------------------------------------
  format 'var myObj = {properties: value};'
----------------------------------------------  


  var obj = {key:value,
    key_1: value_2,
    key_3: value_3,

     subObj: {
       subSubObj: valValue,
       subSubObj_1: valValue_1,
       subSubObj_2: valValue_2,
       subSubObj_3: valValue_3,

       },
  };


====================================================

Loops

Looping is repeating a block of code once it is true in an array.
When loop reaches 'false', it stops the loop.

'for' loop:
-------------------------------------------------
for(initialiser variable; condition; increment){

//block of code
}
-------------------------------------------------

'continue' breaks one iteration in the loop.

--------------------------------------------------
