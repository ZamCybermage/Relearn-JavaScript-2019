


function digitalClock(){

  //To convert the values to string values you use '+ "" ;'
  var date = new Date();

  var hours = date.getHours() + '';

  var minutes = date.getMinutes() + '';

  var seconds = date. getSeconds() + '';

  var day = date.getDay() + '';

  if(hours.length < 2){
    hours = '0' + hours;
  }

  if(minutes.length < 2){
    minutes = '0' + minutes;
  }

  if(seconds.length < 2){
    seconds = '0' + seconds;
  }

 //Days of the week
  var weekDays = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

 //Displays current time in digital clock format & also current day name
  var clock = weekDays[day] + ' '+ hours + ':' + minutes + ':' + seconds;
  /* console.log(clock); */


  //=============displaying clock on page=======
    //accessing 'h1' element
    document.getElementById("clock").innerHTML = clock;
  //change color of display font
   document.getElementById("clock").style.color = "#fafafa";

   //change font of display to san-serif
   document.getElementById("clock").style.fontFamily = "sans-serif";


}

digitalClock();

//Making clock work dynamically
 //This is a built in method
 //It uses no parentheses
 //format: setInterval([function],[time in milliseconds])
 setInterval(digitalClock, 1000);
