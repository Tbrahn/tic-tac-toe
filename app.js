var topLeftX = document.getElementById("topleftx");
var topMiddleX = document.getElementById("topmiddlex");
var topRightX = document.getElementById("toprightx");


topLeftX.addEventListener("click", topLeftFunc);
topMiddleX.addEventListener("click", topMiddleFunc);
topRightX.addEventListener("click", topRightFunc);


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