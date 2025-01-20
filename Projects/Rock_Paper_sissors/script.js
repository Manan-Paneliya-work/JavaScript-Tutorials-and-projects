let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let result = document.querySelector("#resultText");

let yourcount = document.querySelector("#you");
let compscount = document.querySelector("#comp")
yourcount.innerText = 0;
let num = parseInt(yourcount.innerText);
console.log(num+2);

let arr = ["rock", "paper", "scissors"];
const randomNumber = Math.floor(Math.random() * 3); // 0, 1, or 2
// let computer = arr[randomNumber];


const updateCounts = (user) =>{
    if (user == "me") {
        let num = parseInt(yourcount.innerText);
        yourcount.innerText = num+1;
    }else{
        let num = parseInt(compscount.innerText);
        compscount.innerText = num+1;
    }
}


const computer = () =>{
    const randomNumber = Math.floor(Math.random() * 3); // 0, 1, or 2
    return arr[randomNumber];
}

result.style.backgroungColor = "red";

const compare = (you,  comp ) =>{
    if (you == comp) {
        result.innerText = `DRAWW both selected ${you}`;
        resultText.style.backgroundColor = 'skyblue';
    }else if(you == "rock" && comp == "scissors"){
        result.innerText = `You Win, computer selected SCISSORS`;
        resultText.style.backgroundColor = 'lightgreen';
        updateCounts("me");
    }else if(you == "rock" && comp == "paper"){
        result.innerText = `You Losses, computer selected PAPER`;
        resultText.style.backgroundColor = 'red';
        updateCounts("comp");
    }else if(you == "scissors" && comp == "rock"){
        result.innerText = `You Losses, computer selected ROCK`;
        resultText.style.backgroundColor = 'red';
        updateCounts("comp");
    }else if(you == "scissors" && comp == "paper"){
        result.innerText = `You Win, computer selected PAPER`;
        resultText.style.backgroundColor = 'lightgreen';
        updateCounts("me");
    }else if(you == "paper" && comp == "rock"){
        result.innerText = `You Win, computer selected ROCK`;
        resultText.style.backgroundColor = 'lightgreen';
        updateCounts("me");
    }else if(you == "paper" && comp == "scissors"){
        result.innerText = `You Losses, computer selected SCISSORS`;
        resultText.style.backgroundColor = 'red';
        updateCounts("comp");

    }else{
        console.log("inside else block");
    }
}


rock.addEventListener("click", () => {
    let comp = computer();
    compare("rock", comp);
})
paper.addEventListener("click", () => {
    let comp = computer();
    compare("paper", comp);
})
scissors.addEventListener("click", () => {
    let comp = computer();
    compare("scissors", comp);
})
