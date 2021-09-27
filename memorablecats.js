//-------CONSTANTS-------//
let cardArray = [];
// let winConditions = [[], [], [], [], [], [], [], []];//Contains the pairs of matching cards to compare the playerChoices against in the isWinner function.


//-------VARIABLES(STATE)-------//
let playerChoices = [];//This is the array for card clicks to be logged.
let playerChoicesId = [];//
let matchCombos = [
    ['IMG_1.JPG', 'IMG_1.JPG'],
    ['IMG_2.JPG', 'IMG_2.JPG'],
    ['IMG_3.JPG', 'IMG_3.JPG'],
    ['IMG_4.JPG', 'IMG_4.JPG'],
    ['IMG_5.JPG', 'IMG_5.JPG'],
    ['IMG_6.JPG', 'IMG_6.JPG'],
    ['IMG_7.JPG', 'IMG_7.JPG'],
    ['IMG_8.JPG', 'IMG_8.JPG']
];
let firstChoice;//First card chosen by a player
let secondChoice;//Second card chosen by a player

//-------CACHED ELEMENT REFERENCES-------//
const cardGridEl = document.querySelector('.cardgrid');//grabs the div container that will hold the cards
const messageEl = document.getElementById('message');
const cardsEl = document.querySelectorAll('.cards');
const resetBtn = document.querySelector('#reset-button');

//-------EVENT LISTENERS-------//
// cardEl.addEventListener('click', flipCard);
resetBtn.addEventListener('click', init);
cardsEl.addEventListener('click', startGame);




//-------FUNCTI0NS-------//
// init();

function init() {
    playerChoices = [];
    playerChoicesIdx = [];
    matchedCards = [];//matched pairs of cards will be stored here after first and second click are made.
    resetBtn.setAttribute('hidden', init);
    messageEl.innerText = 'Player, pick a card to start the clock!';
    render();
}

//startGame(){}



// function render(){
//     for (let i = 0; i < cardArray.length; i++) {
//         const cardEl = document.createElement('img');
//         cardEl.setAttribute('src', 'images/Sheep.png');//shows "back" of card
//         cardEl.setAttribute('id', i);//assigns index positions to each card in the array
//         cardEl.addEventListener('click', flipCard);//add an event listener to watch for click
//         cardGridEl.appendChild(cardEl);
//     }
// }
    






// 


// function flipCard(event) {//flip cards on click
//     console.log(event);
//     let cardIden = event.target.getAttribute('id');
//     playerChoices.push(cardArray[cardIden].name);
//     playerChoicesIden.push(cardIden);
//     this.setAttribute('src', cardArray[cardIden].img);
//     if (playerChoices.length === 2) {
//         setTimeout(matchCards, 500);
//     }
// }

// function matchCards() {
//     let cardsEl = document.querySelectorAll('img');
//     const firstCard = playerChoicesIden[0];
//     const secondCard = playerChoicesIden[1];
//     if (playerChoicesIden[0] === playerChoicesIden[1]) {
//         messageEl.innerText = 'Awesome! You got a match!';
//         cardsEl[playerChoicesIden].setAttribute('src', 'images/white.JPEG');//replaces card when matched
//         cardsEl[playerChoicesIden].setAttribute('src', 'images/white.JPEG');//replaces card when matched
//         matchedCards.push(playerChoices);
//     } else {
//         messageEl.innerText = 'No match! Try again!';
//         cardsEl[firstCard].setAttribute('src', 'images/blank.JPEG');
//         cardsEl[secondCard].setAttribute('src', 'images/blank.JPEG');
//     }
// }

// function render() {}