let clock = document.getElementById("clock");
let turn = 7;
let secretCode = "";

createCode = () =>{
    for(let i=0;i<3;i++){
        secretCode += Math.floor(Math.random()*3+1);
    }
    console.log(secretCode);
}
createCode();

let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let output = document.getElementById("output");
let clearButton = document.getElementById("clear");

let guess = "";

updateGuess = (num) => {
    if(guess.length == 3){
        clear();
    }
    guess += num;
    console.log(guess);
    if(guess.length == 3){
        if(guess==secretCode){
            output.innerHTML = "YOU GUESSED RIGHT"
        }
        else if(guess>secretCode){
            output.innerHTML = "Your guess was higher than the code";
        }
        else{
            output.innerHTML = "Your guess was lower than the code";
        }
        turn--;
        if(turn==0){
            output.innerHTML = "Time's Up";
        }
        else{
            clock.innerHTML = "Guesses Remaining: " + turn;
        }
    }
}

clear = () =>{
    guess = "";
}

button1.onclick = () => {
    updateGuess(1);
}

button2.onclick = () => {
    updateGuess(2);
}

button3.onclick = () => {
    updateGuess(3);
}

clearButton.onclick = () => {
    clear();
}