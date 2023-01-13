var policia1, policia2, policia1Img, policia2Img;
var heart1,heart2,heart3,heart1Img, heart2Img, heart3Img;
var ladron,ladronImg;
var fondo,fondoImg;
var balas, balasImg;
var obstaculo, obstaculoImg;
var vida= 3;
var balas= 50;

function preload(){
  policia1Img= loadImage("assets/Policia1.png");
  policia2Img= loadImage("assets/Policia2.png");
  heart1Img = loadImage("assets/heart_1.png");
  heart2Img = loadImage("assets/heart_2.png");
  heart3Img = loadImage("assets/heart_3.png");
  ladronImg = loadImage("assets/L1.png");
  fondoImg = loadImage("assets/bg.png");
  balasImg = loadImage("assets/bala.png");
  obstaculoImg = loadImage("assets/conos.png");
}

function setup() {
  //createSprite(400, 200, 50, 50);
  //Para que se acomode a la ventana
  createCanvas(windowWidth, windowHeight); //800,400

  fondo = createSprite(displayWidth/2-10, displayHeight/5+200); //para pantallas táctiles
  fondo.addImage(fondoImg);
  fondo.scale = 1;

  policia1 = createSprite(displayWidth-1580, displayHeight-430);
  policia1.addImage(policia1Img);
  policia1.scale = 0.6;

  ladron = createSprite(displayWidth-1000, displayHeight-415)
  ladron.addImage(ladronImg);
  ladron.scale = 0.7;

  //Izquierda = Entre mayor sea el número     Arriba = Menor sea el número
  heart1 = createSprite(displayWidth-550,60); 
  heart1.addImage(heart1Img);
  heart1.scale = 0.3;
  //heart1.visible = false;
  heart2 = createSprite(displayWidth-520,60);
  heart2.addImage(heart2Img);
  heart2.scale = 0.3;
  //heart2.visible = false;
  heart3 = createSprite(displayWidth-490,60);
  heart3.addImage(heart3Img);
  heart3.scale = 0.3;

  balasGroup = new Group();
  obstaculosGroup = new Group();
}

function draw() {
  background(0);  

  //if(keyDown("RIGHT_ARROW")){
    //policia1.velocityX = 6;
  //}

  if(keyDown("UP_ARROW")){
    policia1.velocityY = -2;
  }

  if(keyDown("DOWN_ARROW")){
    policia1.velocityY = 2;
  }

  if(keyWentDown("space")){ //Cambio de imágen del policía
    balass = createSprite(displayWidth-1780, policia1.y-90);
    balass.velocityX = 3;
    balass.scale = 0.07;
    balass.addImage(balasImg);
    //balasGroup.add(balasImg);
    //balas = balas-1;
    policia2 = createSprite(displayWidth-1750, displayHeight-430);
    policia2.addImage(policia2Img);
    policia2.scale = 0.4;
    policia1.visible = false;
  }
  else if(keyWentUp("enter")){ //El policia vuelva a su posición inicial
    //policia2.addImage(policia1Img);
    policia1 = createSprite(displayWidth-1580, displayHeight-430);
    policia1.addImage(policia1Img);
    policia1.scale = 0.6;
    policia2.visible = false;
    balass.visible = false;
  }
  drawSprites();
}