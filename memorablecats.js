// 1) Define the required variables used to track the state of the game:

    // None of these variables will need to hold a value when they are defined

    // 1.1) Use an array to represent the squares on the board.    

    // 1.2) Use a winner variable to represent three different game states:
        // a player that won
        // a player that lost
        // or a game that is still in play.

// 2) Store cached element references on the page that will be accessed in code more than once in variables to make code more concise, readable, and performant:

    // 2.1) Store the 20 elements that represent the squares on the page.

    // 2.2) Store the element that displays the game status on the page.

// 3) The init function should initialize the state variables.
    // Each card element should be mapped to visible squares on the screen.

    // 3.1) Initialize the winner variable to null.

    // 3.2) Render state variables to the page by calling the render function.

    // 3.3) Execute a Math.floor(Math.random) function to randomly sort and distribute card locations.

    // 3.4) Reset the timer to 1 minute.

// 4) The render function should:
    // 4.1) Loop over the board array (which represents the squares on the page), and for each iteration:

        // 4.1.1) Use the index of the iteration to access the square in the squares array that corresponds with the current cell being iterated over in the board array

    // 4.2) 

//-------CONSTANTS-------//
let gameboard = [];
let matchedCards = [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]; // The matches sh0uld be pushed to this array as key:value pairs if they are a true match.
let isWinner; //This will hold the state of the game.

//-------VARIABLES(STATE)-------//



//-------CACHED ELEMENT REFERENCES-------//
const messageEl = document.querySelector("#message");//Stores game's current status.
const squaresEl = document.querySelectorAll('section > div');
const gameboardEl = document.querySelector('gameboard');
const resetBtn = document.getElementById("reset-button");


//-------EVENT LISTENERS-------//
gameboardEl.addEventListener('click', handleClick);
resetBtn.addEventListener('click', init);

//-------FUNCTI0NS-------//
// init();

function init() {
    gameboard = null;
    matchedCards = null;
    isWinner = null;

}

// handleClick(event){
//     event.target
// }