// THE RULES

// The goal of blackjack is to beat the dealer's hand without going over 21.
// Face cards are worth 10. Aces are worth 1 or 11, whichever makes a better hand.
// Each player starts with two cards, one of the dealer's cards is hidden until the end.
// To 'Hit' is to ask for another card. To 'Stand' is to hold your total and end your turn.
// If you go over 21 you bust, and the dealer wins regardless of the dealer's hand.
// If you are dealt 21 from the start (Ace & 10), you got a blackjack.
// Blackjack usually means you win 1.5 the amount of your bet. Depends on the casino.
// Dealer will hit until his/her cards total 17 or higher.
// Doubling is like a hit, only the bet is doubled and you only get one more card.
// Split can be done when you have two of the same card - the pair is split into two hands.
// Splitting also doubles the bet, because each new hand is worth the original bet.
// You can only double/split on the first move, or first move of a hand created by a split.
// You cannot play on two aces after they are split.
// You can double on a hand resulting from a split, tripling or quadrupling you bet.

//Game 1

//Player Purse = $100
//Place bet (1, 10, 25, 50) < Player Purse
//Card 2 - 9 equals card value
//Card 10 & Face cards = 10
//Ace = 1 or 11
//Dealer deals two cards to Player face up
//Dealer deals one card face up, one card face down to Dealer
//f dealer AND Player has 21, PUSH
//Else if Player has 21, Player Blackjack
//Else if Dealer has 21, Dealer wins

//Else
//Player hits or stands
//Ace = 11, unless Player Hand > 21
//Else Ace = 1
//If Player has 21, Player wins
//If Player has > 21, Dealer wins
//If Player Hand < 21
//Dealer Hits on 16, Stand's on 17
//If Player Hand > Dealer Hand, Player wins
//If Dealer Hand > Player Hand, Dealer wins
//If Player Hand = Dealer HanD, PUSH
//Player Bet +- to Player Purse
//If Player Purse = 0, Player Broke
//If player Purse > 1, 

//Game 2 Begins








// 1) Define the required variables used to track the state of the game:
  // None of these variables will need to hold a value when they are defined

	// 1.1) Use an array to represent the squares on the board.    

	// 1.2) Use a turn variable to track whose turn it is.

	// 1.3) Use a winner variable to represent three different game states:
	  // a player that won
	  // a tie has occured
	  // or a game that is still in play.

// 2) Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:
	
	// 2.1) Store the 9 elements that represent the squares on the page.
	  // You may want to give each square a class name in your HTML to make this easier!

	// 2.2) Store the element that displays the game status on the page.

// 3) Upon loading, the app should:

	// 3.1) Call an initialize function

	// 3.2) That initialize function should initialize the state variables:
	  // 3.2.1) Initialize the board array to 9 nulls to represent empty squares. 
	    // The 9 elements will "map" to each square.
	    // Index 0 represents the top-left square.
	    // Index 1 represents the top-middle square.
			// So on, continuing through the entire board until...
	    // Index 8 maps to the bottom-right square.
	  // 3.2.2) Initialize whose turn it is to 1 (player 'X'). 
	    // Player 'O' will be represented by -1.
	  // 3.2.3) Initialize the winner variable to null.
	    // This represents that there is no winner or tie yet. 
	    // The winner variable will hold the player value (1 or -1) if there's a winner. 
	    // The winner will hold a 'T' if there's a tie.
	  // 3.2.4) Render those state variables to the page by calling a render function.

	// 3.3) The render function should:
	  // 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration:
		  // 3.3.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array
		  // 3.3.1.2) Style that square however you wish dependant on the value contained in the current cell being iterated over (-1, 1, or null)
	  // 3.3.2) Render a message reflecting the currrent game state:
	    // 3.3.2.1) If winner has a value other than null (game still in progress), render whose turn it is.
	      // Hint: Maybe use a ternary inside of a template literal here?
	    // 3.3.2.2) If winner is equal to 'T' (tie), render a tie message.
	    // 3.3.2.3) Otherwise, render a congratulatory message to which player has won.
	      // Hint (again): Maybe use a ternary inside a template literal here

		// 3.4) After completing this step, you should be able to manually change the values held in the board array in the initialization function and see the style of the corresponding square change on your page.

// 4) Define the required constants:

	// 4.1) Define the 8 possible winning combinations as an array of arrays.
	  // Each array will contain three indexes of the board that make a winner if they hold the same player value. 
		// If you are having trouble with this step, feel free to check out the winningCombos array in the solution code. 

// 5) Next, the app should wait for the user to click a square and call a handleClick function
  // the handleClick function will...

	// 5.1) Obtain the index of the square that was clicked by:
	  // 5.1.1) "Extracting" the index from an id assigned to the element in the HTML 
		// Hint: Each id seems to correspond with an index in our board array. How could these be used if
		// we cleaned them up a bit?

	// 5.2) If the board has a value at the index, immediately return because that square is already taken.

	// 5.3) If winner is not null, immediately return because the game is over.

	// 5.4) Update the board array at the index with the value of turn.

	// 5.5) Change the turn by multiplying turn by -1 (this flips a 1 to -1, and vice-versa).

	// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	  // The getWinner function will...

	  // 5.6.1) There are a couple methods you can use to find out if there is a winner.
	   // This is the first, more elegant way that takes advantage of the winningCombos array you wrote above in step 4.
	   // The 5.6.2 step is a little simpler to comprehend, but you'll need to write a lot more code.
	   // The 5.6.2 step also won't take advantage of the winningCombos array, but using it as a reference will help you build a solution.
	   // Choose only one path.
		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.2) This solution is less elegant, but might be easier to write on your own if you're struggling with the 5.6.1.X pseudocode.
		  // 5.6.2.1) For each one of the winning combinations you wrote in step 4, find the total of each winning combination.
		  // 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
		  // 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.3) Next, If there's no winner, check if there's a tie:

		// 5.6.4) Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T".
	  
		// 5.6.5) Otherwise return null.

// 5.7) All state has been updated, so render the state to the page (step 3.3).

// 6) Handle a player clicking the replay button:

	// 6.1) Add a replay button to the HTML document

	// 6.2) Store the new replay button element

	// 6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render).
```