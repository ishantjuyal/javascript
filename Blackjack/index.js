let player = {
    name: 'Ishant',
    chips: 124,
    message: function(){
        return player.name + ": $" + player.chips;
    }
}

let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";
let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.message();

function getRandom(){
    randomNumber = Math.floor(Math.random()*13) + 1;
    if(randomNumber === 1){
        return 11;
    } else if(randomNumber > 10){
        return 10;
    } else{
        return randomNumber;
    }
}

function startGame(){
    let firstCard = getRandom();
    let secondCard = getRandom();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    isAlive = true;
    
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
    if(isAlive === true && hasBlackJack === false){
        let card = getRandom();
        sum += card;
        cards.push(card);

        renderGame()
    }
}