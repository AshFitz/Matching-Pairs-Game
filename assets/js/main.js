// Variables
let cards = Array.from(document.getElementsByClassName('card'));
let flips = 0;
let timer = document.getElementById('game-timer');
let timeLeft = 0;
let pairedCards = [];
let canClick = false;



let cardsArray = cards;

console.log(cards);
//timer

function shuffleCards(cardsArray) { // Fisher-Yates Shuffle Algorithm.
    for (let i = cardsArray.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        cardsArray[randIndex].style.order = i;
        cardsArray[i].style.order = randIndex;
    }
}

shuffleCards(cardsArray);

function timeRemaining() {
    return setInterval(() => {
        timeLeft++;
        console.log(timeLeft)
        timer.innerText = timeLeft;
        if(timeLeft === 60)
            timeRemaining();

    },1000);
}

timeRemaining();
console.log("test timer",timeRemaining())

// function startGame(){
//     let i;
//     let imageRoute = `assets/images/${i}`;
//     let imageSource = document.createElement('img').src = imageRoute;
    
//     console.log("test",imageSource);


//     for (let i = 0; i < images.length; i++) {
//         test[i];
//         myArray.push(imageSource);
    
//     }
// }

// startGame();




