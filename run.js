//this the file that will unite the different parts of program
//write only essential code in here
// loadAnimation, .addAnimation
//loadImage, .addImage
//loadSound
//createSprite, drawSprites();,  background("black");, createCanvas(600,500);

var player_standing;
var player_running;



var Player = new CHARACTER(200,200,15,15,Player);  
var ground = new PLATFORM(200,300,800,50)


function preload()
{

} 

function setup()
{
    createCanvas(800,800);
    Player.birth();
////////////////////////////////////////////////////////////////////////////
//                  (making groundd and making it move)
    ground.platform_SPAWN();
    ground.x = ground.width/2;
    ground.velocityX = -4;
}
//                       (end)
////////////////////////////////////////////////////////////////////////////

function draw()
{
    background("black")
    drawSprites();

//////////////////////////////////////////////////////////////
//     (Part responsible for controling the character && and the effect of the gravity)
    if(keyDown("space"))
    {
        Player.velocityY = -12;
    }
    
    //add gravity
    Player.velocityY = Player.velocityY + 0.8
//               (end)
////////////////////////////////////////////////////////////////////


    if(ground.x<0)
    {
        ground.x = ground.width/2;
    }


    Player.collide(ground);
}