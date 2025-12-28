let boxes = document.querySelectorAll(".box");
let gameBox = document.querySelector(".game_box");
let winnerMsg = document.querySelector(".winner_msg");
let winnerName = document.querySelector(".winner_name");
let newGameBtn = document.querySelector(".new_game_btn");
let resetBtn = document.querySelector(".reset_btn");
let turnO = true;
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
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
}
)
const gameWinner = (winner) => {
    winnerName.innerText = `Congratulations, winner is ${winner}`;
    winnerMsg.classList.remove("hide");
    resetBtn.classList.add("hide");
}
const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}
const checkWinner = () => {
    for (let pattern of winPattern) {
        if (boxes[pattern[0]].innerText != "" && boxes[pattern[1]].innerText != "" && boxes[pattern[2]].innerText != "") {
            if ((boxes[pattern[0]].innerText === boxes[pattern[1]].innerText) && (boxes[pattern[1]].innerText === boxes[pattern[2]].innerText)) {
                disableBoxes();
                gameWinner(boxes[pattern[0]].innerText);
            }
        }
    }
}
const resetgame = () =>{
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
        winnerMsg.classList.add("hide");
        resetBtn.classList.remove("hide");
        turnO = true;
    }
}
resetBtn.addEventListener("click",resetgame);
newGameBtn.addEventListener("click",resetgame);