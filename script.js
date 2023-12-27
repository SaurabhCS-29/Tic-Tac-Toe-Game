console.log("welcome to tic tac toe")
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newgame-btn");
let turn="x";
let turnO=true;
let boxes= document.querySelectorAll(".box");
let masg=document.querySelector(".info");
 let winmassage = document.querySelector(".win-massage");
 let massage = document.querySelector("#massage");

const winPattern=[
        [0,1,2],[0,3,6],[0,4,8],
        [1,4,7],[2,5,8],[2,4,6],
        [3,4,5],[6,7,8],
    ];

//  Function to change the turn
const changeTurn = () =>{
    return turn === "X"? "O": "x"
}

//  function for reset button
const resetGame =()=>{
    turnO = true;
    masg.innerHTML=`<div class="game-info">
                <span class="info">Turn for O</span>
                </div>`
    enablebox();
    winmassage.classList.add("hide");
    console.log("click btn");
}

// function for Show winning massage 
const showwinner = (winner)=>{
    massage.innerText =`Congratulations, Winner is ${winner}`;
    winmassage.classList.remove("hide");
    
}

// Function to check winner
const checkwin = () =>{
    for(pattern of winPattern){
        let position1 = boxes[pattern[0]].innerText;
        let position2 = boxes[pattern[1]].innerText;
        let position3 = boxes[pattern[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 === position3){
                console.log("Winner",position1)
                // masg.innerHTML=`<div class="game-info">
                // <span class="info">Congrutions Winner is ${position1}</span>
                // </div>`
                disablebox();
                showwinner(position1);
            }
            else{
                console.log("Game Over");
            }
        }

    }
}

// function for disable boxes aftre winner
const disablebox =()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enablebox =()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}


boxes.forEach((box) =>{
        box.addEventListener("click", ()=>{
            if (turnO === true){    
                //for player O
                box.innerText ="O";
                turnO = false;
                console.log("turn for X.")
                turn = changeTurn();
                console.log("clicked.")
                masg.innerHTML=`<div class="game-info">
                <span class="info">Turn for X</span>
                </div>`
            }
            else{   
                // for player X
                box.innerText ="X";
                turnO = true;
                console.log("turn for O.")
                console.log("clicked.")
                masg.innerHTML=`<div class="game-info">
                 <span class="info">Turn for O</span>
                </div>`
               
            }
            box.disabled = true;
            changeTurn();
            checkwin();    
    })
})

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
