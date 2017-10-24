// VARIABILI INIZIALI
var myFont;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
 
}

function preload() {
  myFont = loadFont('assets/ARLRDBD_0.TTF');
}


function draw() {
  
  // VARIABILI SFONDO 
  
  var Quote1 = ["The day is almost over. Don't forget to set your alarm for tomorrow."];
  var Quote2 = ["It's time to sleep. Close your eyes and don't let the bed bugs bite."];
  var Quote3 = ['Rise and shine. With the new day comes new strength and new thoughts.'];
  var Quote4 = ['If you can spend a perfectly useless afternoon in a perfectly useless manner, you have learned how to live.'];
  
   if(hour() > 19 && hour() < 24) {
   background('#0b0b3f');
   stroke('#262659');
  
   fill('#ffffff')
   
   textSize(26);
   textAlign(CENTER);
   textFont(myFont);
   text("Good evening!", width/2, height/6.5);
   textSize(13);
   text(Quote1, width/5.5, height-80, width/1.5, height/2);
  }
  
  else if (hour() > 0 && hour() < 6) {
    background('#303a44');
    stroke('#484d51');
    
    fill('#ffffff')
   
   textSize(26);
   textAlign(CENTER);
   textFont(myFont);
   text("Good night!", width/2, height/6.5);
   textSize(13);
   text(Quote2, width/5.5, height-80, width/1.5, height/2);
  }
  
  else if (hour() > 6 && hour() < 12) {
   background('#99dddd');
   stroke('#31adba');
   
   textSize(26);
   textAlign(CENTER);
   textFont(myFont);
   text("Good morning!", width/2, height/6.5);
   textSize(13);
   text(Quote3, width/5.5, height-80, width/1.5, height/2);
  }
  
  else if (hour() > 12 && hour() < 19) {
     background('#e0b19d');
     stroke('#dd734e');
     
     textSize(26);
   textAlign(CENTER);
   textFont(myFont);
   text("Good afternoon!", width/2, height/6.5);
   textSize(13);
   text(Quote4, width/5.5, height-80, width/1.5, height/2);
  }
  
  // OROLOGIO 
  clock();

}

function clock() {
   
   push();
   translate(width/2,height/2);
   rotate(-90);
  
   // DEFINIZIONE VARIABILI
   
  var customHour = hour();
  var customMinute = minute();
  var customSecond = second();
  
  if (customHour > 12) {
  customHour = customHour -12;
   }
  

   //ATTRIBUTI
  strokeWeight(5);
  strokeCap(ROUND);
  noFill();
  
   // DISEGNO SECONDI
  var diameter = 0;
  
  if(width>height) {
  diameter = height/2;
  }
   
  else {
     diameter = width/2;
  }
  
  arc(0,0,diameter,diameter, 0, customSecond*6);
  
  // DISEGNO MINUTI
  
  
  if(width>height) {
  diameter = height/2.5;
  }
   
  else {
     diameter = width/2.5;
  }
  
  arc(0,0,diameter,diameter, 0, customMinute*6);
  
  // DISEGNO ORE
 
  
  if(width>height) {
  diameter = height/3.5;
  }
   
  else {
     diameter = width/3.5;
  }
  
 arc(0,0,diameter,diameter, 0, customHour*30);
 pop();
}

function windowResized(){
   resizeCanvas(windowWidth,windowHeight);
}