
var students = [

 {
   name: "Vladimir",
   score_1: 50,
   score_2: 49,
 },

{
  name: "Ahmed",
  score_1: 40,
  score_2: 39,
},

{
 name: "Jesus",
 score_1: 30,
 score_2: 50,
},

{
 name: "Mezdek",
 score_1: 44,
 score_2: 46,
}
];


var certificates = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon"];
var certLimits = [95, 86, 75, 63, 54];


//calculate total score (score-1 + score-2) for each student
function totalScore(scre_1, scre_2){

 var sumScre = scre_1 + scre_2;
 return sumScre;
}

//which student has passed successfully
function calCfinal(){
  for(var i = 0; i < students.length; i++){
    students[i].sum = totalScore(students[i].score_1,
    students[i].score_2);

    if(students[i].sum >= 54){
      console.log(students[i].name + " has passed successfully");
      for(var j = 0; j < certLimits.length; j++){

        if(students[i].sum >= certLimits[j]){

         console.log("He has " + students[i].sum + " points and he got diploma with degree " + certificates[j]);
        }
      }
    }
  }
  console.log(students);
}
calCfinal();



//==========================Demonstrating a nested 'for-loops'========
//
// console.log("_________________________");
//
// for(i = 400; i < 500; i++){
//   for(j = 200; j < 300; j++){
//     console.log(j);
//   }
//   console.log(i);
// }
// //=====================================================================
