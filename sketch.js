//Create variables here
var dog,dog1,happyDog,database,foodS,foodStock;


function preload()
{
  dog1 = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
  bg = loadImage("bg.jpeg")
 //mam my code is workiing properly but what I should do so that my that problem which is of thta when the food is 0 and we click on
 //up key so it again start from 20 so what code should be there to stop it.

	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,300,0,0)
  dog.addImage(dog1)
  dog.scale = 0.5
  
  database = firebase.database()
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(bg)
  
  drawSprites();
  //add styles here
  if(foodS!== undefined){
    textSize(20)
    fill(255)
    text("Note: Press Up ARROW to feed DRAGO milk",50,50)
    text("Food Remaining :"+foodS,120,120)
    
      }
  //now check    
  // this prb is there
}
function keyPressed(){
  if(keyCode === 38){

    writeStock(foodS);
    dog.addImage(happyDog);

  }
//this was prb  
//ok mam I go t

  
}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

// yes mam working now thank you



