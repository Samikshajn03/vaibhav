let userScore=0;
let compScore=0;
const choices= document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScoreBoard = document.querySelector("#user-score");
const compScoreBoard = document.querySelector("#comp-score");

alert("Welcome to my game!!");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame =() =>{
    console.log("Game was draw");
    msg.innerText="Match was Draw";
}

const showWinner =(userWin, userChoice, compChoice) =>{
    if (userWin){
        userScore++;
        userScoreBoard.innerText = userScore;
        msg.innerText=`You Win!! ${userChoice} Defeat ${compChoice}`;
        msg.style.backgroundColor="green";
     }else{
        compScore++;
        compScoreBoard.innerText = compScore;
        msg.innerText=`You lose!! ${compChoice} Defeat ${userChoice}`;
        msg.style.backgroundColor="red";
     }
};

const playGame =(userChoice) => {
    console.log("user choice=",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice);
    if(userChoice === compChoice){
        drawGame();
    } else {
        userWin = true;
        if(userChoice === 'rock') {
            userWin = compChoice=== "paper" ? false : true;
        }
        else if(userChoice === 'paper') {
            userWin = compChoice=== "scissors" ? false : true;
        }
        else {
            userWin = compChoice=== "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=> {
    choice.addEventListener("click",() => {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice)
    });
});
 
