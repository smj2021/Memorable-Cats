//-------CONSTANTS-------//
//cardArray allows the board to be drawn dynamically as well as allows for the implementation of a shuffle function.
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

let tempArray = [];
// console.log(tempArray);
//-------VARIABLES(STATE)-------//
let playerChoices = [];//This is the array for card clicks to be logged.
let playerMatches = [];//store matched cards here
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

//Timer variables declared.
let setIntervalId, min, sec, seconds = 0;
//First card chosen by a player
let firstCard;
//Second card chosen by a player
let secondCard;

//-------CACHED ELEMENT REFERENCES-------//
//Grabs the section container that will hold the cards
const cardGridSectionEl = document.querySelector('#cardgrid');
// const cardGridEl = document.querySelectorAll('.grid');
//Displays all messages relating to game state.
const messageEl = document.querySelector('#message');
// const cardsList = document.querySelectorAll('.cards');
//Grabs the reset button
const resetBtn = document.querySelector('#reset-button');
//Yet unimplemented tiner for tracking solution speed.
const timerEl = document.querySelector('#timer');


//-------EVENT LISTENERS-------//
cardGridSectionEl.addEventListener('click', handleClick);
resetBtn.addEventListener('click', init);
// timerEl.addEventListener('onclick', startTimer);



//-------FUNCTI0NS-------//
init();
createBoard();

function init() {
    playerChoices = [];
    playerChoicesIdx = [];
    playerMatches = [];//matched pairs of cards will be stored here after first and second click are made.
    resetBtn.setAttribute('hidden', init);
    messageEl.innerText = 'Player, pick a card to start the clock!';
}

// Generates the board itself, and executes the function appending cards to the board.
function createBoard() {
    let counter = 0;
    for (let i = 0; i < cardArray.length; i++) {
        if (i % 2 === 0) counter++;
        createAndAppendCardEls(i, counter);
    }
}

function reShuffleBoard() {
    counter = 0;
    for (i = 0; i < tempArray.length; i++) {
        if (i % 2 === 0) counter++;
        createAndAppendCardEls(i, counter);
    }
}

// Generates the cards on the board.
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
}

//This function responds to the player clicking a card and executes cardMatchCheck() if the playerChoices array holds two values.
function handleClick(e) {
    e.target.parentNode.classList.add('active');
    playerChoices.push(e.target.parentNode.firstChild['name']);
    if (playerChoices.length === 2) {
        console.log(cardMatchCheck());
        cardMatchCheck(e) === false ? e.target.parentNode.classList.remove('active') : null;
    }
    startTimer();
    // How can I turn the cards back over? 
}


//Timer that starts ticking on click.
function startTimer() {
    if (!setIntervalId) {
        setIntervalId = setInterval(tick, 1000);
    } else {
        return;
    }
    //calling tick function gets timer to count up
}

function tick() {
    seconds++;//incrementing seconds
    render();//every time the clock ticks the function renders.
}

function render() {
    min = Math.floor(seconds / 60);
    sec = seconds % 60;
    if (sec < 10) {
        timerEl.innerText = `${min}:0${sec}`;
    } else {
        timerEl.innerText = `${min}:${sec}`;
    }
}



//This function checks to see if index 1 and index 2 in the playerChoices array are the same card based on a card name string stored in playerChoices on click.
function cardMatchCheck(element) {
    firstCard = playerChoices[0];
    secondCard = playerChoices[1];
    if (playerChoices.length === 2) {
        cardGridSectionEl
            .querySelectorAll('div')
            .forEach(function (div) {
                if (div.classList.contains('active') && div.classList.contains('matched')) {
                } else if (div.classList.contains('active')) {
                    setTimeout(function () {
                        div.classList.remove('active')

                    }, 3000)
                };
            })
    }
    if (playerChoices[0] === playerChoices[1]) {

        messageEl.innerText = 'Congratulations, Player! You found a match!';
        playerMatches.push(playerChoices);
        playerChoices.length = 0;
        checkWin();
        return true;
    }
    else {
        messageEl.innerText = 'That wasn\'t a match. Pick again!'

        playerChoices.length = 0;
        return false;
    }

}


function checkWin() {
    if (playerMatches.length === 8) {
        messageEl.innerText = `Congratulations Player, you win!`;
        resetBtn.removeAttribute('hidden');
    }
    return;
}

//Reloads the game when the 'Play Again' button is clicked.
function reload() {
    location.reload();
}


function cardShuffle(arr) {
    tempArray = [];
    let length = cardArray.length;
    // const tempArray = [];
    for (let i = 0; i < length; i++) {
        let idx = Math.floor(Math.random() * cardArray.length);
        console.log(cardArray[idx], idx);
        // let value = cardArray.splice(idx, 1);
        tempArray.push(cardArray[idx]);
    }
    return tempArray;
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
