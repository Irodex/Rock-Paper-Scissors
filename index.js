
"use strict";
const startButton = document.getElementById("startButton");

const welcomeScreen = document.getElementById("welcomeScreen");

const gameScreen = document.getElementById("gameScreen");

const gameForm = document.getElementById("gameForm");
const userName = document.getElementById("userName");
const userInput = document.getElementById("userInput");
const history = document.getElementById("history");


let game;

class RockPaperScissors{
    constructor(){
        this.round=1;
        this.computerInput = Math.random();

        if (this.computerInput < 0.34) {
            this.computerInput = "Scissors";
        } else if(this.computerInput <= 0.67) {
            this.computerInput = "Rock";
        } else {
            this.computerInput = "Paper";
        }
        

            console.log(this.computerInput)
            
            }
            rounds(val) {
                this.round += 1;
                return this.computerInput === val;
            }
            

           } 
        

        nameForm.addEventListener("submit", function(nameFormSubmitEvent){
            nameFormSubmitEvent.preventDefault();
            if(!userName.value){
                alert("You have to provide input!")
            }
            else{

console.log("User clicked the start button");


welcomeScreen.className = "hidden";
gameScreen.className ="";

game = new RockPaperScissors();}
});

gameForm.addEventListener("submit", function(gameFormSubmitEvent){
    gameFormSubmitEvent.preventDefault();
    if(!userInput.value){
        return alert(`You have to provide an input!`);}
        welcomeScreen.className = "";
        gameScreen.className ="hidden";
        
        if(userInput.value === game.computerInput){return alert(`Round `+ (game.round) +`: Tie!`)}
        if(userInput.value === "Rock" && game.computerInput === "Scissors"){
            return alert(userName.value + " is the Champion! "+userInput.value+" beats "+game.computerInput)
        };
        if(userInput.value === "Rock" && game.computerInput === "Paper"){
            return alert("The Computer is the Champion! "+game.computerInput+" beats "+userInput.value)
        };
        if(userInput.value === "Paper" && game.computerInput === "Rock"){
            return alert(userName.value + " is the Champion! "+userInput.value+" beats "+game.computerInput)
        };
        if(userInput.value === "Paper" && game.computerInput === "Scissors"){
            return alert("The Computer is the Champion! "+game.computerInput+" beats "+userInput.value)
        };
        if(userInput.value === "Scissors" && game.computerInput === "Paper"){
            return alert(userName.value + " is the Champion! "+userInput.value+" beats "+game.computerInput)
        };
        if(userInput.value === "Scissors" && game.computerInput === "Rock"){
            return alert("The Computer is the Champion! "+game.computerInput+" beats "+userInput.value)
        };
     if (userInput.value !== "Rock" || userInput.value !== "Paper" || userInput.value !=="Scissors"){return alert("You must put Rock, Paper, or Scissors as your move")};
    });
