/*----------------Variables----------------------------*/
let deck = []
let playerHand = []
let dealerHand = []
let burnpile = []
let cardToRemove, cardPicked

<<<<<<< HEAD
/*----------------Constants----------------------------*/
=======

>>>>>>> bab6e980536b9e935de2bcba1629c45c67695552
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
const playerTotalEl = document.getElementById('playerhandvalue')
const dealerTotalEl = document.getElementById('dealerhandvalue')
const playerDeckEl = document.getElementById('player-cards')
const dealerDeckEl = document.getElementById('dealer-cards')

/*----------------Event Listeners----------------------------*/
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

<<<<<<< HEAD
dealBtn.addEventListener('click', () => {
	dealBtn.remove();
}) 
=======
//remove Deal button
// dealBtn.addEventListener('click', () => {
// 	dealBtn.remove()
// })

>>>>>>> bab6e980536b9e935de2bcba1629c45c67695552

document.getElementById('hit').addEventListener('click', hit)
document.getElementById('stand').addEventListener('click', stand)
document.getElementById('deal').addEventListener('click', initialDeal)


/*----------------Functions----------------------------*/
init()
//Initializes Deck
function init() {
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}
// Assigns Card Values
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

// render card class names to divs
function renderCards() {
	dealerDeckEl.innerHTML = ''
	playerDeckEl.innerHTML = ''
	playerHand.forEach(card => {
		let newCardDiv = document.createElement('div')
		newCardDiv.className = `card large ${card}`
		playerDeckEl.appendChild(newCardDiv)
	})
	dealerHand.forEach((card, idx) => {
		if (idx > 0) {
			let newCardDiv = document.createElement('div')
			newCardDiv.className = `card large back-red`
		dealerDeckEl.appendChild(newCardDiv)			
		} else {			
			let newCardDiv = document.createElement('div')
			newCardDiv.className = `card large ${card}`
			dealerDeckEl.appendChild(newCardDiv)
		}
	})
}

function displayDealerCards(){
	dealerDeckEl.innerHTML = ''
	dealerHand.forEach((card, idx) => {
		let newCardDiv = document.createElement('div')
		newCardDiv.className = `card large ${card}`
		dealerDeckEl.appendChild(newCardDiv)
	})
}

deck.sort(() => Math.random() - .5)

function handleClick() {
	if (deck.length > 0) {
    let randIdx = Math.floor(Math.random() * deck.length)
    let cardPicked = deck[randIdx]
    playerHand.push(cardPicked)
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

function computeHandTotal(hand) {
	let total = 0
	hand.forEach(card => {
		total += cardLookup(card)
	})
	return total
}

function initialDeal() {
	dealToPlayer() 
	dealToDealer()
	dealToPlayer() 
	dealToDealer()
	let playerScore = computeHandTotal(playerHand)
	let dealerScore = computeHandTotal(dealerHand)
	renderCards()
	renderBlackjack()
}	

function hit() {
	let playerCard = selectCard()
	playerHand.push(playerCard)
	renderCards()	
	checkHands()
	renderBlackjack()
}

// function aceEqualsOne() {
// 	console.log("hit")
// 	let ace = ("dA", "hA", "cA", "sA")
// 	if (playerScore > 21 && playerHand.includes(ace)) {
// 	returnplayerScore -= 10		
// 	}
// 	checkHands()
// 	renderCards()	
// 	renderBlackjack()
// 	renderWin()
// }

// function checkHands() {
// 	let playerScore = computeHandTotal(playerHand)
// 	let dealerScore = computeHandTotal(dealerHand)
// 	if (playerScore > 21 && playerHand.includes((card === "dA" || card === "hA" || card ==="cA" || card === "sA"))) {
// 		playerScore -= 10		
// 	} else {
// 		(playerScore > 21);
// 		renderPlayerBust()		
// 	}  
// 	}

// function checkHands() {
// 	let playerScore = computeHandTotal(playerHand)
// 	let dealerScore = computeHandTotal(dealerHand)
// 	if (playerScore > 21 && playerHand.includes((card === "dA" || card === "hA" || card ==="cA" || card === "sA"))) {
// 		playerScore -= 10		
// 	} else {
// 		renderPlayerBust()
// 	}
// }

function renderPlayerBust(){
	statusEL.textContent = "Player Bust"	
}

function renderDealerBust(){
	statusEL.textContent = "Dealer Bust, Player Wins!"
}

function checkHands() {
	let playerScore = computeHandTotal(playerHand)
	let dealerScore = computeHandTotal(dealerHand)
	if (playerScore > 21) {
		renderPlayerBust()	
	}
	// aceEqualsOne()
}

function stand(){
	let dealerScore = computeHandTotal(dealerHand)
	let playerScore = computeHandTotal(playerHand)
	while (dealerScore <= 17) {
		let dealerCard = selectCard()
		dealerHand.push(dealerCard)
		dealerScore = computeHandTotal(dealerHand)
		if (dealerScore > 21) {
			renderDealerBust()
		}
	}	
	renderCards()
	renderBlackjack()
	displayDealerCards()
	renderWin()
}
	
function renderBlackjack(){
	let dealerScore = computeHandTotal(dealerHand)
	let playerScore = computeHandTotal(playerHand)
	if (playerScore === 21 && dealerScore === 21){
		statusEL.textContent = "Push"
		displayDealerCards()
		return
<<<<<<< HEAD
	} else if (playerScore === 21 && dealerScore !== 21){
=======
	} else if(playerScore === 21 && dealerScore !== 21){
>>>>>>> bab6e980536b9e935de2bcba1629c45c67695552
		statusEL.textContent = "Player Blackjack!"
		return
<<<<<<< HEAD
	} else if (playerScore !== 21 && dealerScore === 21) { 
		statusEL.textContent = "Dealer Blackjack"
		displayDealerCards()
		return
=======
	} else if(playerScore !== 21 && dealerScore === 21){ 
		statusEL.textContent = "Dealer Blackjack"
		displayDealerCards()
		return		
>>>>>>> bab6e980536b9e935de2bcba1629c45c67695552
	}
}

function renderWin(){
	let dealerScore = computeHandTotal(dealerHand)
	let playerScore = computeHandTotal(playerHand)
	if (playerScore > dealerScore && playerScore < 22){
	statusEL.textContent = "Player Wins!";
	return
	} else if (dealerScore > playerScore && dealerScore < 22){
	statusEL.textContent = "Dealer Wins";
	return
	}
}



