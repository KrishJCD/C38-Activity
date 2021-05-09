class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
      
    }
    /*car1=createSprite(100,600);
    car2=createSprite(300,600);
    car3=createSprite(500,600);
    car4=createSprite(700,600);
    car=[car1,car2,car3,car4];*/
  }

  play(){
    form.hide();
    textSize(30);
    var wei=displayWidth,hei=displayHeight;
    var ypos=600,xpos=100;
    text("Game Start", (displayWidth/2),(displayHeight/2)-240)
    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var display_position = hei/2 ;
      for(var plr in allPlayers){
        if (plr === "player" + player.index){
          fill("red");
          camera.position.x=700;
          camera.position.y=600;
        }
        else
          fill("black");

        display_position+=20;
        car=[createSprite(xpos,ypos)];
        xpos+=200;
        textSize(15);
        text(allPlayers[plr].name + ": " + allPlayers[plr].distance, wei/2,display_position-150)
      }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50;
      /*for(var i=car[3].x;i<=200;i-=5)
      {
        car[3].x=i;
      }*/
      player.update();
    }
  }
}
