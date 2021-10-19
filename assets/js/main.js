// Global scope Variables
let cards = Array.from(document.getElementsByClassName('cards'));
let flipCounter = document.getElementById('flips-counter');
let flips;
let timer = document.getElementById('game-timer');
let timeLeft = 90;
let pairedCards = [];
let verifyCard = null;
let canClick = true;
let cardsArray = cards;


// Start game function to initialise the components for the game
function startGame() { 
    flips = 0;
    pairedCards;
    console.log(pairedCards);

    cards.forEach((card) => {
            card.addEventListener('click', () => {
                rotateCard(card);
                getCard(card);
            });
        }) 

    // Setimeout created to delay for half a second, allow for shuffle of cards and start the time remaining timer and can click boolean.    
    setTimeout(() => {
            shuffleCards(cardsArray);
            canClick = false;
            timeRemaining();
        },500)
}
startGame();

function rotateCard(card) {
    if(canFlipCard(card)){
        flips++;
        flipCounter.innerText = flips;
        card.classList.add('visible');
        if(verifyCard)
            // check the cards for a match
            checkCardsMatch(card)
        else
            //assign current card (card) to the verify card
            
            verifyCard = card;
            console.log("current card", verifyCard)
            console.log("saved array", pairedCards)

    }

}


// Fisher-Yates Shuffle Algorithm
function shuffleCards(cardsArray) { 
    for (let i = cardsArray.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        cardsArray[randIndex].style.order = i;
        cardsArray[i].style.order = randIndex;
    }
}

shuffleCards(cardsArray);

// Timer count down function

function timeRemaining() {
    return setInterval(() => {
            timeLeft--;
            timer.innerText = timeLeft;
            if (timeLeft === 0)
                timeLeft = 90;

        },1000);
}

// Reset cards to ensure all cards are at starting position, and to reset after a game played.
function resetCards() {
    cardsArray.forEach(item =>{
        item.classList.remove('visible');
    })
}

function canFlipCard(card){
    return true;
}

// Function to  return the card clicked src to be checked against another card
function getCard(card){
    return card.getElementsByClassName('deck-card')[0].src;
}   


function checkCardsMatch(card){
    if(getCard(card) === getCard(verifyCard))
        cardsMatch(card, verifyCard);
    else
        cardsDontMatch(card, verifyCard);

    verifyCard = null;    
}

function cardsDontMatch(card1, card2){
    setTimeout(() => {
        card1.classList.remove('visible');
        card2.classList.remove('visible');
        canClick = false;
        
    },1000)
}

function cardsMatch(card1, card2) {
    pairedCards.push(card1);
    pairedCards.push(card2);

    if(cards.length  == pairedCards.length);
        console.log("game over")
}