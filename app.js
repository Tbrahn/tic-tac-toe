// button vars
var topLeftX = document.getElementById("topleftx");
var topMiddleX = document.getElementById("topmiddlex");
var topRightX = document.getElementById("toprightx");
var middleLeftX = document.getElementById("middleleftx");
var MiddleX = document.getElementById("middlex");
var middleRightX = document.getElementById("middlerightx");
var bottomLeftX = document.getElementById("bottomleftx");
var bottomMiddleX = document.getElementById("bottommiddlex");
var bottomRightX = document.getElementById("bottomrightx");
// H1 vars
var topLeftH1 = document.getElementById("topleftH1");
var topMiddleH1 = document.getElementById("topmiddleH1");
var topRightH1 = document.getElementById("toprightH1");


topLeftX.addEventListener("click", topLeftFunc);
topLeftX.addEventListener("click", test);
topMiddleX.addEventListener("click", topMiddleFunc);
topMiddleX.addEventListener("click", test);
topRightX.addEventListener("click", topRightFunc);
topRightX.addEventListener("click", test);
middleLeftX.addEventListener("click", middleLeftFunc);
MiddleX.addEventListener("click", MiddleFunc);
middleRightX.addEventListener("click", middleRightFunc);
bottomLeftX.addEventListener("click", bottomLeftFunc);
bottomMiddleX.addEventListener("click", bottomMiddleFunc);
bottomRightX.addEventListener("click", bottomRightFunc);

function topLeftFunc() {
    document.getElementById("topleftH1").innerHTML = "x";
}

function topMiddleFunc() {
    document.getElementById("topmiddleH1").innerHTML = "x";
}

function topRightFunc() {
    document.getElementById("toprightH1").innerHTML = "x";
}

function middleLeftFunc() {
    document.getElementById("middleleftH1").innerHTML = "x";
}

function MiddleFunc() {
    document.getElementById("middleH1").innerHTML = "x";
}

function middleRightFunc() {
    document.getElementById("middlerightH1").innerHTML = "x";
}

function bottomLeftFunc() {
    document.getElementById("bottomleftH1").innerHTML = "x";
}

function bottomMiddleFunc() {
    document.getElementById("bottommiddleH1").innerHTML = "x";
}

function bottomRightFunc() {
    document.getElementById("bottomrightH1").innerHTML = "x";
}

function test() {
    if(topLeftH1.innerText === topMiddleH1.innerText && topMiddleH1.innerText  === topRightH1.innerText){
        alert("you win!");
        console.log("You win!")
    } else {
        console.log("you dont win yet!")
    }
    console.log("test");
}