var zenia, wall3 ;
var weight,speed;


function setup() {
  createCanvas(1600,400);
  
  zenia = createSprite(50,200,50,50);
  zenia.shapeColor = ("white");
  
  weight = random(400,1500);
  speed = random(55,90);
  
  zenia.velocityX = speed;

  wall3 = createSprite(1500,200,60,400) 
  wall3.shapeColor = ("grey");

  // Car Name Weight Speed Deformation Rating
  // Tourus 1522 50 84 A Cyclap 3000 45 134 B+
  // ● Any deformation greater than 180 is considered lethal for the passengers.
  // ● Any deformation between 80 and 180 is considered average.
  // ● Deformation below 80 is considered good.
  
  // Specific Tasks to complete the Project:
  // 1. The canvas is 1600 pixels wide and 400 pixels tall.
  // 2. Create a Car Object with a Weight and Speed Property.
  // 3. The car is white in color.
  // 4. Create a Wall which is as big as the height of the canvas and whose width is 60
  // pixels.
  // ● Keep this Wall at 1500 pixels distance from the left edge of the canvas.
  // ● Set the color of the Wall to color (80,80,80).
  // 5. Assign a random value to the Weight and Speed Property of the car.
  // ● Range of Weight is 400 to 1500
  // ● Range of Speed is 30 to 95.
  // 6. Collide this car with a stationary wall. The car will come to a halt as it hits the wall.
  // 7. Calculate the deformation for the car when it collides with the wall.
  // 8. When collision happens, based on deformation calculations determine the color of the
  // car as red, yellow or green.
  // Deformation Car Color Color Code
  // Less than 100 Green (0, 255, 0)
  // Between 100 and 180 Yellow (230, 230, 0)
  // Greater than 180 Red (255, 0, 0)


}

function draw() {
  background("black");  
 // Zenia 2260 60 180 D
 
  if(wall3.x-zenia.x <= wall3.width/2 + zenia.width/2){
  zenia.velocityX=0;
 var deformation = (0.5*weight*speed*speed)/22509;
  
 if(deformation<100){
 zenia.shapeColor = ("green");
}
 
if(deformation>100 && deformation<180) {
   zenia.shapeColor = ("yellow");
 }

 if(deformation>180){
   zenia.shapeColor = ("red")
 }
 }

 drawSprites();
}

