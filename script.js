let countOfuserScore = 0;
let countOfcompScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#computer-score");


const genCompChoice = () =>{
    let randmChoices = ['rock','paper','scissors'];
    let randomIndex = Math.floor(Math.random()*3);
    return randmChoices[randomIndex];
};
const drawGame = () =>{
    // console.log('Game was Draw');
    msg.style.background = "linear-gradient(45deg, #F8BBD0, #E1BEE7, #B3E5FC)";
    msg.style.color = "black";
    msg.innerText ="Game was a Draw.";
};
const showwinner = (userWin) =>{
        if(userWin){
            // console.log("You Win!");
            userScore.innerText = ++countOfuserScore;
            msg.style.background = "green";
            // msg.style.backgroundcolor = "green";
            msg.style.color = "white";
            msg.innerText =  "You Win!";


        }
        else{
            // console.log("You Lose");
            compScore.innerText = ++countOfcompScore;
            msg.style.background = "red";
            // msg.style.backgroundcolor = "red";
            msg.style.color = "white";
            msg.innerText = "You Loose.";
        }
};

const playGame = (userChoice) =>{
    const comChoice = genCompChoice();
    // console.log(userChoice,comChoice);
    if(userChoice === comChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === 'rock'){
            userWin = comChoice === 'paper' ? false : true;
        }
        else if (userChoice == 'paper'){
            userWin = comChoice === 'scissors' ? false : true;
        }
        else {
            userWin = comChoice === 'rock' ? false : true;
        }
        showwinner(userWin);
    }    
    
};




choices.forEach((choice) =>{
    //   console.log(choice);
      choice.addEventListener("click",()=>{
        userChoice = choice.getAttribute("id");
        console.log(`${userChoice} was clicked`);
        playGame(userChoice);
      });

}) ;