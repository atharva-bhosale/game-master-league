var play=1;

var end=0;

var gameState=play;

var image1, image1img;

var boy,boyimg;

var nameplate,nameimg;

var next,nextImg;

var gamemade,gamemadeImg;

var help,helpImg;

var helpphoto,helpphotoImg;

var backphoto,backphotoImg;

var ground , groundimg;

var boy1,boyimg1;

var apple,appleImg;

var apple1,appleImg1;

var appleGroup;

var score=0;

var wall1,wall2,wall3,wall4;

function preload(){
 //load your images here 
 
 image1img=loadImage("backrround.jpg");
  
  boyimg=loadImage("907fa26896f31dad7b4237c411ac6582.png");
  
  nameimg=loadImage("Capture1.PNG");
  
  nextImg=loadImage("play-button.png");
  
  nextImg=loadImage("play-button.png");
  
  gamemadeImg=loadImage("Capture2.PNG");
  
  helpImg=loadImage("help.png");
  
  helpphotoImg=loadImage("Capture4.PNG");
  
  backphotoImg=loadImage("Capture3.PNG");
  
  groundimg=loadImage("background1.jpg");
  
  boyimg1=loadImage("boy.png");
  
  appleImg=loadImage("apple.png");
  
   appleImg1=loadImage("apple.png");
}

function setup() {
  createCanvas(400, 400);
  
  applespawn();
 
  wall1=createSprite(200,10,400,20);
  
  wall2=createSprite(200,390,400,20);
  
  wall3=createSprite(10,200,20,400);
  
  wall4=createSprite(390,200,20,400);
  
  ground=createSprite(200,200,20,20);
  ground.addImage("ground",groundimg)
  ground.scale=2;
  
  boy1=createSprite(200,200,500,500);
  boy1.addImage("ground",boyimg1)
  boy1.scale=0.1;
  

  helpphoto=createSprite(200,200,100,100);
  helpphoto.addImage("helpphoto",helpphotoImg)
  helpphoto.scale=0.7;
   
  
  backphoto=createSprite(70,370,500,500);
  backphoto.addImage("backphoto",backphotoImg)
  backphoto.scale=0.4;
  backphoto.visible=true;
  
  image1=createSprite(200,200,50,50);
  image1.addImage("image1",image1img)
  image1.scale=0.5;

  boy=createSprite(320, 80,20,20);
  boy.addImage("boy",boyimg)
  boy.scale=0.08
  
  nameplate=createSprite(295,250,20,20);
  nameplate.addImage("name",nameimg);
  nameplate.scale=0.4
  
  gamemade=createSprite(280,310,20,20);
  gamemade.addImage("gamemade",gamemadeImg);
  gamemade.scale=0.5;
  
  next=createSprite(350,370,20,20);
  next.addImage("next",nextImg);
  next.scale=0.4;
  
  help=createSprite(50,360,20,20);
  help.addImage("help",helpImg);
  help.scale=0.1;
  
  appleGroup = new Group();
 
  
}

function draw() {
 
  if( frameCount%100===0 ){ 
applespawn();
 }
  
  rectMode(CENTER);
  background(0);
  //add code here
  textSize(30);


 if(mousePressedOver(next)){
    image1.visible=false;
    boy.visible=false;
    nameplate.visible=false;
    gamemade.visible=false;
    gamemade.visible=false;
    next.visible=false;
    helpphoto.visible=false;
    help.visible=false;
    backphoto.visible=false;

  
  
  } 
else if(mousePressedOver(help)){
 helpphoto.visible=true;
     image1.visible=false;
    boy.visible=false;
    nameplate.visible=false;
    gamemade.visible=false;
    gamemade.visible=false;
    next.visible=false;
  //  helpphoto.visible=false;
    help.visible=false;
  
}
else if(mousePressedOver(backphoto)){
 helpphoto.visible=true;
     image1.visible=true;
    boy.visible=true;
    nameplate.visible=true;
    gamemade.visible=true;
    gamemade.visible=true;
    next.visible=true;
  //  helpphoto.visible=false;
    help.visible=true;
}
  else if(keyDown("left")){
    boy1.x=boy1.x-5;
  }
  else if(keyDown("right")){
  boy1.x=boy1.x+5;
  }
  else if(keyDown("up")){
   boy1.y=boy1.y-5;
  }  
  else if(keyDown("down")){
   boy1.y=boy1.y+5;
  }    
  else if(appleGroup.isTouching(boy1)){
    appleGroup.destroyEach();
    score=score+1;
  }  
  else if(wall1.isTouching(boy1)){
    appleGroup.destroyEach();
   helpphoto.visible=true;
     image1.visible=true;
    boy.visible=true;
    nameplate.visible=true;
    gamemade.visible=true;
    gamemade.visible=true;
    next.visible=true;
    backphoto.visible=true;
    help.visible=true;
    
    boy1.x=200;
    boy1.y=200;
    
    score=0
    
  }  
    else if(wall2.isTouching(boy1)){
    appleGroup.destroyEach();
   helpphoto.visible=true;
     image1.visible=true;
    boy.visible=true;
    nameplate.visible=true;
    gamemade.visible=true;
    gamemade.visible=true;
    next.visible=true;
    backphoto.visible=true;
    help.visible=true;
    
    boy1.x=200;
    boy1.y=200;
    
    score=0
    
  }  
    else if(wall3.isTouching(boy1)){
    appleGroup.destroyEach();
   helpphoto.visible=true;
     image1.visible=true;
    boy.visible=true;
    nameplate.visible=true;
    gamemade.visible=true;
    gamemade.visible=true;
    next.visible=true;
    backphoto.visible=true;
    help.visible=true;
    
    boy1.x=200;
    boy1.y=200;
    
    score=0
    
  }  
    else if(wall4.isTouching(boy1)){
    appleGroup.destroyEach();
   helpphoto.visible=true;
     image1.visible=true;
    boy.visible=true;
    nameplate.visible=true;
    gamemade.visible=true;
    gamemade.visible=true;
    next.visible=true;
    backphoto.visible=true;
    help.visible=true;
    
    boy1.x=200;
    boy1.y=200;
    
    score=0
    
  }  
  
  appleGroup.add(apple);

apple.depth=image1.depth;
image1.depth=apple.depth+0.2;
boy.depth=image1.depth;
  help.depth=image1.depth;
  next.depth=image1.depth;
    nameplate.depth=image1.depth;
  gamemade.depth=image1.depth;
  
  
  helpphoto.depth=apple.depth;
helpphoto.depth=apple.depth+0.2;
  
wall1.depth=ground.depth;
wall1.depth=ground.depth+0.2;
  
wall2.depth=ground.depth;
wall2.depth=ground.depth+0.2;
  
wall3.depth=ground.depth;
wall3.depth=ground.depth+0.2;
  
wall4.depth=ground.depth;
wall4.depth=ground.depth+0.2;
  drawSprites();
  
  fill("Green");
  
  text("SCORE :"+score,130,50)
  
}

function applespawn(){
  
  
  apple=createSprite(0,0,500,500);
  apple.addImage("apple",appleImg)
  apple.scale=0.01;

   apple.x=Math.round(random(20,380))
   apple.y=Math.round(random(20,380)) 
  
}

