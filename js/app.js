/*----------------Variables----------------------------*/
let deck=[], playerHand=[], dealerHand=[], burnpile=[], cardToRemove, cardPicked;

/*----------------Constants----------------------------*/
const statusEL = document.getElementById('status'), bet1Btn = document.getElementById('bet-1'), 
bet5Btn = document.getElementById('bet-5'), bet25Btn = document.getElementById('bet-25'), 
bet100Btn = document.getElementById('bet-100'), dealBtn = document.getElementById('deal'), 
resetBtn = document.getElementById('reset'), hitBtn = document.getElementById('hit'), 
standBtn = document.getElementById('stand'), playerHandEl = document.getElementById('deal'), 
bank = document.getElementById('playerBank'), playerTotalEl = document.getElementById('playerhandvalue'), 
dealerTotalEl = document.getElementById('dealerhandvalue'), playerDeckEl = document.getElementById('player-cards'), 
dealerDeckEl = document.getElementById('dealer-cards');
  
/* Event Listeners*/
bet1Btn.addEventListener('click', () => handleBet(bet1Btn, 1));
bet5Btn.addEventListener('click', () => handleBet(bet5Btn, 5));
bet25Btn.addEventListener('click', () => handleBet(bet25Btn, 25));
bet100Btn.addEventListener('click', () => handleBet(bet100Btn, 100));

dealBtn.addEventListener('click', () => dealBtn.remove());

document.getElementById('hit').addEventListener('click', hit);
document.getElementById('stand').addEventListener('click', stand);
document.getElementById('deal').addEventListener('click', initialDeal);
  
/*----------------Functions----------------------------*/
init()
//Initializes Deck
function init() {
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}
// Assigns Card Values
function cardLookup(card) {
	const cardValues = {
	  'dA': 11, 'hA': 11, 'cA': 11, 'sA': 11,
	  'dK': 10, 'hK': 10, 'cK': 10, 'sK': 10,
	  'dQ': 10, 'hQ': 10, 'cQ': 10, 'sQ': 10,
	  'dJ': 10, 'hJ': 10, 'cJ': 10, 'sJ': 10,
	  'd10': 10, 'h10': 10, 'c10': 10, 's10': 10,
	  'd09': 9, 'h09': 9, 'c09': 9, 's09': 9,
	  'd08': 8, 'h08': 8, 'c08': 8, 's08': 8,
	  'd07': 7, 'h07': 7, 'c07': 7, 's07': 7,
	  'd06': 6, 'h06': 6, 'c06': 6, 's06': 6,
	  'd05': 5, 'h05': 5, 'c05': 5, 's05': 5,
	  'd04': 4, 'h04': 4, 'c04': 4, 's04': 4,
	  'd03': 3, 'h03': 3, 'c03': 3, 's03': 3,
	  'd02': 2, 'h02': 2, 'c02': 2, 's02': 2
	};
	return cardValues[card];
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

function handleBet(button, betAmount) {
	bet.innerText = `Bet $${betAmount}`;
	bank.innerText = `$${parseInt(bank.textContent) - parseInt(button.value)}`;
	statusEL.innerHTML = `Player Bet is $${betAmount}, Press Deal`;
	removeBetButtons();
  }
  
  function removeBetButtons() {
	bet1Btn.remove();
	bet5Btn.remove();
	bet25Btn.remove();
	bet100Btn.remove();
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

function renderPlayerBust(){
	statusEL.textContent = "Player Bust"	
}

function renderDealerBust(){
	statusEL.textContent = "Dealer Bust, Player Wins!"
}

function computeHandTotal(hand) {
	let total = 0;
	hand.forEach(card => {
		total += cardLookup(card);
	});
	total = handleAces(hand, total);
	return total;
	}	

function checkHands() {
	let playerScore = computeHandTotal(playerHand);
	let dealerScore = computeHandTotal(dealerHand);
	updatePlayerScore(playerScore);
  
	if (playerScore > 21) {
	  renderPlayerBust();
	}
  }
  
  function updatePlayerScore(score) {
	document.getElementById('player-score-value').textContent = playerScore;
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

function handleAces(hand, total) {
	let aces = hand.filter(card => card.endsWith("A"));
	aces.forEach(() => {
	  if (total > 21) {
		total -= 10;
	  }
	});
	return total;
  }
  
function renderBlackjack(){
	let dealerScore = computeHandTotal(dealerHand)
	let playerScore = computeHandTotal(playerHand)
	if (playerScore === 21 && dealerScore === 21){
		statusEL.textContent = "Push"
		displayDealerCards()
		return
	} else if (playerScore === 21 && dealerScore !== 21){
		statusEL.textContent = "Player Blackjack!"
		return
	} else if (playerScore !== 21 && dealerScore === 21) { 
		statusEL.textContent = "Dealer Blackjack"
		displayDealerCards()
		return
	} else if(playerScore !== 21 && dealerScore === 21){ 
		statusEL.textContent = "Dealer Blackjack"
		displayDealerCards()
		return		
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