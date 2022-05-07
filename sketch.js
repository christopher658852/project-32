
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopter,helicopter_img
var foodbox,foodbox_img
var background,background_img
var dropbtn
var background_music
var muteBtn
var canW;
var canH;
var bg


function preload()
{
  helicopter=loadImage("helicopter.jpg");
  foodBox=loadImage("download.png");
  background_img=loadImage("ruinedcity.jpg");
  dropbtn=loadImage("dropBtn.png");
  background_music = loadSound("Gold.mp3");
  muteBtn= loadImage("muteBtn.jpg");
}

function setup() 
{
  createCanvas(400,800);
  frameRate(80)
  engine = Engine.create();
  world = engine.world;
  // bg = createSprite(400,800,30,30);
  
}



function draw() 
{
  background(51);
 
  Engine.update(engine);
  
  push();
  imageMode(CENTER);
  if(foodbox!=null){
    image(foodbox)
  }
  // drawSprites()
}


function mute()
{
  if (background_music.isPlaying()){
    background_music.stop();
  
  }
  else{
    background_music.play();
  }
}

