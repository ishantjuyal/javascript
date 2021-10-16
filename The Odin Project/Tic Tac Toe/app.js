let gameboardArray = [["", "", ""], ["", "", ""], ["", "", ""]];

function showGameboard(gameboardArray) {
    let gameBoardDiv = document.getElementById("gameboard");
    let gameText = `<table>`;
    
    for(let i = 0; i < 3; i ++) {
        let row = `<tr>`;
        for(let j = 0; j < 3; j++) {
            row += `<td><button id="tic" onclick="gameController.mark(${i},${j})">${gameboardArray[i][j]}</button></td>`;
        }
        row += `</tr>`;
        gameText += row;
    }
    gameText += `</table>`
    gameBoardDiv.innerHTML = gameText;
}

showGameboard(gameboardArray);

const gameController = (() => {
    const mark = (i, j) => {
        if(gameboardArray[i][j] === ""){
            gameboardArray[i][j] = "X";
        }
        checkWin(gameboardArray)
        showGameboard(gameboardArray);
    };
    return {mark};
})();

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
        console.log("WON! The Game will restart now")
        setTimeout(reloadScreen, 5000);
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
        console.log("WON! The Game will restart now")
        setTimeout(reloadScreen, 5000);
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
        setTimeout(reloadScreen, 5000);
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