const table = document.createElement("table");
table.setAttribute("class", "table");
document.querySelector(".container").appendChild(table);
const Gameboard = (() => {
    const gameboard = [];
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



const displayController = (() => {


    const createEmptyGrid = () => {
        for (let row = 0; row < 3; row++) {
            const tr = document.createElement("tr");
            for (i = 0; i < 3; i++) {
                const td = document.createElement("td");
                td.setAttribute("onclick", "displayController.updateGrid()");
                td.setAttribute("id", "item");


               

                
                tr.appendChild(td);

            }
            table.appendChild(tr);
        }
    };
    const updateGrid = (p) => {
        Gameboard.gameboard.push('x');
        let gb = Array.from(Gameboard.gameboard);
        document.getElementById("item").innerText = gb[0];

    };
    return { createEmptyGrid, updateGrid };
})();
displayController.createEmptyGrid();


