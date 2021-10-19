// Global scope Variables
let cards = Array.from(document.getElementsByClassName('cards'));
let overlay = document.getElementsByClassName('overlay')[0];
let tryAgainText = document.getElementsByClassName('try-again-container')[0];
let victoryText = document.getElementsByClassName('victory-container')[0];
let overallScore = document.getElementsByClassName('score-overall')[0]
let flipCounter = document.getElementById('flips-counter');
let flips;
let timer = document.getElementById('game-timer');
let timeLeft;
let pairedCards = [];
let verifyCard = null;
let canClick = true;
let cardsArray = cards;


// Start game function to initialise the components for the game
function startGame() { 
    flips = 0;
    timeLeft = 120;
    pairedCards;
    resetCards();
    overlay.classList.add('hide');
    tryAgainText.classList.remove('show');
    victoryText.classList.remove('show')


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
            stopCounter = countdownTimer();

        },1000)
}
startGame();

function rotateCard(card) {
    if(canFlipCard(card)){
        flips++;
        flipCounter.innerText = flips;
        card.classList.add('visible');

        if(verifyCard)
            checkCardsMatch(card)
        else
            //assign current card (card) to the verify card
            verifyCard = card;
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

// Timer count down function
function countdownTimer() {
    return setInterval(() => {
            timeLeft--;
            timer.innerText = timeLeft;
            console.log(timer)
            if (timeLeft == 0)
                tryAgain()
        },1000);
}

// Reset cards to ensure all cards are at starting position, and to reset after a game played.
function resetCards() {
    cardsArray.forEach(item =>{
        item.classList.remove('visible');
    })
}

function canFlipCard(card) {
    return true;
}

// Function to  return the card clicked src to be checked against another card
function getCard(card){
    return card.getElementsByClassName('deck-card')[0].src;
}   


function checkCardsMatch(card) {
    if(getCard(card) === getCard(verifyCard))
        cardsMatch(card, verifyCard);
    else
        cardsDontMatch(card, verifyCard);

    verifyCard = null;    
    console.log(cardsArray)
    console.log(pairedCards)
}

function cardsDontMatch(card1, card2) {
    setTimeout(() => {
        card1.classList.remove('visible');
        card2.classList.remove('visible');
        canClick = false;
    },1000)
}

function cardsMatch(card1, card2) {
    pairedCards.push(card1);
    pairedCards.push(card2);

    if(pairedCards.length === cardsArray.length)
    //victory
        gameOver();
}

function gameOver() {
    //reset timer
    clearInterval(stopCounter);
    overlay.classList.remove("hide");
    victoryText.classList.add('show');
    overallScore.innerText = flips;
}

function tryAgain(){
    //show try again div
    clearInterval(stopCounter);
    overlay.classList.remove("hide");
    tryAgainText.classList.add('show');
}