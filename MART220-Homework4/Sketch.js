/* 
 MART 220 - Creative Coding 2
 Author: Austin Cook
 Purpose: Homework Assignment 4
 Date: February 9th, 2021
 
*/

// Variables
var shape1X = 20, shape1Y = 40;
var shape2X = 40, shape2Y = 70;
var shape3X = 60, shape3Y = 100;
var shape4X = 80, shape4Y = 130;
var shape5X = 100, shape5Y = 160;
var shape6X = 220, shape6Y = 190;
var shape7X = 240, shape7Y = 220;
var shape8X = 260, shape8Y = 250;
var shape9X = 280, shape9Y = 280;
var shape10X = 300, shape10Y = 310;
var redColor1, greenColor1, blueColor1;
var redColor2, greenColor2, blueColor2;
var redColor3, greenColor3, blueColor3;
var redColor4, greenColor4, blueColor4;
var redColor5, greenColor5, blueColor5;
var redColor6, greenColor6, blueColor6;
var redColor7, greenColor7, blueColor7;
var redColor8, greenColor8, blueColor8;
var redColor9, greenColor9, blueColor9;
var redColor10, greenColor10, blueColor10;
var shape2Size = 50;
var shape2Sizew = 30;
var shape2Sizeh = 50;
var shape3Sizew = 50;
var shape3Sizeh = 100;
var shape4Sizew = 80;
var shape4Sizeh = 40;
var shape5Size = 50;
var shape6Size = 75;
var shape7Size = 100;
var shape8Sizew = 40;
var shape8Sizeh = 70;
var shape9Size = 100;
var counter = 0;
var timerValue = 0;
var myFont;

// moving pictures (also a great album by Rush)
var ballRainbow;
var ballRainbowX = 40;
var ballRainbowY = 50;
var ballRainbowSpeed = 1;
var ballStar;
var ballStarX = 60;
var ballStarY = 100;
var ballStarSpeed = 3;
var ballOrange;
var ballOrangeX = 200;
var ballOrangeY = 200;
var ballOrangeSpeed = 5;


function preload() {
  ballRainbow = loadImage('assets/Ball-Rainbow.jpg');
  ballStar = loadImage('assets/Ball-Star.jpg');
  ballOrange = loadImage('assets/Ball-Orange.jpg');
  myFont = loadFont('assets/Amsterdam-ZVGqm.ttf');
}


function setup() {
  createCanvas(400,400);

  // Random colors for each shape
  redColor1 = random(255);
  greenColor1 = random(255);
  blueColor1 = random(255);
  redColor2 = random(255);
  greenColor2 = random(255);
  blueColor2 = random(255);
  redColor3 = random(255);
  greenColor3 = random(255);
  blueColor3 = random(255);
  redColor4 = random(255);
  greenColor4 = random(255);
  blueColor4 = random(255);
  redColor5 = random(255);
  greenColor5 = random(255);
  blueColor5 = random(255);
  redColor6 = random(255);
  greenColor6 = random(255);
  blueColor6 = random(255);
  redColor7 = random(255);
  greenColor7 = random(255);
  blueColor7 = random(255);
  redColor8 = random(255);
  greenColor8 = random(255);
  blueColor8 = random(255);
  redColor9 = random(255);
  greenColor9 = random(255);
  blueColor9 = random(255);
  redColor10 = random(255);
  greenColor10 = random(255);
  blueColor10 = random(255);

  setInterval(changeSpeed, 1000);
  
  
}

function draw() {
 
    background(10,25,170);
    
  

    //border walls
    fill(0,0,0);
    line(10,10,10,390);
    line(10,390,390,390);
    line(390,390,390,10);
    line(390,10,10,10);

    textFont(myFont);
    textSize(16);
    text('Austin Cook',255,388);
    text('A Mess of Shapes',35,41);
    //The font that I chose does not like numerals, 
    //but the timer works when the font is removed
    text('Timer: ' + timerValue, 255,41);

// This changes the shapes and colors when the draw function reaches 1000
if(counter > 1000)
{
    shape1X = random(100,300);
    shape1Y = random(100,300);
    shape2X = random(100,300);
    shape2Y = random(100,300);
    shape3X = random(100,300);
    shape3Y = random(100,300);
    shape4X = random(100,300);
    shape4Y = random(100,300);
    shape5X = random(100,300);
    shape5Y = random(100,300);
    shape6X = random(100,300);
    shape6Y = random(100,300);
    shape7X = random(100,300);
    shape7Y = random(100,300);
    shape8X = random(100,300);
    shape8Y = random(100,300);
    shape9X = random(100,300);
    shape9Y = random(100,300);
    shape10X = random(100,300);
    shape10Y = random(100,300);
    redColor1 = random(255);
    greenColor1 = random(255);
    blueColor1 = random(255);
    redColor2 = random(255);
    greenColor2 = random(255);
    blueColor2 = random(255);
    redColor3 = random(255);
    greenColor3 = random(255);
    blueColor3 = random(255);
    redColor4 = random(255);
    greenColor4 = random(255);
    blueColor4 = random(255);
    redColor5 = random(255);
    greenColor5 = random(255);
    blueColor5 = random(255);
    redColor6 = random(255);
    greenColor6 = random(255);
    blueColor6 = random(255);
    redColor7 = random(255);
    greenColor7 = random(255);
    blueColor7 = random(255);
    redColor8 = random(255);
    greenColor8 = random(255);
    blueColor8 = random(255);
    redColor9 = random(255);
    greenColor9 = random(255);
    blueColor9 = random(255);
    redColor10 = random(255);
    greenColor10 = random(255);
    blueColor10 = random(255);
    shape1Size = random(150);
    shape2Sizew = random(60);
    shape2Sizeh = random(120);
    shape3Sizew = random(75);
    shape3Sizeh = random(150);
    shape4Sizew = random(100);
    shape4Sizeh = random(50);
    shape5Size = random(150);
    shape6Size = random(150);
    shape7Size = random(200);
    shape8Sizew = random(100);
    shape8Sizeh = random(250);
    shape9Size = random(150);
    counter = 0;
}
counter++;

    // Shape 1
    fill(redColor1,greenColor1,blueColor1);
    triangle(shape1X, shape1Y, 310,90,370,50);

    // Shape 2
    fill(redColor2,greenColor2,blueColor2);
    ellipse(shape2X,shape2Y,shape2Sizew,shape2Sizeh);

    // Shape 3
    fill(redColor3,greenColor3,blueColor3);
    rect(shape3X,shape3Y,shape3Sizew,shape3Sizeh);

    // Shape 4
    fill(redColor4,greenColor4,blueColor4);
    rect(shape4X,shape4Y,shape4Sizew,shape4Sizeh);

    // Shape 5
    fill(redColor5,greenColor5,blueColor5);
    circle(shape5X,shape5Y,shape5Size);

    // Shape 6
    fill(redColor6,greenColor6,blueColor6);
    square(shape6X,shape6Y,shape6Size);

    // Shape 7
    fill(redColor7,greenColor7,blueColor7);
    square(shape7X,shape7Y,shape7Size);

    // Shape 8
    fill(redColor8,greenColor8,blueColor8);
    rect(shape8X,shape8Y,shape8Sizew,shape8Sizeh);

    // Shape 9
    fill(redColor9,greenColor9,blueColor9);
    circle(shape9X,shape9Y,shape9Size);

    // Shape 10
    fill(redColor10,greenColor10,blueColor10);
    triangle(shape10X, shape10Y,310,90,370,50);

    // Pictures
    image(ballRainbow,ballRainbowX,ballRainbowY,50,50);
    image(ballStar,ballStarX,ballStarY,50,50);
    image(ballOrange,ballOrangeX,ballOrangeY,50,50);


// Moving the rainbow ball horizontally
ballRainbowX += ballRainbowSpeed;
if(ballRainbowX >= 340 || ballRainbowX  <= 10)
{
    ballRainbowSpeed *= -1;
}

// Moving the star ball Vertically
ballStarY += ballStarSpeed;
if(ballStarY >= 340 || ballStarY  <= 10)
{
    ballStarSpeed *= -1;
}

// Moving the orange ball Diagonally
ballOrangeX += ballOrangeSpeed;
if(ballOrangeX >= 340 || ballOrangeX  <= 10)
{
    ballOrangeSpeed *= -1;
}
ballOrangeY += ballOrangeSpeed;
if(ballOrangeY >= 340 || ballOrangeY  <= 10)
{
    ballOrangeSpeed *= -1;
}



}

function changeSpeed() {
      timerValue++;
      if (timerValue % 5 == 0) {
        ballRainbowSpeed = random(1,10);
        ballStarSpeed = random(1,10);
        ballOrangeSpeed = random(1,10);
      }
    
    }