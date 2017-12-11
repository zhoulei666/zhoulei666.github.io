//Create two variables that will store the new objects from the class Circle
let circleArray = []; //array for the lines
let arraySize = 2000; //there is 2000 yellow/orange lines
let arraySize2 = 10; //there is 10 white circles
let circleArray2 = []; //array for the circle

function setup() {
var canvas = createCanvas(594, 841); //canvas size (594x841px)
canvas.parent("CanvasContainer"); //makes the canvas in the middle which is
//later declared in CSS and HTML files
  for (let i=0; i<arraySize; i++){
    //loop for yellow/orange lines, it starts with 0 lines and adds more until there
    //is 2000 of them
    circleArray[i] = new Circle(width/2, height/2, random(-5, 5), random(-5, 5), 2);
    //an array is assigned to a new Circle class, the lines start in the middle,
    //and move at random speed, and they are 2px in size
  }
  for (let a=0; a<arraySize2; a++){
    //loop for the white circles, it starts with 0 circles and adds more until
    //there is 10 of them
    circleArray[a] = new Circle2(width/4, height/4, random(-3, 3), random(-3, 3), 50);
    //an array is assigned to a new Circle2 class, the circles start in the
    //middle top left side of the canvas, and they are 50px in size
  }
}

function draw() {
  for (let i=0; i<circleArray.length; i++){
    //loop for the lines, which are assigned to the contructors
    circleArray[i].moveFunction();
    //assigned to move function
    circleArray[i].displayCircle();
    //assigned to display function
  }
  for (let a=0; a<circleArray2.length; a++){
    //loop for the circles, which are also assigned to the same constructors
    circleArray2[a].moveFunction();
    circleArray2[a].displayCircle();
  }

  if (mouseIsPressed) {
    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 50, 50);
    //when mouse is pressed it will create a white circle at the location
    //of the cursor, with the size of 50px
  }
}

//Definition of the class Circle
class Circle{

  constructor(x, y, speedX, speedY, size){
    //Setup of class' variables
    this.x = x;
    //x coordinate
    this.y = y;
    //y coordinate
    this.speedX = speedX;
    //horizontal speed
    this.speedY = speedY;
    //vertical speed
    this.size = size;
    //size of the lines

    this.rd = random(150, 255);
    //gives red a random value between 150 and 255
    this.grn = random(100, 150);
    //gives green a random value between 100 and 150
    this.a = 255;
    //sets alpha value to 255
  }

  //Class function that takes care of motion and collision
  moveFunction(){
    //Motion system - current position and speed
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    //adds the position with the speed to create a movement

    //Based on boundaries collision, reverse direction for x and y
    if (this.x > width || this.x<0){
      this.speedX *= -1;
    }
    if (this.y > (height) || this.y<0){
      this.speedY *= -1;
    }
      //if the lines hit the wall it will reverse the speed
  }


  //Class function that displays the ellipse
  displayCircle(){
    noStroke();
    //removes the stroke of the lines
    this.fillcol = color(this.rd, this.grn, 0, this.a)
    //the colour of the lines, which only include red and green values
    fill(this.fillcol);
    //fill of the ellipse
    ellipse(this.x, this.y, this.size, this.size);
    //ellipse command with its position and size
  }
}
class Circle2 {
  constructor(x2, y2, speedX2, speedY2, size2){
    this.x2 = x2;
    //x coordinate of the white circle
    this.y2 = y2;
    //y coordinate
    this.speedX2 = speedX2;
    //horizontal speed
    this.speedY2 = speedY2;
    //vertical speed
    this.size2 = size2;
    //size
  }
  moveFunction(){
    //Motion system - current position and speed
    this.x2 = this.x2 + this.speedX2;
    this.y2 = this.y2 + this.speedY2;
    //position added with speed creates movement
    //Based on boundaries collision, reverse direction for x and y
    if (this.x2 > width || this.x2<0){
      this.speedX2 *= -1;
    }
    if (this.y2 > (height) || this.y2<0){
      this.speedY2 *= -1;
    }
    //reverses speed of the circle once hits the wall
  }
  displayCircle(){
    noStroke();
    //removes the stroke
    fill(255);
    //sets the fill to white
    ellipse(this.x2, this.y2, this.size2, this.size2);
    //position of white circles, and their size
  }
}
