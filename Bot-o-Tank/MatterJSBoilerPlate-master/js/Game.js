class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        });
    }

    update(state){
        database.ref('/').update({
            gameState : state
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

        tank1 = createSprite(200, 100, 20, 20);
        tank1.addImage("tank1", tank1I);
        tank1.scale = 0.2;

        tank2 = createSprite(400, 100, 20, 20);
        tank2.addImage("tank2", tank2I);
        tank2.scale = 0.2;

        tank3 = createSprite(600, 100, 20, 20);
        tank3.addImage("tank3", tank3I);
        tank3.scale = 0.2;

        tank4 = createSprite(800, 100, 20, 20);
        tank4.addImage("tank4", tank4I);
        tank4.scale = 0.2;

        tanks = [tank1, tank2, tank3, tank4];
      }


      play(){
        form.hide();
        Player.getPlayerInfo();
    
        if(allPlayers !== undefined){
          //var display_position = 130;
          background("white");
          image(bg, 0, displayHeight, displayWidth, displayHeight);
          var index = 0;
          var x = 100;
          var y;
          
          for(var plr in allPlayers){

            index = index+1;
			x = x + 100;
			//y = displayHeight - allPlayers[plr].distance;

			tanks[index - 1].x = x;
			tanks[index - 1].y = y;

			if(index === player.index){
        stroke(10);
        fill("green");
        ellipse(x, y, 60, 60);
		tanks[index - 1].shapeColor = "Black";
        camera.position.x = tanks[index - 1].x;
        camera.position.y = tanks[index - 1].y;
			}
        }
        
       
	
		}
		if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance +=50
            player.update();
          }
    
	
		drawSprites()
	}
    end(){
      console.log("game ended");
      console.log(player.rank);
    }
}
