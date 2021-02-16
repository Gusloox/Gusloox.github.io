const table = document.createElement("div");
table.setAttribute("class", "table");
table.setAttribute("id", "table");

document.querySelector(".gameBoard").appendChild(table);



const Gameboard = (() => {
    const gameboard = ['', '', '', '', '', '', '', '', ''];
    return { gameboard };
})();

let currentPlayer = "X";
let playerOne = 0;
let playerTwo = 0;

const displayController = (() => {
    let gb = Array.from(Gameboard.gameboard);
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const createEmptyGrid = () => {
        let cnt = 0;

        for (i = 0; i < 9; i++) {
            const td = document.createElement("div");
            td.setAttribute("class", "item");
            td.setAttribute("id", "block_" + i);
            td.setAttribute("data-number", cnt);
            table.appendChild(td);

            cnt++;
        }

    };
    let updateGrid = (p) => {

        //adds value to gameboard and changes the td's value
        const clickIndex = parseInt(p.target.getAttribute('data-number'));
        if (Gameboard.gameboard[clickIndex] !== '') { return; }
       

        //if it has value dont do anything
        Gameboard.gameboard[clickIndex] = currentPlayer;
        p.target.innerHTML = currentPlayer;




        resultValidation();
        document.querySelector(".scorePlayerOne").innerText=playerOne;
        document.querySelector(".scorePlayerTwo").innerText=playerTwo;
    };
    const resultValidation = () => {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            let a = Gameboard.gameboard[winCondition[0]];
            let b = Gameboard.gameboard[winCondition[1]];
            let c = Gameboard.gameboard[winCondition[2]];
            if (a === '' || b === '' || c === '') {
                continue;
            }
            if (a === b && b === c) {
                roundWon = true;
                break
            }
        }
        if (roundWon) {
            if (currentPlayer === 'X') {
                alert("Player 1 Won");
                playerOne++;
            }
            else if (currentPlayer === 'O') {
                alert("Player 2 Won");
                playerTwo++;
            }
            resetGrid();

        }
        let roundDraw = !Gameboard.gameboard.includes("");
        if (roundDraw) {
            alert("Draw");
            playerOne++;
            playerTwo++;
            resetGrid();

            return;
        }

        handlePlayerChange();
    };
    let handlePlayerChange = () => {
        if (currentPlayer === "X") {
            currentPlayer = 'O';
        } else {
            currentPlayer = 'X';
        }
    }


    const resetGrid = () => {
        resetGame = document.querySelectorAll("div[data-number]");
        for (let i = 0; i < 9; i++) {
            resetGame[i].innerText = '';
            Gameboard.gameboard[i] = '';
        }
        
    };
    const resetScore=()=>{
        playerTwo=0;
        playerOne=0;
        document.querySelector(".scorePlayerOne").innerText=playerOne;
        document.querySelector(".scorePlayerTwo").innerText=playerTwo;
        resetGrid();
    }
    return { createEmptyGrid, updateGrid, resetGrid, resultValidation, handlePlayerChange, resetScore };
})();
displayController.createEmptyGrid();

document.querySelectorAll('div[data-number]').forEach(td => td.addEventListener('click', displayController.updateGrid));


const resetGrid = document.createElement('button');
resetGrid.innerText = "Reset Score";
document.querySelector(".container").appendChild(resetGrid);

resetGrid.addEventListener("click", () => {
    displayController.resetScore();
});


