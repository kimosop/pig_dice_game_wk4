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


// Dice Constructor (dice sides = 6)
function Dice(sides) {
  this.sides = sides || 6;
}

// Roll Prototype - Gets a random number between 1 and 6
Dice.prototype.roll = function() {
  var roll = Math.floor((Math.random() * this.sides ) + 1);
  if (roll === 1) {
    alert("Pole ! You rolled a 1. Your turn is over.");
  }
  return roll;
}

