/*-------------------------------- Constants --------------------------------*/


/*---------------------------- Variables (state) ----------------------------*/
let deck = []
let playerHand = []
let dealerHand = []
let burnpile = []
let cardToRemove, cardPicked
let playerHandValue = 0
let dealerHandValue = 0


// function playerBank(bet) {
// 	if (bet.value > bank) {
// 		statusEL.innerText = "Not Enough $$$"
// 		console.log(playerBet)
// 	}

//Bet function
// const pElement = document.getElementById('bet-1')
// pElement.innerText = "$1"
// console.log
// function bet(){

// bank = bank - bet

// function bet () {
// let bet1El = document.getElementById("bet-1");
// bet.innerHTML = '$1';
// 	render();
// }
//Allows for bet buttons to add up in bet input field


/*------------------------ Cached Element References ------------------------*/
// const deckEl = document.getElementById('deck')
// const burnpileEl = document.getElementById('burnpile')
const statusEL = document.getElementById('status')
const bet1Btn = document.getElementById('bet-1')
const bet5Btn = document.getElementById('bet-5')
const bet25Btn = document.getElementById('bet-25')
const bet100Btn = document.getElementById('bet-100')
const dealBtn = document.getElementById('deal')
const resetBtn = document.getElementById('reset')
const hitBtn = document.getElementById('hit')
const standBtn = document.getElementById('stand')
const playerHandEl = document.getElementById('deal')
const bank = document.getElementById('playerBank')


/*----------------------------- Event Listeners -----------------------------*/
bet1Btn.addEventListener('click', () => {
	bet.innerText = "Bet $1"
  bank.innerText = `$${parseInt(bank.textContent) - parseInt(bet1Btn.value)}`
	statusEL.innerHTML = "Player Bet is $1, Press Deal"
	bet1Btn.remove(),bet5Btn.remove(),bet25Btn.remove(),bet100Btn.remove()
}) 

bet5Btn.addEventListener('click', () => {
	bet.innerText = "Bet $5"
	bank.innerText = `$${parseInt(bank.textContent) - parseInt(bet5Btn.value)}`
	statusEL.innerHTML = "Player Bet is $5, Press Deal"
	bet1Btn.remove(),bet5Btn.remove(),bet25Btn.remove(),bet100Btn.remove()
}) 

bet25Btn.addEventListener('click', () => {
	bet.innerText = "Bet $25"
  bank.innerText = `$${parseInt(bank.textContent) - parseInt(bet25Btn.value)}`
	statusEL.innerHTML = "Player Bet is $25, Press Deal"
	bet1Btn.remove(),bet5Btn.remove(),bet25Btn.remove(),bet100Btn.remove()
}) 

bet100Btn.addEventListener('click', () => {
	bet.innerText = "Bet $100"
	bank.innerText = `$${parseInt(bank.textContent) - parseInt(bet100Btn.value)}`
	statusEL.innerHTML = "Player Bet is $100, Press Deal"
	bet1Btn.remove(),bet5Btn.remove(),bet25Btn.remove(),bet100Btn.remove()
}) 


document.getElementById('hit').addEventListener('click', hit)
document.getElementById('stand').addEventListener('click', stand)
document.getElementById('deal').addEventListener('click', initialDeal)


// document.getElementById('reset').addEventListener('click', (evt)=> {
// 	bet.innerText = "Player Bet"
// 	bank.innerText = "Player Bank is = $500"
// 	statusEL.innerHTML = "Player Make Your Bet"
// })

/*-------------------------------- Functions --------------------------------*/
init()

// SIX DECKS
function init() {
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}




//Shuffle function
// deck1 = [...deck]
deck.sort(() => Math.random() - .5)
console.log(deck)


// // Function to handle a button click:
function handleClick() {
	if (deck.length > 0) {
    let randIdx = Math.floor(Math.random() * deck.length)
    let cardPicked = deck[randIdx]
    playerHand.push(cardPicked)
		console.log(playerHand)
    render(cardPicked)
	}
}	

function selectCard() {
	if (deck.length > 0) {
			let randIdx = Math.floor(Math.random() * deck.length)
			let cardPicked = deck[randIdx]
			deck.splice(randIdx, 1)			
			return cardPicked
		} else {
			return 
		}
	}
	
function dealToPlayer() {
	let playerCard = selectCard()
	playerHand.push(playerCard)
}
	
function dealToDealer(){
	let dealerCard = selectCard()
	dealerHand.push(dealerCard)
}

	
function initialDeal() {
	dealToPlayer() 
	dealToDealer()
	dealToPlayer() 
	dealToDealer()
	console.log(deck)
	console.log(playerHand)
	console.log(dealerHand)
}	

function checkHandVal(hand) {
	handVal = 0
	hand.forEach(card => {
		handVal += cardLookup(card)
	})
}
	
function cardLookup(card) {
  let cardValue;
  if (card === "dA" || card === "hA" || card ==="cA" || card === "sA"){
      cardValue = 11;
  }
  if (card === "dQ" || card === "hQ" || card === "cQ" || card === "sQ" ||
      card === "dK" || card === "hK" || card === "cK" || card === "sK" ||
      card === "dJ" || card === "hJ" || card === "cJ" || card === "sJ" ||
      card === "d10" || card === "h10" || card === "c10" || card === "s10"){
      cardValue = 10;
  }
  if (card === "d09" || card === "h09" || card ==="c09" || card === "s09"){
      cardValue = 9;
  }
  if (card === "d08" || card === "h08" || card ==="c08" || card === "s08"){
      cardValue = 8;
  }
  if (card === "d07" || card === "h07" || card ==="c07" || card === "s07"){
      cardValue = 7;
  }
  if (card === "d06" || card === "h06" || card ==="c06" || card === "s06"){
      cardValue = 6;
  }
  if (card === "d05" || card === "h05" || card ==="c05" || card === "s05"){
      cardValue = 5;
  }
  if (card === "d04" || card === "h04" || card ==="c04" || card === "s04"){
      cardValue = 4;
  }
  if (card === "d03" || card === "h03" || card ==="c03" || card === "s03"){
      cardValue = 3;
  }
  if (card === "d02" || card === "h02" || card ==="c02" || card === "s02"){
      cardValue = 2;
  }    
  return cardValue;
}
	
	// function hit(hand) {
	// 	hand.push(newCard)
	// 	checkHandVal()
	// }
	
function hit() {
	let playerCard = selectCard()
	playerHand.push(playerCard)
	console.log(deck)
	console.log(playerHand)
	//player loses		
}
	
function stand(){
	let dealerCard = selectCard()
	dealerHand.push(dealerCard) 
	// if(dealerHand < 17)
	console.log(dealerHand)
}
	
function getWinner(){
	console.log('get winner')
	if(playerHand === 21 && dealerHand === 21){
	statusEL.textContent = "Push"
	console.log('Push')
	} else if(playerHand === 21 && dealerHand !== 21){
		statusEL.textContent = "Player Wins!"
		console.log('Player Wins')
	} else if(playerHand !== 21 && dealerHand === 21){ 
		statusEL.textContent = "Dealer Wins"
		console.log('Dealer wins')
	} else if(playerHand > 21){
		statusEL.textContent = "Player Bust"
		console.log('Player Bust')
	}	else if(playerHand < 21 && dealerHand > 21){
		statusEL.textContent = "Player Wins!"
		console.log('Player wins')
		render()
	} 
}

// $$$$$$$$$        ACE LOGIC                   $$$$$$$$$$$$$$
//ACE =1
//if playerHand has < 2 ACE Card and playerHandValue is > 12, add 10
//if playerHand has 4 CARDS TOTAL 3 ACE & 8 = BLACKJACK


//Push cards to burnpile
// function gameOver {
// 	dealerHand.push(burnpile)
// 	playerHand.push(burnpile)
// }




// Function to render deck state
// function render(cardPicked) {
//   // console.log(cardPicked)
//   // Remove outline class when first card is picked
//   // playerHand.classList.remove('outline')
//   // Removes previous picked card from deck 2 class list
//   if (playerHand.length > 1) {
//     deck.classList.remove(cardToRemove)
//   }
//   // Store card to be removed next iteration
//   let cardToRemove = cardPicked  
//   // Add current card (class name) picked to deck 2 element
//   playerHandEl.classList.add(cardPicked)
//   // Adjust shadow when deck gets above/below halfway full
//   // Remove card back color and add outline when last card is picked
// }

// THE RULES



//Game 1

//Player Bank=  $500
//Bet reset to 0
//Place bet (1, 10, 25, 50) < Player Bank
//Card 2 - 9 equals card value

//Card 10 & Face cards = 10
//Ace = 11, unless Player Hand > 21
//then Ace = 1
//Dealer deals two cards to Player face up
//Dealer deals one card face up, one card face down to Dealer
//if dealer AND Player has 21, PUSH
//Else if Player has 21, Player Blackjack
//Else if Dealer has 21, Dealer wins



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

//Else
//Player hits or stands
//If Player has 21, Player wins
//If Player has > 21, Dealer wins
//If Player Hand < 21
//if stand dealer hits
//Dealer Hits on 16, Stand's on 17
//If Player Hand > Dealer Hand, Player wins
//If Dealer Hand > Player Hand, Dealer wins
//If Player Hand = Dealer HanDd, PUSH
//Player Bet +- to Player Bank
//If Player Bank = 0, Player Broke
//If player Bank > 1, 

//Game 2 Begins