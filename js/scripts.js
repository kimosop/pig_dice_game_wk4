// Business logic

//Player Object Constructor (name)
function Player(name) {
  this.name = name;
  this.turnRunningScore = 0;
  this.totalBankedScore = 0;
  this.lastRoll = 0;
  this.currentTurnArray = [];
}

//Creates the two players
var playerOne = new Player("Player One");
var playerTwo = new Player("Player Two");


