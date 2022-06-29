var PLAY = 1;
var END = 0;
var gameState=1;
var gameover, gameoverImg;

var Balao, BalaoImg;
var CloudImg, cloudGroup;
var ceu, BackgroundImg, scene;



function preload(){
    
    BalaoImg = loadImage("balaodear.png");
    CloudImg = loadImage("cloud.png");
    BackgroundImg = loadImage("ceu.png");
    gameoverImg = loadImage("gameover.png");
  


}
     function setup() {
    createCanvas(1400, 400);


    scene = createSprite(1500,1000,0,0);
    scene.addImage(BackgroundImg);
    scene.scale = 2.5
    
   
    Balao = createSprite(50,300,20,50);
    Balao.addImage(BalaoImg);
    Balao.scale = 0.1;

    gameover = createSprite(700,200);
    gameover.addImage(gameoverImg);
    gameover.scale = 1;


    cloudGroup = new Group();
}

function draw() {
    if(gameState === PLAY) {
       background(0);
       Balao.y = World.mouseY;

      scene.velocityX = -6;


     
     
      if(scene.x < 0) {
        scene.x = scene.width/2;
      }

       gameover.visible = false;
       

       if(World.frameCount % 100 == 0) {

       Clouds();
 }

       
       if(cloudGroup.isTouching(Balao)){
       Balao.x = 50;
       Balao.y = 300;
        
       cloudGroup.setVelocityXEach(0);
        gameState = END;

        gameover.visible = true;
      
       }

    drawSprites();
    
    textSize(25);
    fill(255);
    text("NÃO DEIXE O BALÃO ENCOSTAR NAS NUVENS!!!",110,30);

}
}

     function Clouds() {
    if (World.frameCount % 5 == 0) {
    var nuvem = createSprite(1300,Math.round(random(20, 370), 10, 10));
    nuvem.addImage(CloudImg);
    nuvem.scale=1;
    nuvem.velocityX = -6;
    nuvem.lifetime = 500;
    cloudGroup.add(nuvem);
    }
  }

 