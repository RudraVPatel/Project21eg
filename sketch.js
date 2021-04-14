var canvas;
var music;
var ground1, ground2, ground3, ground4
var striker;

var topedge;
var  rightedge,leftedge;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(700,600);

    //create 4 different surfaces
    ground1 = createSprite(100, 500,150, 20 );
    ground1.shapeColor = "red";

    ground2 = createSprite(260,500,150,20)
    ground2.shapeColor = "blue"
    ground3 = createSprite(420,500,150,20);
    ground3.shapeColor = "green";

    ground4 = createSprite(580,500,150,20);
    ground4.shapeColor = "yellow"

    //create box sprite and give velocity
    striker = createSprite(350,100,20,20)
    striker.shapeColor = "purple"
    striker.velocityY = 5;
    striker.velocityX = 2;

    topedge = createSprite(350,10,700,20);
    topedge.visible = false;

    rightedge = createSprite(0,300,20,600);
    rightedge.visible = false;

    leftedge = createSprite(700,300,20,600);
    leftedge.visible = false;
    

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  //  striker.velocityX = 3;
  /// striker.velocityY = 3;

createEdgeSprites();
  
  
  striker.bounceOff(ground1);
  striker.bounceOff(ground2);
  striker.bounceOff(ground3);
  striker.bounceOff(ground4);
  striker.bounceOff(topedge);
  striker.bounceOff(rightedge);


  if(striker.isTouching(ground1) && ground1.bounceOff(striker)){

    striker.changeColor = "red"
  }

  if(striker.isTouching(ground2)&& ground2.bounceOff(striker)){
      striker.changeColor = "blue" 
  }
 if(striker.isTouching(ground3)&& ground3.bounceOff(striker)){

    striker.changeColor = "green"
 }


 if (striker.isTouching(ground4)&& ground4.bounceOff(striker)){

    striker.changeColor = "yellow"
 }
    //add condition to check if box touching surface and make it box
    drawSprites();
}
