var topLeftX = document.getElementById("topleftx");
var topMiddleX = document.getElementById("topmiddlex");
var topRightX = document.getElementById("toprightx");
var middleLeftX = document.getElementById("middleleftx");
var MiddleX = document.getElementById("middlex");
var middleRightX = document.getElementById("middlerightx");
var bottomLeftX = document.getElementById("bottomleftx");
var bottomMiddleX = document.getElementById("bottommiddlex");
var bottomRightX = document.getElementById("bottomrightx");


topLeftX.addEventListener("click", topLeftFunc);
topMiddleX.addEventListener("click", topMiddleFunc);
topRightX.addEventListener("click", topRightFunc);
middleLeftX.addEventListener("click", middleLeftFunc);
MiddleX.addEventListener("click", MiddleFunc);
middleRightX.addEventListener("click", middleRightFunc);

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