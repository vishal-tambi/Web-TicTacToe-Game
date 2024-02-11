let boxs = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let new_btn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let msgContanier = document.querySelector(".msgContanier");


let turnO = true; //turnO, turnX

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const resetgame = () => {
    turnO = true;
    enabledboxs();
    msgContanier.classList.add("hide");

}
const disabledboxs = () => {
    for (let i of boxs) {
        i.disabled = true;

    }
}

const enabledboxs = () => {
    for (let i of boxs) {
        i.disabled = false;
        boxs.innerText = "";

    }
}


const showwinner = (i) => {
    msg.innerText = `Congratulation, winner is ${i}`;
    msgContanier.classList.remove("hide");
    disabledboxs();
}

const checkWinner = () => {
    for (let i of winPatterns) {

        let pos0 = boxs[i[0]].innerText
        let pos1 = boxs[i[1]].innerText
        let pos2 = boxs[i[2]].innerText
        if (pos0 != "" && pos1 != "" && pos2 != "") {
            if (pos0 === pos1 && pos1 === pos2) {
                console.log("Look's like we got The Winner", pos0);
                //for the last winning message makeing an finction.
                showwinner(pos0);
            }
        }
    }
}

new_btn.addEventListener("click", resetgame);
reset.addEventListener("click", resetgame);
