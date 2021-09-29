//-------CONSTANTS-------//
let cardArray = [
    { name: '0', img: 'images/IMG_1.JPG' },
    { name: '0', img: 'images/IMG_1.JPG' },
    { name: '1', img: 'images/IMG_2.JPG' },
    { name: '1', img: 'images/IMG_2.JPG' },
    { name: '2', img: 'images/IMG_3.JPG' },
    { name: '2', img: 'images/IMG_3.JPG' },
    { name: '3', img: 'images/IMG_4.JPG' },
    { name: '3', img: 'images/IMG_4.JPG' },
    { name: '4', img: 'images/IMG_5.JPG' },
    { name: '4', img: 'images/IMG_5.JPG' },
    { name: '5', img: 'images/IMG_6.JPG' },
    { name: '5', img: 'images/IMG_6.JPG' },
    { name: '6', img: 'images/IMG_7.JPG' },
    { name: '6', img: 'images/IMG_7.JPG' },
    { name: '7', img: 'images/IMG_8.JPG' },
    { name: '7', img: 'images/IMG_8.JPG' }
];
// let winConditions = [[], [], [], [], [], [], [], []];//Contains the pairs of matching cards to compare the playerChoices against in the isWinner function.


//-------VARIABLES(STATE)-------//
let playerChoices = [];//This is the array for card clicks to be logged.
let playerChoicesId;//
let playerMatches = [];//store matched cards here
// let matchCombos = [
//     ['IMG_1.JPG', 'IMG_1.JPG'],
//     ['IMG_2.JPG', 'IMG_2.JPG'],
//     ['IMG_3.JPG', 'IMG_3.JPG'],
//     ['IMG_4.JPG', 'IMG_4.JPG'],
//     ['IMG_5.JPG', 'IMG_5.JPG'],
//     ['IMG_6.JPG', 'IMG_6.JPG'],
//     ['IMG_7.JPG', 'IMG_7.JPG'],
//     ['IMG_8.JPG', 'IMG_8.JPG']
// ];
let firstCard;//First card chosen by a player
let secondCard;//Second card chosen by a player

// const elementZero = document.querySelector('#0');
// console.log(elementZero);

//-------CACHED ELEMENT REFERENCES-------//
const cardGridEl = document.querySelectorAll('.grid');//grabs the section container that will hold the cards
const cardGridSectionEl = document.querySelector('#cardgrid');
//grabs the container holding the cards
const messageEl = document.querySelector('#message');
const cardsNodeList = document.querySelectorAll('.cards');//grabs all divs for each card
const resetBtn = document.querySelector('#reset-button');//grabs the reset button
const timerEl = document.querySelector('#timer');


//-------EVENT LISTENERS-------//
cardGridSectionEl.addEventListener('click', handleClick);
resetBtn.addEventListener('click', init);
// cardsEl.addEventListener('click', startGame);
// cardsNodeList.forEach(function(card){
//     card.addEventListener('click', handleClick);
// });



//-------FUNCTI0NS-------//
init();

function init() {
    playerChoices = [];
    playerChoicesIdx = [];
    // let matches = document.querySelectorAll('img');
    playerMatches = [];//matched pairs of cards will be stored here after first and second click are made.
    resetBtn.setAttribute('hidden', init);
    messageEl.innerText = 'Player, pick a card to start the clock!';
    // render();
    createBoard();
}


function createAndAppendCardEls(idValue, imgNum) {
    let div = document.createElement('div');
    div.setAttribute('id', idValue);
    div.setAttribute('class', 'cards');
    div.setAttribute('name', `cat_${imgNum}`);
    let frontImage = document.createElement('img');
    frontImage.setAttribute('src', `images/IMG_${imgNum}.JPG`);
    frontImage.setAttribute('class', 'front');
    frontImage.setAttribute('name', `cat_${imgNum}`);
    let backImage = document.createElement('img');
    backImage.setAttribute('src', 'images/Sheep.png');
    backImage.setAttribute('class', 'back');
    div.appendChild(frontImage);
    div.appendChild(backImage);
    cardGridSectionEl.appendChild(div);
    // console.log(cardGridSectionEl);
}


function createBoard() {
    let counter = 0;//counter starts at 1 and every even loop increments.
    for (let i = 0; i < cardArray.length; i++) {
        //console.log(counter);
        if (i % 2 === 0) counter++;
        createAndAppendCardEls(i, counter);
    }
}

function handleClick(e) {
    clickedEl = e.target.parentNode.classList['name'];
    console.log(clickedEl);
    e.target.parentNode.classList.add('active');
    playerChoices.push(e.target.parentNode.firstChild['name']);
    console.log(playerChoices);
    if (playerChoices.length === 2) {
        cardMatchCheck();
    }
}

function cardMatchCheck() {
    firstCard = playerChoices[0];
    secondCard = playerChoices[1];
    if (playerChoices[0] === playerChoices[1]) {
        messageEl.innerText = 'Congratulations, Player! You found a match!';

    }
}







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