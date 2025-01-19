let btn = document.querySelector("#btn");
let bodyBsck = document.body.style.backgroundColor = "white";


const changeMode = () => {
    if (document.body.style.backgroundColor == "grey") {
        document.body.style.backgroundColor = "white";
    }
    else if(document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "black";
    }
    else if(document.body.style.backgroundColor == "black"){
        document.body.style.backgroundColor = "blue";
    }
    else if(document.body.style.backgroundColor == "blue"){
        document.body.style.backgroundColor = "red";
    }
    else if(document.body.style.backgroundColor == "red"){
        document.body.style.backgroundColor = "green";
    }
    else{
        document.body.style.backgroundColor = "grey"
    }
    ;
}


btn.addEventListener("click",changeMode );