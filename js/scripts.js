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
var playerOne = new Player("");
var playerTwo = new Player("Player Two");


// Dice Constructor (dice sides = 6)
function Dice(sides) {
  this.sides = sides || 6;
}

// Roll Prototype - Gets a random number between 1 and 6
Dice.prototype.roll = function() {
  var roll = Math.floor((Math.random() * this.sides ) + 1);
  if (roll === 1) {
    alert("SORRY ! Umepata Moja. YOUR TURN IS OVER!!.");
  }
  return roll;
}

// Current Turn Array Prototype
Player.prototype.addRollToArray = function (x) {
  this.currentTurnArray.push(x)
}

// Get sum of Turn Total 1s are not included in the total)
Player.prototype.sumOfRolls = function() {
  for (var i = 0; i < this.currentTurnArray.length; i++) {
    if (this.currentTurnArray[i = this.currentTurnArray.length - 1] === 1) {
      this.turnRunningScore = this.turnRunningScore;
    } else {
      this.turnRunningScore += this.currentTurnArray[i = this.currentTurnArray.length - 1];
    }
  }
}
// Prototype to add points
Player.prototype.bankPoints = function() {
  this.totalBankedScore += this.turnRunningScore;
}

// Hold turnRunningScore, score will add when a user presses HOLD
Player.prototype.holdTurn = function () {
  this.bankPoints();
  this.turnRunningScore = 0;
}

// Create six-sided dice
var sixSidedDice = new Dice();

//Prototype to enter last roll value into player object
Player.prototype.setLastRoll = function(x) {
  this.lastRoll = x;
}

// Prototype to reset running total if 1 is rolled
Player.prototype.resetRunningTotalOnOne = function() {
  if (this.lastRoll === 1) {
    this.turnRunningScore = 0;
  }
}

//front end logic
$(function() {
  var playerOneTurn = true;

  //PLAYER A
  $("#player-one-roll").on("click", function() {
    var animationName = 'animated tada';
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $("#dice-pic").addClass(animationName).one(animationEnd, function() {
      $(this).removeClass(animationName);
    });
  });

//when player A presses Rolls Button
$("#player-one-roll").click(function(event) {
  event.preventDefault();
  var sixSidedDiceRoll = sixSidedDice.roll();
  playerOne.setLastRoll(sixSidedDiceRoll);
  playerOne.resetRunningTotalOnOne(sixSidedDiceRoll);
  playerOne.addRollToArray(sixSidedDiceRoll);
  playerOne.sumOfRolls();

  $("#player-one-running").html("<h1 class='running-total'>" + playerOne.turnRunningScore + "</h1>");
  //Change image based on dice roll, AND swith player turn
  if (sixSidedDiceRoll === 1) {
    $("#dice-pic").attr("src", "img/dice-six-faces-one.png");
    var playerOneTurn = false;
    if (!playerOneTurn) {
       $("#player-two-buttons").show();
       $("#player-one-buttons").hide();
    } else {
      $("#player-one-buttons").show();
      $("#player-two-buttons").hide();
    }
  } else if (sixSidedDiceRoll === 2) {
    $("#dice-pic").attr("src", "img/dice-six-faces-two.png");
  } else if (sixSidedDiceRoll === 3) {
    $("#dice-pic").attr("src", "img/dice-six-faces-three.png");
  } else if (sixSidedDiceRoll === 4) {
    $("#dice-pic").attr("src", "img/dice-six-faces-four.png");
  } else if (sixSidedDiceRoll === 5) {
    $("#dice-pic").attr("src", "img/dice-six-faces-five.png");
  } else if (sixSidedDiceRoll === 6) {
    $("#dice-pic").attr("src", "img/dice-six-faces-six.png");
  }
});

//Player One clicks HOLD Button
$("#player-one-hold").click(function(event) {
event.preventDefault();

playerOne.holdTurn();
$("#player-one-running").html("<h1 class='running-total'>" + playerOne.turnRunningScore + "</h1>");
$("#player-one-score").html("<h1 class='total-score'>" + playerOne.totalBankedScore + "</h1>");

if (playerOne.totalBankedScore >= 100) {
  $("#winner").show();
  $("#winner").html("<h1 class='total-score'>" + "Player A wins.Congratulations.Refresh Page to Start New Game!!!" + "</h1>");
} else {
  $("#winner").text("");
}

var playerOneTurn = false;

  if (!playerOneTurn) {
     $("#player-two-buttons").show();
     $("#player-one-buttons").hide();
  } else {

    $("#player-two-buttons").hide();
    $("#player-one-buttons").show();
  }
});

/// PLAYER TWO

//when player B presses Rolls Button 

$("#player-two-roll").click(function(event) {
  event.preventDefault();
  var sixSidedDiceRoll = sixSidedDice.roll();
  playerTwo.setLastRoll(sixSidedDiceRoll);
  playerTwo.resetRunningTotalOnOne(sixSidedDiceRoll);
  playerTwo.addRollToArray(sixSidedDiceRoll);
  playerTwo.sumOfRolls();

  $("#player-two-running").html("<h1 class='running-total'>" + playerTwo.turnRunningScore + "</h1>");

  //Change image based on dice roll, AND swith player turn
  if (sixSidedDiceRoll === 1) {
    $("#dice-pic").attr("src", "img/dice-six-faces-one.png");
    var playerOneTurn = true;
    if (playerOneTurn) {
       $("#player-one-buttons").show();
       $("#player-two-buttons").hide();
    } else {
      $("#player-two-buttons").show();
      $("#player-one-buttons").hide();
    }
  } else if (sixSidedDiceRoll === 2) {
    $("#dice-pic").attr("src", "img/dice-six-faces-two.png");
  } else if (sixSidedDiceRoll === 3) {
    $("#dice-pic").attr("src", "img/dice-six-faces-three.png");
  } else if (sixSidedDiceRoll === 4) {
    $("#dice-pic").attr("src", "img/dice-six-faces-four.png");
  } else if (sixSidedDiceRoll === 5) {
    $("#dice-pic").attr("src", "img/dice-six-faces-five.png");
  } else if (sixSidedDiceRoll === 6) {
    $("#dice-pic").attr("src", "img/dice-six-faces-six.png");
  }
});



//Player Two HOLD Button Click Event
$("#player-two-hold").click(function(event) {
event.preventDefault();

// What happens when a user clicks the HOLD button
playerTwo.holdTurn();
$("#player-two-running").html("<h1 class='running-total'>" + playerTwo.turnRunningScore + "</h1>");
$("#player-two-score").html("<h1 class='total-score'>" + playerTwo.totalBankedScore + "</h1>");

// if player B gets 100 first, they win
if (playerTwo.totalBankedScore >= 100) {
  $("#winner").show();
  $("#winner").html("<h1 class='total-score'>" + "Player B wins.Congratulations.Refresh Page to Start New Game!!!" + "</h1>");
} 
else {
  $("#winner").text("");
}

var playerOneTurn = true;

// Toggle between players
  if (playerOneTurn) {
     $("#player-one-buttons").show();
     $("#player-two-buttons").hide();
  } else {
    $("#player-two-buttons").show();
    $("#player-one-buttons").hide();
  }
});
});
