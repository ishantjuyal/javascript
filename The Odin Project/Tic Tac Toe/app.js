let gameboardArray = [["", "", ""], ["", "", ""], ["", "", ""]];

const player = (mark) => {
    const returnMark = () => mark;
    return {returnMark}
}

var myPlayer;
function choosePlayer(mark) {
    myPlayer = player(mark);
    let playerDiv = document.getElementById("player");
    playerDiv.style.display = "none";
}

function showGameboard(gameboardArray) {
    let gameBoardDiv = document.getElementById("gameboard");
    let gameText = `<table>`;
    
    for(let i = 0; i < 3; i ++) {
        let row = `<tr>`;
        for(let j = 0; j < 3; j++) {
            row += `<td><button id="tic" onclick="gameController.mark(${i},${j}, myPlayer.returnMark())">${gameboardArray[i][j]}</button></td>`;
        }
        row += `</tr>`;
        gameText += row;
    }
    gameText += `</table>`
    gameBoardDiv.innerHTML = gameText;
}
showGameboard(gameboardArray);

function checkEmpty(gameboardArray) {
    let value = 0
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
            if(gameboardArray[i][j] == "") {
                value = 1;
            }
        }
    }

    if(value == 1) {
        return true;
    } else {
        return false;
    }
}

const gameController = (() => {
    const mark = (i, j, mark) => {
        if(gameboardArray[i][j] === ""){
            console.log(mark);
            gameboardArray[i][j] = mark;
        }
        showGameboard(gameboardArray);
        checkWin(gameboardArray);
        showGameboard(gameboardArray);
        if(checkEmpty(gameboardArray) && mark == myPlayer.returnMark()) {
            let alternateMark;
            if(mark == "O") {
                alternateMark = "X"
            } else {
                alternateMark = "O"
            }
            randomMark(alternateMark);
        };
    };
    return {mark};
})();


function randomMark(mark) {
    while(true) {
        let i = Math.floor(Math.random()*3);
        let j = Math.floor(Math.random()*3);
    
        if(gameboardArray[i][j] == "") {
            gameController.mark(i,j, mark);
            break;
        }
    }
}


// Check if anyone won the game!
function checkHorizontal(gameboardArray){
    let score = 0;
    for(let i = 0; i < 3; i ++) {
        if(gameboardArray[i][0] != "" && gameboardArray[i][1] != "" && gameboardArray[i][2] != "") { 
            if(gameboardArray[i][0] == gameboardArray[i][1] && gameboardArray[i][1] == gameboardArray[i][2]){
                score = 1;
            }
        }
    }
    if(score > 0) {
        console.log("WON! The Game will restart now");
        // alert("WON! The Game will restart now");
        setTimeout(reloadScreen, 2000);
    }
    // return(score)
}

function checkVertical(gameboardArray){
    let score = 0;
    for(let i = 0; i < 3; i ++) {
        if(gameboardArray[0][i] != "" && gameboardArray[1][i] != "" && gameboardArray[2][i] != "") {
            if(gameboardArray[0][i] == gameboardArray[1][i] && gameboardArray[1][i] == gameboardArray[2][i]){
                score = 1;
            }
        }
    }
    if(score > 0) {
        console.log("WON! The Game will restart now");
        // alert("WON! The Game will restart now");
        setTimeout(reloadScreen, 2000);
    }
    // return(score)
}

function checkDiagonal(gameboardArray) {
    let score = 0;
    if(gameboardArray[0][0] != "" && gameboardArray[1][1] != "" && gameboardArray[2][2] != "") {
        if(gameboardArray[0][0] == gameboardArray[1][1] && gameboardArray[1][1] == gameboardArray[2][2]) {
            score = 1;
        }
    }

    if(gameboardArray[0][2] != "" && gameboardArray[1][1] != "" && gameboardArray[2][0] != "") {
        if(gameboardArray[0][2] == gameboardArray[1][1] && gameboardArray[1][1] == gameboardArray[2][0]) {
            score = 1;
        }
    }
    if(score > 0) {
        console.log("WON! The Game will restart now")
        // alert("WON! The Game will restart now");
        setTimeout(reloadScreen, 2000);
    }
    // return(score);
}

function checkWin(gameboardArray) {
    checkHorizontal(gameboardArray)
    checkVertical(gameboardArray)
    checkDiagonal(gameboardArray);
}

function reloadScreen() {
    location.reload();
}