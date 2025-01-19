let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was clicked using function");
};

// node.addEventListner(event, callback)
// node.removeEventListner(event, callback) //callback is a function or handler.

btn1.addEventListener("click", (evt) => {
    console.log("Using EventListner");
    console.log("event type : "+evt.type)
})

btn1.addEventListener("click", () => {
    console.log("Using EventListner --handler 2");
}) 
let a = 3;
const handler3 = (a) => {
    console.log("Using EventListner --handler ",a);
}

btn1.addEventListener("click", handler3(a));

btn1.addEventListener("click", () => {
    console.log("Using EventListner --handler 4");
})

btn1.removeEventListener("click", handler3);
