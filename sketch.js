//Create variables here
var dog,dog1,happyDog,database,foodS,foodStock;

function preload()
{
  dog1 = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
  bg = loadImage("bg.jpeg")

	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,300,0,0)
  dog.scale = 0.5
  dog.addImage(dog1)
  database = firebase.database()
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(bg)
  if(foodS!== undefined){
textSize(20)
fill(255)
text("Note: Press Up ARROW to feed DRAGO milk",50,50)
text("Food Remaining :"+foodS,120,120)
  }
  drawSprites();
  //add styles here

}
function keyPressed(){
  if(keyCode === 38){

    writeStock(foodS);
    dog.addImage(happyDog);

  }

  if(foodS ===0){
    foodS =20
  }
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



