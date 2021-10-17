// Global scope Variables
let cards = Array.from(document.getElementsByClassName('cards'));
let flipCounter = document.getElementById('flips-counter');
let flips = 0;
let timer = document.getElementById('game-timer');
let timeLeft = 90;
let pairedCards = [];
let canClick = true;
let cardsArray = cards;

// Start game function to initialise the components for the game
function startGame() { 
    flips;
    pairedCards;
    console.log(pairedCards)

    cards.forEach(card => {
        card.addEventListener('click', () => {
            rotateCard(card)
        })
    })

    setTimeout(() =>{
        shuffleCards(cardsArray);
        canClick = false;
        timeRemaining();
    },500)
}

startGame();

function rotateCard(card) {
    flips++;
    flipCounter.innerText = flips;
    card.classList.add('visible');
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




