var PLAY = 1
var END = 0
var gameState = PLAY
var rocket;
var score;
var asteroid;
var bg;
var gameover;

function preload(){
rocketImg = loadImage("rocket.jpeg")
bgImg = loadImage("bg.jpeg")
ateroidImg = loadImage("asteroid.png")
}

function setup() {
createCanvas (400, 400)

rocket = createSprite(200, 300, 20, 50)
rocket.addImage("rocket", rocketImg)
rocket.scale = 0.5
rocket.x = 50

bg = createSprite(400, 400, 400, 50)
bg.addImage("bg", bgImg)
bg.y = bg.height/6
bg.velocityY = -4

restart = createSprite(200, 200, 20, 10)

rocket.setCollider("circle", 0, 0, 40)
rocket.debug = true

edges = createEdgeSprites();
}


function draw() {
 background(bgImg)

if(keyDown("UP_ARROW") && rocket.y >= 100)
{
    rocket.velocityX = -10
}
rocket.velocityX = rocket.velocityX + 0.5



score = 0

rocket.collide(edges[3])
 drawSprites;

 text("Score = " + score, 300, 50)

 if(gameState === PLAY) {
    bg.velocityY = -4
    score = score + Math.round(frameCount/60)
    if(bg.y<0) {
        bg.y = bg.height/6
        }
if (asteroid.isTouching(rocket))
        gameState = END;
 }

 else if(gameState = END) {
    bg.velocityY = 0
    asteroid.velocityY = 0
    asteroid.destroy();
 }
}

function spawnAsteroids () {
if(frameCount % 60 === 0) {
    asteroid = createSprite(400, 200, 40, 10)
    asteroid.addImage(asteroidImg)
    asteroid.y = Math.round(random(400, 400))
    asteroid.scale = 0.5
    asteroid.velocityY = -3;
    asteroid.depth = rocket.depth
    rocket.depth = rocket.depth + 1
    asteroid.lifetime = 400
}
}