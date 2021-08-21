let firstCard = getRandom();
let secondCard = getRandom();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";
let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandom(){
    min = 1;
    max = 11;
    return Math.floor(Math.random() * (max-min)) + min;
}

function startGame(){
    renderGame();
}

function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?";
    } else if(sum === 21){
        hasBlackJack = true
        message = "Congrats!! You've got Blackjack";
    } else {
        isAlive = false;
        message = "You're out of game!";
    }

    cardsMessage = "Cards: "
    for(let i = 0; i < cards.length; i+=1){
        cardsMessage += cards[i] + " "
    }
    cardsEl.textContent = cardsMessage;
    sumEl.textContent = "Sum: " + sum;
    messageEl.textContent = message;
}

function newCard(){
    let card = getRandom();
    sum += card;
    cards.push(card);

    renderGame()
}