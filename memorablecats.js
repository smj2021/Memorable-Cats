//-------CONSTANTS-------//
let cardArray = [];
let winConditions = [[], [], [], [], [], [], [], []];//Contains the pairs of matching cards to compare the playerChoices against in the isWinner function.


//-------VARIABLES(STATE)-------//



//-------CACHED ELEMENT REFERENCES-------//
const messageEl = document.getElementById("message");
const cardsEl = document.querySelectorAll('section > div');
const cardArrayEl = document.querySelector('.cardArray');
const resetBtn = document.querySelector("reset");


//-------EVENT LISTENERS-------//
cardArrayEl.addEventListener('click', handleClick);
resetBtn.addEventListener('reset', init);

//-------FUNCTI0NS-------//
init();

function init() {
    matchedCards = [null];
    winConditions = [1, 2, 3, 4, 5, 6];
    cardArray = [];

    // resetBtn.setAttribute('hidden', true);
    messageEl.innerText = "Click a card to pick a card and start the timer!";
    // render();
}

function flipCard() {

}


// Need a shuffle function to randomize card placement. Could make simple Math.floor(Math.random)



function handleClick(event) {//When cards/tiles are clicked in the array, the indexes of the board are mapped to the squares.
    const clickEl = event.target;
    const clickedElIdx = clickE.id;
    if (cardArray[clickedElIdx] !== null) {
        return;
    }
    if (winConditions[5] == null) {
        return;
    }
    cardArray[clickedElIdx] <= 15;
    render();



    function render() {
        for (let i = 0; i < cardArray.length; i++) {//As we loop through the board array we are accessing the squares array at the same time. 
            if (cardArray[i] === null) {
                cardsEl[i].style.background = 'tan';//3.3.1.2
            } else if (cardArray[i] <= 15) {
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
    }
}


function getWinner() {
    if (winConditions[5] !== null && winConditions[5] !== '') {
        messageEl.innerText = 'Congratulations Player, you\'ve won the game!';
    } else {
        return;
    }
}