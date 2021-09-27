// Pseudocode

// What should the game do?

// 1)When the game is initialized, the winConditions variable array should be declared with the required paired arrays already inside.
    // 1.1) The empty array container arrayOfCats for the tiles should be declared first, followed by the winConditions.
    // 1.2) Init should also execute the randomization function to randomly assign images to different tiles.
    // 1.3) Init needs to set / reset the timer as well.

// 2) When a card/tile is clicked, the game clock should begin counting up.A handleClick function should contain code to either execute clock start, card / tile flip, and matching or call additional functions that do so.
    // 2.1) When the second tile is clicked, the game should determine if it is a match to the first clicked tile or not.
    // 2.2) If it is, both tiles should become unusable and remain flipped.If the tiles don’t match, they should return to their original state.
    // 2.3) On click, tiles should flip over(or disappear) revealing the picture underneath, and remain in this state until the player clicks a second tile.

// The render function should

// The game is over when the player has matched all the available tiles.This state should stop the clock.
// Once the clock stops, the message line should read “Congratulations, you matched all the cards in XXXX minutes / seconds!” or something similar.

// The reset button should be available after the first card / tile is clicked.



//-------CONSTANTS-------//
let cardArray = [{name: 'cat1', img: 'images/IMG_1.jpeg'},
    {name: 'cat2', img: 'images/IMG_2.jpeg'},
    {name: 'cat3', img: 'images/IMG_3.jpeg'},
    {name: 'cat4', img: 'images/IMG_4.jpeg'},
    {name: 'cat5', img: 'images/IMG_5.jpeg'},
    {name: 'cat6', img: 'images/IMG_6.jpeg'},
    {name: 'cat7', img: 'images/IMG_7.jpeg'},
    {name: 'cat8', img: 'images/IMG_8.jpeg'},
];
// let winConditions = [[], [], [], [], [], [], [], []];//Contains the pairs of matching cards to compare the playerChoices against in the isWinner function.


//-------VARIABLES(STATE)-------//
// let isWinner;//This will tell us if there's a winner
let playerChoices = [];//This is the array for card clicks to be logged.
let playerChoicesIden = [];//


//-------CACHED ELEMENT REFERENCES-------//
const cardGrid = document.querySelector('card-grid');//grabs the div container that will hold the cards

const messageEl = document.getElementById("message");
const cardsEl = document.querySelectorAll('section > div');
const cardArrayEl = document.querySelector('.cardArray');



//-------EVENT LISTENERS-------//
cardEl.addEventListener('click', flipCard);





//-------FUNCTI0NS-------//

function makeGrid(){
    for (let i =0; i < cardArray.length; i++){
        let cardEl = document.createElement('image');
        cardel.setAttribute('src', 'images/blank.jpeg');//should link cards to image sources.
        cardEl.setAttribute('id', i);//assigns index positions to each card in the array
        cardEl.addEventListener('click', flipCard);//add an event listener to watch for click

    }
}

function init() {
    
    winConditions = [];
    matchedCards = [];//Card matches will push into this array and when it fills

    messageEl.innerText = "Click a card to pick a card and start the timer!";
   
}

function flipCard(){//flip cards on click
    let cardIden = this.getAttribute('id');
    playerChoices.push(cardArray[cardIden].name);
    playerChoicesIden.push(CardIden);
    this.setAttribute('src', cardArray[cardIden].img);
    if (playerChoices.length === 2){
        setTimeout(matchCards, 500);
    }
}

function matchCards(){
    let cards = this.getAttribute('id');
}


    function render() {}