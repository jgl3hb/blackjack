/*-------------------------------- Constants --------------------------------*/
const cardValues = {
  "dA": 1, "dK": 10, "dQ": 10, "dJ": 10, "d10": 10, "d09": 9, "d08": 8, "d07":7,"d06": 6, "d05": 5,"d04": 4,"d03": 3, "d02": 2, "hA": 1, "hK": 10, "hQ": 10, "hJ": 10, "h10": 10, "h09": 9, "h08": 8, "h07": 7, "h06": 6, "h05": 5, "h04": 4, "h03": 3, "h02": 2, "cA": 1, "cK": 10, "cQ": 10, "cJ": 10, "c10": 10, "c09": 9, "c08": 8, "c07": 7, "c06": 6, "c05": 5, "c04": 4, "c03": 3, "c02": 2, "sA": 1, "sK": 10, "sQ": 10, "sJ": 10, "s10": 10, "s09": 9, "s08": 8, "s07": 7, "s06": 6,"s05": 5, "s04": 4, "s03": 3, "s02": 2
}


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


/*------------------------ Cached Element References ------------------------*/
// const deckEl = document.getElementById('deck')
// const burnpileEl = document.getElementById('burnpile')
const statusEL = document.getElementById('status')
const bet1Btn = document.getElementById('bet-1')
const bet5Btn = document.getElementById('bet-5')
const bet25Btn = document.getElementById('bet-25')
const bet100Btn = document.getElementById('bet-100')
const dealBtn = document.getElementById('deal')
const resetEl = document.getElementById('reset')
const hitBtn = document.getElementById('hit')
const standBtn = document.getElementById('stand')
const playerHandEl = document.getElementById('deal')
const bank = document.getElementById('playerBank')


/*----------------------------- Event Listeners -----------------------------*/
bet1Btn.addEventListener('click', () => {
	bet.innerText = "Bet $1"
  bank.innerText = parseInt(bank.textContent) - parseInt(bet1Btn.value)
	statusEL.innerHTML = "Player Bet is $1, Press Deal"
	bet1Btn.remove(),bet5Btn.remove(),bet25Btn.remove(),bet100Btn.remove()
}) 

bet5Btn.addEventListener('click', () => {
	bet.innerText = "Bet $5"
  bank.innerText = parseInt(bank.textContent) - parseInt(bet5Btn.value)
	statusEL.innerHTML = "Player Bet is $5, Press Deal"
	bet1Btn.remove(),bet5Btn.remove(),bet25Btn.remove(),bet100Btn.remove()
}) 

bet25Btn.addEventListener('click', () => {
	bet.innerText = "Bet $25"
  bank.innerText = parseInt(bank.textContent) - parseInt(bet25Btn.value)
	statusEL.innerHTML = "Player Bet is $25, Press Deal"
	bet1Btn.remove(),bet5Btn.remove(),bet25Btn.remove(),bet100Btn.remove()
}) 

bet100Btn.addEventListener('click', () => {
	bet.innerText = "Bet $100"
  bank.innerText = parseInt(bank.textContent) - parseInt(bet100Btn.value)
	statusEL.innerHTML = "Player Bet is $100, Press Deal"
	bet1Btn.remove(),bet5Btn.remove(),bet25Btn.remove(),bet100Btn.remove()
}) 

// bet1Btn.addEventListener('click', (evt)=> {
// 	bet.innerText = "Bet $1"
// 	bank.innerText = "Player Bank is $499" - bet
// 	statusEL.innerHTML = "Player Bet is $1, Press Deal"
// })
// bet5Btn.addEventListener('click', (evt)=> {
// 	bet.innerText = "Bet $5"
// 	bank.innerText = "Player Bank is $495" - bet
// 	statusEL.innerHTML = "Player Bet is $5, Press Deal"
// })
// bet25Btn.addEventListener('click', (evt)=> {
// 	bet.innerText = "Bet $25"
// 	bank.innerText = "Player Bank is = $475"
// 	statusEL.innerHTML = "Player Bet is $25, Press Deal"
// })
// bet100Btn.addEventListener('click', (evt)=> {
// 	bet.innerText = "Bet $100"
// 	bank.innerText = "Player Bank is = $400" - bet
// 	statusEL.innerHTML = "Player Bet is $100, Press Deal"
// })

document.getElementById('hit').addEventListener('click', hit)

document.getElementById('stand').addEventListener('click', stand)

document.getElementById('deal').addEventListener('click', initialDeal)

document.getElementById('reset').addEventListener('click', (evt)=> {
	bet.innerText = "Player Bet"
	bank.innerText = "Player Bank is = $500"
	statusEL.innerHTML = "Player Make Your Bet"
})

/*-------------------------------- Functions --------------------------------*/
init()

// SIX DECKS
function init() {
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}

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
// 	// iterate thru cardValues
// if playerCard === cardValues[i]
// 	// take object value of suit, 
// 	// save object to a variable
// 	// add variable to playerHandValue
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

// function getWinner(){
// 	console.log('get winner')
// 	if(playerHand === 21 && dealerHand === 21){
// 		statusEL.textContent = "Push"
// 		console.log('Push')
// 	} else if(playerHand === 21 && dealerHand !== 21){
// 		statusEL.textContent = "Player Wins!"
// 		console.log('Player Wins')
// 	} else if(playerHand !== 21 && dealerHand === 21){ 
// 		statusEL.textContent = "Dealer Wins"
// 		console.log('Dealer wins')
// 	} else if(playerHand > 21){
// 		statusEL.textContent = "Player Bust"
// 		console.log('Player Bust')
// 	}	else if(playerHand < 21 && dealerHand > 21){
// 		statusEL.textContent = "Player Wins!"
// 		console.log('Player wins')
// 		render()
// 		} 
// 	}


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

//Push cards to burnpile
// function gameOver {
// 	dealerHand.push(burnpile)
// 	playerHand.push(burnpile)
// }

// $$$$$$$$$        ACE LOGIC                   $$$$$$$$$$$$$$
//ACE =1
//if playerHand has < 2 ACE Card and playerHandValue is > 12, add 10
//if playerHand has 4 CARDS TOTAL 3 ACE & 8 = BLACKJACK



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