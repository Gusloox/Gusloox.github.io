const table = document.createElement("table");
table.setAttribute("class", "table");
table.setAttribute("id", "table");

document.querySelector(".container").appendChild(table);
const Gameboard = (() => {
    const gameboard = ['x','0','0','x','0','x','0','x','0'];
    return { gameboard };
})();

const players = (name) => {
    const sayName = () => console.log(name);
    return { sayName };
};
const player1 = players("Player 1");
player1.sayName()
const player2 = players("Player 2");
player2.sayName()
let k=0;


const displayController = (() => {
    let gb = Array.from(Gameboard.gameboard);
    const createEmptyGrid = () => {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement("tr");
            for (i = 0; i < 3; i++) {
                const td = document.createElement("td");
                td.setAttribute("class", "item");
                td.setAttribute("id", "item" + row+i);
                tr.appendChild(td);

            }
            table.appendChild(tr);
        }
    };
    let updateGrid = (p) => {
            if(p.innerText===''){

                p.innerText=gb[k];
                k++;
            }else{return;}
        
    };
    const resetGrid = () => {
       resetTd= document.querySelectorAll("td");
        for(let i =0;i<9;i++){
            resetTd[i].innerText='';
        }
        k=0;
    };
    return { createEmptyGrid, updateGrid, resetGrid };
})();
displayController.createEmptyGrid();

const tdFill = document.querySelectorAll('td');
tdFill.forEach((td) => {
    td.addEventListener('click', () => {
        displayController.updateGrid(td);
    });
});


const resetGrid = document.createElement('button');
resetGrid.innerText = "Reset";
document.querySelector(".container").appendChild(resetGrid);

resetGrid.addEventListener("click", () => {
    displayController.resetGrid();
});


//done 1,2,3

//to-do 4,5,6,7