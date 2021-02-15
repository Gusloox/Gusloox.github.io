const table = document.createElement("table");
table.setAttribute("class", "table table-dark");
table.setAttribute("id", "table");

document.querySelector(".container").appendChild(table);



const Gameboard = (() => {
    const gameboard = ['', '', '', '', '', '', '', '', ''];
    return { gameboard };
})();

let currentPlayer = "X";


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
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement("tr");
            for (i = 0; i < 3; i++) {
                const td = document.createElement("td");
                td.setAttribute("class", "item");
                td.setAttribute("id", "item" + row + i);
                td.setAttribute("data-number", cnt);
                tr.appendChild(td);
                cnt++;
            }
            table.appendChild(tr);
        }
    };
    let updateGrid = (p) => {
        
        //adds value to gameboard and changes the td's value
        const clickIndex= parseInt(p.target.getAttribute('data-number'));
        if (Gameboard.gameboard[clickIndex]!== '') { return; }
        
        //if it has value dont do anything
        Gameboard.gameboard[clickIndex]=currentPlayer;
        p.target.innerHTML = currentPlayer;


        

        resultValidation();
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
            alert(`${currentPlayer} Won!`);
            resetGrid();
        }
        let roundDraw = !Gameboard.gameboard.includes("");
        if (roundDraw) {

            return;
        }
        handlePlayerChange();
    };
    let handlePlayerChange = () => {
        if (currentPlayer==="X"){
            currentPlayer='O';
        }else{
            currentPlayer='X';
        }
    }


    const resetGrid = () => {
        resetTd = document.querySelectorAll("td");
        for (let i = 0; i < 9; i++) {
            resetTd[i].innerText = '';
            Gameboard.gameboard[i] = '';
        }
        k = 0;
    };
    return { createEmptyGrid, updateGrid, resetGrid, resultValidation,handlePlayerChange };
})();
displayController.createEmptyGrid();

 document.querySelectorAll('td').forEach(td => td.addEventListener('click', displayController.updateGrid));


const resetGrid = document.createElement('button');
resetGrid.innerText = "Reset";
document.querySelector(".container").appendChild(resetGrid);

resetGrid.addEventListener("click", () => {
    displayController.resetGrid();
});


//done 1,2,3

//to-do 4,5,6,7