//-------CONSTANTS-------//
let cardArray = [
    { name: 'cat1', img: 'images/IMG_1.JPG' },
    { name: 'cat2', img: 'images/IMG_2.JPG' },
    { name: 'cat3', img: 'images/IMG_3.JPG' },
    { name: 'cat4', img: 'images/IMG_4.JPG' },
    { name: 'cat5', img: 'images/IMG_5.JPG' },
    { name: 'cat6', img: 'images/IMG_6.JPG' },
    { name: 'cat7', img: 'images/IMG_7.JPG' },
    { name: 'cat8', img: 'images/IMG_8.JPG' },
];
// let winConditions = [[], [], [], [], [], [], [], []];//Contains the pairs of matching cards to compare the playerChoices against in the isWinner function.


//-------VARIABLES(STATE)-------//
let playerChoices = [];//This is the array for card clicks to be logged.
let playerChoicesIden = [];//
let matchedCards = [];

//-------CACHED ELEMENT REFERENCES-------//
const cardGridEl = document.querySelector('.cardgrid');//grabs the div container that will hold the cards
const messageEl = document.getElementById('message');
const cardsEl = document.querySelectorAll('.cards');
//const cardEl = document.querySelector('cards');


//-------EVENT LISTENERS-------//
// cardEl.addEventListener('click', flipCard);





//-------FUNCTI0NS-------//
// init();


// function init() {
//     playerChoices = [];
//     playerChoicesIden = [];
//     matchedCards = [];//Card matches will push into this array and when it fills
//     messageEl.innerText = "Click a card to pick a card and start the timer!";
//     for (let i = 0; i < cardArray.length; i++) {
//         const cardEl = document.createElement('img');
//         cardEl.setAttribute('src', 'images/Sheep.png');//shows "back" of card
//         cardEl.setAttribute('id', i);//assigns index positions to each card in the array
//         cardEl.addEventListener('click', flipCard);//add an event listener to watch for click
//         cardGridEl.appendChild(cardEl);
//     }
// }


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
//         cardsEl[firstCard].setAttribute('src', 'images/blank.JPEG');
//         cardsEl[secondCard].setAttribute('src', 'images/blank.JPEG');
//     }
// }

function render() { }