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
const cardGridEl = document.querySelectorAll('.cardgrid');//grabs the div container that will hold the cards
const cardGridSectionEl = document.querySelector('#cardgrid');
const messageEl = document.getElementById('message');
const cardsEl = document.querySelectorAll('.cards');
const resetBtn = document.querySelector('#reset-button');

//-------EVENT LISTENERS-------//
// cardEl.addEventListener('click', flipCard);
resetBtn.addEventListener('click', init);
// cardsEl.addEventListener('click', startGame);




//-------FUNCTI0NS-------//
init();

function init() {
    playerChoices = [];
    playerChoicesIdx = [];
    matchedCards = [];//matched pairs of cards will be stored here after first and second click are made.
    resetBtn.setAttribute('hidden', init);
    messageEl.innerText = 'Player, pick a card to start the clock!';
    // render();
    createBoard();
}

//function startGame(){
// firstChoice = null;
// secondChoice = null;
// }

function createAndAppendCardEls(idValue, imgNum) {
    let div = document.createElement('div');
    div.setAttribute('id', idValue);
    div.setAttribute('class', 'cards');

    let frontImage = document.createElement('img');
    frontImage.setAttribute('src', `images/IMG_${imgNum}.JPG`);
    frontImage.setAttribute('class', 'front');

    let backImage = document.createElement('img');
    backImage.setAttribute('src', 'images/Sheep.png');
    backImage.setAttribute('class', 'back');
    div.appendChild(frontImage);
    div.appendChild(backImage);
    cardGridSectionEl.appendChild(div);
    console.log(cardGridSectionEl);
}

function createBoard() {
    let counter = 0;//counter starts at 1 and every even loop increments.
    for (let i = 0; i < 16; i++) {
        console.log(counter);
        if (i % 2 === 0) counter++;
        createAndAppendCardEls(i, counter);
    }
    console.log('hi')
}







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