var database;
var gameState = 0;
var playerCount;
var form, game, player;
var allPlayers;

var tank1, tank2, tank3, tank4
var tanks;
var tank1I, tank2I, tank3I, tank4I, bg;

function preload(){
	tank1I = loadImage("Images/bTank.png");
	tank2I = loadImage("Images/gTank.png");
	tank3I = loadImage("Images/rTank.png");
	tank4I = loadImage("Images/yTank.png");
	bg = loadImage("Images/gbg.jpg");
}

function setup(){
  createCanvas(displayWidth - 80, displayHeight - 80);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  background("White");

  if(playerCount === 4){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2){
	  game.end();
	  game.update(2);
  }
}