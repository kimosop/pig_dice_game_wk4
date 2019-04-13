# The_Pig Dice_Game
[Kimosop Chepkoit] https://github.com/kimosop/pig_dice_game_wk4


## Description

This is a simple Two Player Dice Game where a player rolls the dice until they get a 1 or decide to press HOLD after which the next player gets a turn to roll the dice.

* If any player rolls a 1, they score 0 and it becomes the next player's turn.
* If the player rolls any other number, it is added to their turn total and the player's turn continues.
* If a player chooses to "HOLD", their Turn Total is added to their Total Score, and it becomes the next player's turn.

The first player to score 100 is the WINNER.

## Specs

 | Behavior                                       |  Input | Output    |
 | ---------------------------------------------- | ------ | --------- |
 | Player rolls die to get a random number    | Click button      | 5      |
 | When player rolls 1, turn is over and lose all current points from turn  | 1 | Hide player's buttons, show other player's buttons  |
 | When player rolls any other number add to turn total | 3     | 3  |
 | Player can end turn pressing "HOLD", and turn total is added to banked total        | 12      | 27         |
 | First player to reach 100, wins     | 9      | 100 - You win!       |

## Setup/Installation Requirements

* Open GIT BASH
* `git clone` this repository
* Open index.html file in a browser such as Google Chrome and enjoy the game


## Known Bugs
The Game Doesn't stop at 100 after someone wins. The players will have to refresh the page to start a new game.

## Technologies Used

* HTML
* CSS
* JavaScript
* jQuery
* Bootstrap

## Acknowledgments

* Moringa SFC Academy class

## License

This project is licensed under the MIT License
