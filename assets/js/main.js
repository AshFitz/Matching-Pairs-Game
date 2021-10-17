// Variables
let cards = Array.from(document.getElementsByClassName('cards'));
let flips = 0;
let timer = document.getElementById('game-timer');
let timeLeft = 90;
let pairedCards = [];
let canClick = true;
let cardsArray = cards;

console.log(cardsArray)
function startGame() { 
    flips;
    pairedCards;
    setTimeout(() =>{
        shuffleCards(cardsArray);
        canClick = false;
        timeRemaining();
    },500)
}

startGame();


// Fisher-Yates Shuffle Algorithm.
function shuffleCards(cardsArray) { 
    for (let i = cardsArray.length - 1; i > 0; i--) {
        let randIndex = Math.floor(Math.random() * (i + 1));
        cardsArray[randIndex].style.order = i;
        cardsArray[i].style.order = randIndex;
        console.log(cardsArray[i])
    }
}

shuffleCards(cardsArray);

//timer count down

function timeRemaining() {
    return setInterval(() => {
            timeLeft--;
            timer.innerText = timeLeft;
            if (timeLeft === 0)
                timeLeft = 90;

        },1000);
}


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




