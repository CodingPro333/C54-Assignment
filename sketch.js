var canvas, backgroundImage
var gameState = 1;
var answer;
var database;
var gameOver;

function setup(){
  canvas = createCanvas(1000,4000); 

  
}

function draw(){
 background("lightblue");
 
if(gameState === 1){
  fill("Red")
 textSize(40)
 text("Press the right key to answer the question",180,90)
 fill("black");
 textSize(50);
 text("Question 1",380,350)
 text("Simplify 11^3-1327",340,410)
 if(keyDown("4")){
    gameState = 2;
 }}
 if(gameState === 2){
  textSize(50);
  fill("black")
  text("Question 2",380,350)
  text("What is the zero of the polynomial",120,410);
  text("3x-18",470,470)
  if(keyDown("6")){
    gameState = 3;
  }}
if(gameState === 3){
  fill("black")
  textSize(50);
text("Question 3",380,270)
text("What is sin (choose the correct answer)",80,330)
text("a) 1/cot",120,390)
text("b)1/cosec",120,450)
if(keyDown("b")){
  gameState = 4;
}
}
if(gameState === 4){
  fill("black");
  textSize(50);
  text("Question 4",380,270)
  text("What is volume of cube?",90,330)
  text("a)side^3",100,390);
  text("b)length*breadth*height",100,450);
  if(keyDown("a")){
    gameState = 5;
  }
}
if(gameState === 5){
  fill("red");
  textSize(100)
  text("Congratulations!",100,250)
  text("You Pass!",200,380)
}
 drawSprites();
}