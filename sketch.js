let  et;

let img; //here
let  txt;
let boolean = overButton = false;

var myboolean = backwards=false;
var timeLapse=400;
let timeTrack;
let i;

function preload() {
  txt = loadImage('TextoTecFXpng.png');
  et = loadImage('etFXpng.png');  // Load the image into the program
  et.resize(258, 458);
}

function setup() {
 createCanvas(windowWidth, windowHeight);
	



  //rect move
  img = createImage(200, 200);  // here
  for (int [i] = 0; i < img.pixels.length; i++) {  // here
   var a = map(i, 0, img.pixels.length, 255, 0); //here
    img.pixels[i] = color(255, 204); //here
  }

  //images

}



function draw() {
  background(0);  // total canva black



  // rect flahing/blinking

  let m = millis();
  fill(m % 200);              // velocity of flashs ** not working good ** maybe my computer..
  rect(25, 25, 555, 555, 30);

  image(et, 130, 125 );
  image(txt, 50, 40);


  image(img, mouseX-img.width/3, mouseY-img.height/3); // here

  //button link to web page

  if (overButton == true) {
    noStroke();
    fill(245,62,224);
  } else {
    noStroke();
    noFill();
  }

  circle(290, 230, 30);
}
function mouseClicked() {
  {
    window.open('https://www.youtube.com/playlist?list=PLLfjXK0h5ZJK01y34_ouFkU5wpFW5HyE7');
  }
}
function mouseMoved() {
  checkButtons();
}

function mouseDragged() {
  checkButtons();
}


function checkButtons() {
  if (mouseX > 200 && mouseX < 300 && mouseY > 200 && mouseY <300) {
    overButton = true;
  } else {
    overButton = false;
  }
}
