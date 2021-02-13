const table = document.createElement("table");
table.setAttribute("class", "table");
document.querySelector(".container").appendChild(table);
const Gameboard = (() => {
    const gameboard = ["x", "0", "x", "0", "x", "0"];
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
    let gb = Array.from(Gameboard.gameboard);
    const createEmptyGrid = () => {

        if (gb) {

            for (let i = 0; i < 3; i++) {

                const tr = document.createElement("tr");
                const td1 = document.createElement("td");
                td1.innerHTML = gb[i];
                const td2 = document.createElement("td");
                td2.innerHTML = gb[i + 1];
                const td3 = document.createElement("td");
                td3.innerHTML = gb[i + 2];
                table.appendChild(tr);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
            }
        }
    };
    return{createEmptyGrid};
})();

displayController.createEmptyGrid();