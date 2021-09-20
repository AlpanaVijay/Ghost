var ghost
function setup() {
  createCanvas(600, 400);

   ghost = createSprite(200, 200,30,30);
}

function draw() {
  background("black");

  if(keyIsDown(LEFT_ARROW)){
    ghost.x = ghost.x - 3;
  }

  if(keyIsDown(RIGHT_ARROW)){
    ghost.x = ghost.x + 3;
  }

  if(keyIsDown(UP_ARROW)){
    ghost.y = ghost.y - 3;
  }

  if(keyIsDown(DOWN_ARROW)){
    ghost.y = ghost.y - 3;
  }
  drawSprites();
}