Blackjack

Play My Game: https://jgl3hb.github.io/blackjack/

<img src="https://i.imgur.com/0sB3Em4.jpg"  width="720" height="480">

Technologies Used: 
HTML, CSS, Javascript, Bootstrap

Objective:
Create a browser-based game that models a casino quality game of blackjack

I learned how to play Blackjack as a kid on this retro Radio Shack calculator.

<img src="https://1.bp.blogspot.com/-6gKQPJl6TqE/YAzriwHXq2I/AAAAAAAAILU/k7KYtFOk1QQOA4rc64Cy-axBgoFemSFowCLcBGAsYHQ/s2048/0122212058c.jpg"  width="32" height="32">


Blackjack is popular because unlike Roulette or other casino games, there is skill involved and if you're good at math, you can tilt the odds in your favor.


Wireframe Link
https://wireframe.cc/f1nkq5


My game table IMG URL Attribution

https://us.123rf.com/450wm/yamabikay/yamabikay1706/yamabikay170600015/79675835-green-felt-fabric-for-background-seamless-square-texture-tile-ready-high-resolution-photo-.jpg?ver=6

<img src="https://us.123rf.com/450wm/yamabikay/yamabikay1706/yamabikay170600015/79675835-green-felt-fabric-for-background-seamless-square-texture-tile-ready-high-resolution-photo-.jpg?ver=6"  width="480" height="480">


Favicon Attribution
<img src="https://static.thenounproject.com/png/1047490-200.png"  width="720" height="480">


Pseudocode

Player Bank=  $500
Bet reset to 0
Place bet (1, 5, 25, 100) < Player Bank
Card 2 - 9 equals card value

Card 10 & Face cards = 10
Ace = 11, unless Player Hand > 21
then Ace = 1
Dealer deals two cards to Player face up
Dealer deals one card face up, one card face down to Dealer
if dealer AND Player has 21, PUSH
Else if Player has 21, Player Blackjack
Else if Dealer has 21, Dealer wins

Else
Player hits or stands
If Player has 21, Player wins
If Player has > 21, Dealer wins
If Player Hand < 21
if stand dealer hits
Dealer Hits on 16, Stand's on 17
If Player Hand > Dealer Hand, Player wins
If Dealer Hand > Player Hand, Dealer wins
If Player Hand = Dealer HanDd, PUSH
Player Bet +- to Player Bank
If Player Bank = 0, Player Broke
If player Bank > 1, 


If you go over 21 you bust, and the dealer wins regardless of the dealer's hand.
If you are dealt 21 from the start (Ace & 10), you got a blackjack.
Blackjack usually means you win 1.5 the amount of your bet. Depends on the casino.
Dealer will hit until his/her cards total 17 or higher.

MVP

Player should be able to make a bet
Dealer will deal cards
Player can hit or stand if no blackjack on deal
Dealer should draw a card on 16 or 17 (if Dealer has Ace)
Whoever has hand closest to 21 or 21 without going over, wins
Bank should add or subtract bet amount based on player win/loss
Game 2 starts with player betting again


Stretch Goals
Ace Logic
Add Split and Double components
