// Global scope Variables
let cards = Array.from(document.getElementsByClassName('cards'));
let overlay = document.getElementsByClassName('overlay')[0];
let startContainer = document.getElementsByClassName('start-container')[0];
let tryAgainText = document.getElementsByClassName('try-again-container')[0];
let victoryContainer = document.getElementsByClassName('victory-container')[0];
let overallScore = document.getElementsByClassName('score-overall')[0];
let flipCounter = document.getElementById('flips-counter');
let timer = document.getElementById('game-timer');
let flips;
let timeLeft;
let pairedCards = [];
let verifyCard = null;
let canClick = true;
let cardsArray = cards;



// Start game function to initialise the components for the game
function startGame() { 
    flips = 0;
    timeLeft = 90;
    pairedCards = [];
    resetCards();
    
    
    // For each card found in cards array add an e listener when clicked call rotatecard func passing in the e card.
    cards.forEach((card) => {
            card.addEventListener('click', () => {
                rotateCard(card);
            });
        });

    // Setimeout created to delay for a second, allow for shuffle of cards and start the time remaining timer and can click boolean.    
    setTimeout(() => {
            shuffleCards(cardsArray);
            canClick = false;
            stopCounter = countdownTimer();
            overlay.classList.add('hide');
            startContainer.classList.add('hide');
            victoryContainer.classList.add('hide');
            tryAgainText.classList.add('hide');
        },750);
}


/*
function to rotate a card when clicked wrapped in condition to handle user interaction, 
increment flips per click, update flipcounter with each increment.
if true call func, else the clicked card is now the verify card var.
*/
function rotateCard(card) {
    if(canClickCard(card)){
        flips++;
        flipCounter.innerText = flips;
        card.classList.add('visible');

        if(verifyCard)
            checkCardsMatch(card);
        else
            //assign current card (card) to the verify card
            verifyCard = card;
    }
}


//Fisher-Yates Shuffle Algorithm to shuffle the cards by the order positioned in the css grid.
function shuffleCards(cardsArray) { 
    for (let i = cardsArray.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        cardsArray[randIndex].style.order = i;
        cardsArray[i].style.order = randIndex;
    }
}

// Timer count down function, decrement the timer every 1 second using setInterval method, when timer == 0 we call try again function.
function countdownTimer() {
    return setInterval(() => {
            timeLeft--;
            timer.innerText = timeLeft;
            if (timeLeft == 0)
                tryAgain();
        },1000);
}

// Reset cards to ensure all cards are at starting position, and to reset after a game played, for each card remove the visible class if applied.
function resetCards() {
    cardsArray.forEach(item =>{
        item.classList.remove('visible');
    });
}

/*
Function to return the current card clicked src, 
and to  be checked against another card src.
takes param of card which is passed as the currently clicked card.
*/
function getCard(card){
    return card.getElementsByClassName('deck-card')[0].src;
}   

/*
function to check if cards match,
calling the getCard function and passing the current card and checking vs the stored card,
if true cardsMatch is called which pushes clicked card and stored card to array.
else, cards dont match is called with the current clicked card and stored card and removes the visible class.
then clearing the verifyCard variable by initializing it back to null.
*/
function checkCardsMatch(card) {
    if(getCard(card) === getCard(verifyCard))
        cardsMatch(card, verifyCard);
    else
        cardsDontMatch(card, verifyCard);

    verifyCard = null;
}


/*
Function that takes 2 parameters card1 and card 2,
in this case being the clicked card and the stored card.
can click set to true, and used in another return function to stop interaction,
in a timeout method we wait 1 second, remove the visible class and reset canclick to false.
*/
function cardsDontMatch(card1, card2) {
    canClick = true;
    setTimeout(() => {
        card1.classList.remove('visible');
        card2.classList.remove('visible');
        canClick = false;
    },1000);
}

/*
Function to handle pushing specifically passed cards to the pairdCards array
then check if the pairedcards array length is the same as the cardsArray length
if condition is met call gameOver function.
*/
function cardsMatch(card1, card2) {
    pairedCards.push(card1);
    pairedCards.push(card2);

    if(pairedCards.length === cardsArray.length)
        gameOver();
}

/*Gamover function to stop the current interval from the timer
and and remove css classes for interactions and update the overallscore innertext
with the flips counter number.
*/
function gameOver() {
    clearInterval(stopCounter);
    overlay.classList.remove("hide");
    overallScore.innerText = flips;
    victoryContainer.classList.remove("hide");
}

/* 
Try Again function which clears the intervals from the timer
remove css to show engame overlay and show the try again text.
*/
function tryAgain(){
    clearInterval(stopCounter);
    overlay.classList.remove("hide");
    tryAgainText.classList.remove("hide");
}

/*
Can click function to return true if the conditions are met,
checking if card clicked as parameter is not included in the pairdcards
and the card is not == to the verifyCard, once all 3 conditions are me we 
get a true boolean and we can call this to disable user interaction.
*/

function canClickCard(card) {
    return !canClick && !pairedCards.includes(card) && card !== verifyCard;
}