
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

function totalScore(scre_1, scre_2){

 var sumScre = scre_1 + scre_2;
 return sumScre;
}

function calCfinal(){
  for(var i = 0; i < students.length; i++){
    students[i].sum = totalScore(students[i].score_1,
    students[i].score_2);
  }
  console.log(students);
}
calCfinal();
