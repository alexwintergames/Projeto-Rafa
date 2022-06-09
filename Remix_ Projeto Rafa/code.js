var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["647d900e-010c-4a13-a1b8-263a4f4f4b27","558369d8-e885-43cf-84d5-db5edcc85fea","ba6c3efc-98bc-405a-a5aa-bb8724f14b84","58ad94bf-cd58-4cfc-94a8-ed43e618a1c6"],"propsByKey":{"647d900e-010c-4a13-a1b8-263a4f4f4b27":{"name":"cena","sourceUrl":"assets/api/v1/animation-library/gamelab/0lJRolplCuorhSLCzhMPFOv9p2UaT61B/category_backgrounds/gradient_17.png","frameSize":{"x":400,"y":330},"frameCount":1,"looping":true,"frameDelay":2,"version":"0lJRolplCuorhSLCzhMPFOv9p2UaT61B","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":330},"rootRelativePath":"assets/api/v1/animation-library/gamelab/0lJRolplCuorhSLCzhMPFOv9p2UaT61B/category_backgrounds/gradient_17.png"},"558369d8-e885-43cf-84d5-db5edcc85fea":{"name":"dong","sourceUrl":null,"frameSize":{"x":22,"y":19},"frameCount":1,"looping":true,"frameDelay":12,"version":"BS7.nVeUl77DK1DYr_uYi_HzMLzcwWu6","loadedFromSource":true,"saved":true,"sourceSize":{"x":22,"y":19},"rootRelativePath":"assets/558369d8-e885-43cf-84d5-db5edcc85fea.png"},"ba6c3efc-98bc-405a-a5aa-bb8724f14b84":{"name":"coin","sourceUrl":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pUFPchUgZRoy5C6YtEEkLfSDmZWPxW.y/category_board_games_and_cards/coin_gold.png"},"58ad94bf-cd58-4cfc-94a8-ed43e618a1c6":{"name":"rafa","sourceUrl":"assets/api/v1/animation-library/gamelab/m6a1aDb8U5jYJvQQt8j5AO6b95V53WcC/category_animals/animalhead_horse.png","frameSize":{"x":326,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"m6a1aDb8U5jYJvQQt8j5AO6b95V53WcC","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":326,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/m6a1aDb8U5jYJvQQt8j5AO6b95V53WcC/category_animals/animalhead_horse.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var rafa;
var dong1, dong2, dong3, dong4, dong5, dong6, dong7, dong8;
var start;
var finish;
var scene;
var count = 0;
var score = 0;
var tempo = 0;

// Cenário

scene=createSprite(200,200);
scene.setAnimation("cena");
scene.scale=2;

// Início

start=createSprite(40,124,50,50);
start.shapeColor = "cyan";

// Final

finish=createSprite(360,124,50,50);
finish.shapeColor = "yellow";

// Parede

var wall1=createSprite(40,100,50,5);
wall1.shapeColor = "black";

var wall2=createSprite(65,125,5,50);
wall2.shapeColor = "black";

var wall3=createSprite(15,240,5,280);
wall3.shapeColor = "black";

var wall4=createSprite(115,150,100,5);
wall4.shapeColor = "black";

var wall5=createSprite(165,235,5,170);
wall5.shapeColor = "black";

var wall6=createSprite(200,320,70,5);
wall6.shapeColor = "black";

var wall7=createSprite(200,380,370,5);
wall7.shapeColor = "black";

var wall8=createSprite(235,235,5,170);
wall8.shapeColor = "black";

var wall9=createSprite(285,150,100,5);
wall9.shapeColor = "black";

var wall10=createSprite(385,240,5,280);
wall10.shapeColor = "black";

var wall11=createSprite(335,125,5,50);
wall11.shapeColor = "black";

var wall12=createSprite(360,100,50,5);
wall12.shapeColor = "black";

// Dong

dong1=createSprite(88,188);
dong1.setAnimation("dong");
dong1.scale=1.3;
dong1.velocityX = 5.9;

dong2=createSprite(88,235);
dong2.setAnimation("dong");
dong2.scale=1.3;
dong2.velocityX = -5.9;

dong3=createSprite(88,282);
dong3.setAnimation("dong");
dong3.scale=1.3;
dong3.velocityX = 5.9;

dong4=createSprite(200,335);
dong4.setAnimation("dong");
dong4.scale=1.1;
dong4.velocityX = -8.5;

dong5=createSprite(200,362);
dong5.setAnimation("dong");
dong5.scale=1.1;
dong5.velocityX = 8;

dong6=createSprite(312,188);
dong6.setAnimation("dong");
dong6.scale=1.3;
dong6.velocityX = -5.9;

dong7=createSprite(312,235);
dong7.setAnimation("dong");
dong7.scale=1.3;
dong7.velocityX = 5.9;

dong8=createSprite(312,282);
dong8.setAnimation("dong");
dong8.scale=1.3;
dong8.velocityX = -5.9;

createEdgeSprites();

// Moedas



// Rafa

rafa=createSprite(40,125);
rafa.setAnimation("rafa");
rafa.scale=0.05;

rotateSprite(dong1);

function rotateSprite(dong1){
  dong1.rotation = dong1.rotation +5;
  dong2.rotation = dong2.rotation +5;
  dong3.rotation = dong3.rotation +5;
  dong4.rotation = dong4.rotation +5;
  dong5.rotation = dong5.rotation +5;
  dong6.rotation = dong6.rotation +5;
  dong7.rotation = dong7.rotation +5;
  dong8.rotation = dong8.rotation +5;
}

function draw() {
  drawSprites();
  rotateSprite(dong1);
  
  text ("Tempo: "+tempo,172,120);
  text ("Vitórias: "+score,20,40);
  text ("Mortes: "+count,20,20);
  text ("Version 1.4v",8,394);
  
  tempo = tempo+0.03;
  
  
  if(keyDown("RIGHT_ARROW")){
    rafa.x = rafa.x + 2.5;
  }
  if(keyDown("LEFT_ARROW")){
    rafa.x = rafa.x - 2.5;
  }
  if (keyDown("UP_ARROW")){
    rafa.y = rafa.y - 2.5;
  }
  if (keyDown("DOWN_ARROW")){
    rafa.y = rafa.y + 2.5;
  }
  
  if(rafa.isTouching(finish))
  {
    rafa.x = 40;
    rafa.y = 125;
    playSound("assets/category_achievements/lighthearted_bonus_objective_3.mp3", false);
    score = score+1;
    
  }
  
  rafa.bounceOff(wall1);
  rafa.bounceOff(wall2);
  rafa.bounceOff(wall3);
  rafa.bounceOff(wall4);
  rafa.bounceOff(wall5);
  rafa.bounceOff(wall6);
  rafa.bounceOff(wall7);
  rafa.bounceOff(wall8);
  rafa.bounceOff(wall9);
  rafa.bounceOff(wall10);
  rafa.bounceOff(wall11);
  rafa.bounceOff(wall12);
  
  dong1.bounceOff(wall1);
  dong1.bounceOff(wall2);
  dong1.bounceOff(wall3);
  dong1.bounceOff(wall4);
  dong1.bounceOff(wall5);
  dong1.bounceOff(wall6);
  dong1.bounceOff(wall7);
  dong1.bounceOff(wall8);
  dong1.bounceOff(wall9);
  dong1.bounceOff(wall10);
  dong1.bounceOff(wall11);
  dong1.bounceOff(wall12);
  
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2);
  dong2.bounceOff(wall3);
  dong2.bounceOff(wall4);
  dong2.bounceOff(wall5);
  dong2.bounceOff(wall6);
  dong2.bounceOff(wall7);
  dong2.bounceOff(wall8);
  dong2.bounceOff(wall9);
  dong2.bounceOff(wall10);
  dong2.bounceOff(wall11);
  dong2.bounceOff(wall12);
  
  dong3.bounceOff(wall1);
  dong3.bounceOff(wall2);
  dong3.bounceOff(wall3);
  dong3.bounceOff(wall4);
  dong3.bounceOff(wall5);
  dong3.bounceOff(wall6);
  dong3.bounceOff(wall7);
  dong3.bounceOff(wall8);
  dong3.bounceOff(wall9);
  dong3.bounceOff(wall10);
  dong3.bounceOff(wall11);
  dong3.bounceOff(wall12);
  
  dong4.bounceOff(wall1);
  dong4.bounceOff(wall2);
  dong4.bounceOff(wall3);
  dong4.bounceOff(wall4);
  dong4.bounceOff(wall5);
  dong4.bounceOff(wall6);
  dong4.bounceOff(wall7);
  dong4.bounceOff(wall8);
  dong4.bounceOff(wall9);
  dong4.bounceOff(wall10);
  dong4.bounceOff(wall11);
  dong4.bounceOff(wall12);
  
  dong5.bounceOff(wall1);
  dong5.bounceOff(wall2);
  dong5.bounceOff(wall3);
  dong5.bounceOff(wall4);
  dong5.bounceOff(wall5);
  dong5.bounceOff(wall6);
  dong5.bounceOff(wall7);
  dong5.bounceOff(wall8);
  dong5.bounceOff(wall9);
  dong5.bounceOff(wall10);
  dong5.bounceOff(wall11);
  dong5.bounceOff(wall12);
  
  dong6.bounceOff(wall1);
  dong6.bounceOff(wall2);
  dong6.bounceOff(wall3);
  dong6.bounceOff(wall4);
  dong6.bounceOff(wall5);
  dong6.bounceOff(wall6);
  dong6.bounceOff(wall7);
  dong6.bounceOff(wall8);
  dong6.bounceOff(wall9);
  dong6.bounceOff(wall10);
  dong6.bounceOff(wall11);
  dong6.bounceOff(wall12);
  
  dong7.bounceOff(wall1);
  dong7.bounceOff(wall2);
  dong7.bounceOff(wall3);
  dong7.bounceOff(wall4);
  dong7.bounceOff(wall5);
  dong7.bounceOff(wall6);
  dong7.bounceOff(wall7);
  dong7.bounceOff(wall8);
  dong7.bounceOff(wall9);
  dong7.bounceOff(wall10);
  dong7.bounceOff(wall11);
  dong7.bounceOff(wall12);
  
  dong8.bounceOff(wall1);
  dong8.bounceOff(wall2);
  dong8.bounceOff(wall3);
  dong8.bounceOff(wall4);
  dong8.bounceOff(wall5);
  dong8.bounceOff(wall6);
  dong8.bounceOff(wall7);
  dong8.bounceOff(wall8);
  dong8.bounceOff(wall9);
  dong8.bounceOff(wall10);
  dong8.bounceOff(wall11);
  dong8.bounceOff(wall12);
  
  if(rafa.isTouching(dong1)||
     rafa.isTouching(dong2)||
     rafa.isTouching(dong3)||
     rafa.isTouching(dong4)||
     rafa.isTouching(dong5)||
     rafa.isTouching(dong6)||
     rafa.isTouching(dong7)||
     rafa.isTouching(dong8))
  {
     rafa.x = 40;
     rafa.y = 125;
     count = count + 1;
     playSound("assets/category_female_voiceover/you_lose_female.mp3", false);
  }
  
  if(count>=150){
    if(keyDown("RIGHT_ARROW")){
    rafa.x = rafa.x + 5;
  }
  if(keyDown("LEFT_ARROW")){
    rafa.x = rafa.x - 5;
  }
  if (keyDown("UP_ARROW")){
    rafa.y = rafa.y - 5;
  }
  if (keyDown("DOWN_ARROW")){
    rafa.y = rafa.y + 5;
  }
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
