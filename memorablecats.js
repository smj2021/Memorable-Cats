//-------CONSTANTS-------//
let cardArray = [

];
let winConditions = [[], [], [], [], [], [], [], []];//Contains the pairs of matching cards to compare the playerChoices against in the isWinner function.


//-------VARIABLES(STATE)-------//



//-------CACHED ELEMENT REFERENCES-------//
const messageEl = document.getElementById("message");
const cardsEl = document.querySelectorAll('section > div');
const cardArrayEl = document.querySelector('.cardArray');
const resetBtn = document.getElementById("reset-button");


//-------EVENT LISTENERS-------//
cardArray.addEventListener('click', handleClick);
resetBtn.addEventListener('click', init);

//-------FUNCTI0NS-------//
init();

function init() {
    matchedCards = null;
    isWinner = null;
    cardArray = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];

    // resetBtn.setAttribute('hidden', true);
    messageEl.innerText = "Click a card to pick a card and start the timer!";
render();
}


// Need a shuffle function to randomize card placement. Could make simple Math.floor(Math.random)



function handleClick(event) {//When cards/tiles are clicked in the array, the indexes of the board are mapped to the squares.
    const clickEl = event.target;
    const clickedElIdx = clickEl.id[2];
    if (cardArray[clickedElIdx] !== null) {
        return;
    }
    if (isWinner !== null) {
        return;
    }


function render() {
    for (let i = 0; i < cardArray.length; i++) {//As we loop through the board array we are accessing the squares array at the same time. 
        if (cardArray[i] === null) {
            cardsEl[i].style.background = 'tan';//3.3.1.2
        } else if (cardArray[i] === 1) {
            cardsEl[i].style.background = 'orange';
            cardsEl[i].innerText = 'X';
            resetBtn.removeAttribute("hidden");
        } else if (cardArray[i] === -1) {
            cardsEl[i].style.background = 'purple';//3.3.1.2)
            cardsEl[i].innerText = 'O';
            console.log(cardArray[i]);
        }//3.3.2
        console.log(cardArray);
    }
}}
