// Erased pseudocode and rewriting

// 1) Identify variables, event listeners, cached html element references. Try to group them in ways that associate their function/purpose.


// 1.1) 








//-------CONSTANTS-------//

 

//-------VARIABLES(STATE)-------//



//-------CACHED ELEMENT REFERENCES-------//
// const messageEl = document.querySelector("#message");
// const cardsEl = document.querySelectorAll('section > div');
// const cardArrayEl = document.querySelector('#cardArray');
// const resetBtn = document.getElementById("reset-button");


//-------EVENT LISTENERS-------//

resetBtn.addEventListener('click', init);

//-------FUNCTI0NS-------//

function init() {
    // matchedCards = null;
    // isWinner = null;
    // firstCard = false;

    // resetBtn.setAttribute('hidden', true);
    messageEl.innerText = "Click a card to pick a card and start the timer!";

}


// Need a shuffle function to randomize card placement. Could make simple Math.floor(Math.random)