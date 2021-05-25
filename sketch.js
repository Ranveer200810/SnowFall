
var bg;
var flake, flakeImg;
var state = "noSnow";

function setup() {
  createCanvas(800,400);

  bg = loadImage("snow-bg.png");

  flakeImg = loadImage("snow-flake.png");

}

function draw() {
  background(bg);

  textSize(18);
  strokeWeight(5);
  text("Press any other key to stop snowing !", 10, 370);
  fill('white');
  text("Press SPACE to make it snow !", 10, 50);

  if (state === "noSnow") {

    if (keyCode === 32) {

      snowFall();

    }

  }
  
  drawSprites();
}

function snowFall() {

  if (frameCount % 10 === 0) {

    flake = createSprite(random(100, 700), -50, 10, 10);
    flake.addImage("1", flakeImg);
    flake.scale = 0.05;
    flake.velocityY = 2;
    flake.lifetime = 300;

  }

//  state = "snowing";

}
