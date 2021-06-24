var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score, ground;


function preload() {
  monkey_running = loadAnimation(
    "sprite_0.png",
    "sprite_1.png",
    "sprite_2.png",
    "sprite_3.png",
    "sprite_4.png",
    "sprite_5.png",
    "sprite_6.png",
    "sprite_7.png",
    "sprite_8.png"
  );

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  bg1 = loadImage('bg2.png')
}

function setup() {
  createCanvas(700, 400);
  
  bgrnd = createSprite(350 , 200 , 700 , 400)
  bgrnd.addImage('bg' , bg1)
  bgrnd.depth = 0
  
  

  monkey = createSprite(100, 330, 20, 20);
  monkey.addAnimation("monk", monkey_running);
  monkey.scale = 0.12;

  ground = createSprite(200, 370, 1400, 10);
  ground.velocityX = -8;

  ground.x = ground.width / 2;

  foodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0
  
  
}

function draw() {
  background("white");

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  drawSprites();
  
  
  

  //console.log(monkey.y);

  if (keyDown("space") && monkey.y >= 325) {
    monkey.velocityY = -18;
  }

  monkey.velocityY += 0.9;

  monkey.collide(ground);

  spawnbanana();
  spawnobst();
  
  stroke('black')
  textSize(20)
  fill('black')
  text('Survival time : ' + score, 100,50 )
  score = Math.ceil(frameCount / frameRate())
  
}

function spawnbanana() {
  if (frameCount % 80 === 0) {
    banana = createSprite(700, Math.round(random(120, 200)), 20, 20);
    banana.addImage("baba", bananaImage);
    banana.scale = 0.15;
    banana.velocityX = -8;
    banana.lifetime = 100;
    foodGroup.add(banana);
  }
}

function spawnobst() {
  if (frameCount % 300 === 0) {
    obstacle = createSprite(700, 340, 20, 20);
    obstacle.addImage("obstcl", obstacleImage);
    obstacle.scale = 0.15;
    obstacle.velocityX = -6;
    obstacle.lifetime = 150;
    obstacleGroup.add(obstacle);
  }
}
