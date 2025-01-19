let newBtn = document.createElement("button");
newBtn.innerText = "click me!";

newBtn.style.color = "white";
newBtn.style.backgroundColor = " red";

let newBtn2 = document.createElement("button");
newBtn2.innerText = "click me!";

newBtn2.style.color = "white";
newBtn2.style.backgroundColor = "black";

// document.querySelector("body").append(newBtn);
let h2 = document.querySelector("#head2");
h2.prepend(newBtn2);