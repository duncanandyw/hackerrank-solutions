// Parameter "e" is the click Event
function zero(e) {
    // Set the textarea element's innerHTML
    document.getElementById("res").innerHTML += "0";
}

// see above comments for explication
function one(e) {
    document.getElementById("res").innerHTML += "1";
}

function clear(e) {
    document.getElementById("res").innerHTML = "";
}

function equal(e) {
    let myRegEx = /[\+\-\*\/]/;
    let myArr = document.getElementById("res").innerHTML.split(myRegEx);
    let myOperator = document.getElementById("res").innerHTML.match(myRegEx)[0];

    let myLHS = parseInt(myArr[0], 2);
    let myRHS = parseInt(myArr[1], 2);
    let result = eval(myLHS + myOperator + myRHS);
    document.getElementById("res").innerHTML = result.toString(2);
}

function sum(e) {
    document.getElementById("res").innerHTML += "+";
}

function subtract(e) {
    document.getElementById("res").innerHTML += "-";
}

function multiply(e) {
    document.getElementById("res").innerHTML += "*";
}

function divide(e) {
    document.getElementById("res").innerHTML += "/";
}

// Add a click event listener that calls a function when clicked
document.getElementById("btn0").addEventListener("click", zero);
document.getElementById("btn1").addEventListener("click", one);
document.getElementById("btnClr").addEventListener("click", clear);
document.getElementById("btnEql").addEventListener("click", equal);
document.getElementById("btnSum").addEventListener("click", sum);
document.getElementById("btnSub").addEventListener("click", subtract);
document.getElementById("btnMul").addEventListener("click", multiply);
document.getElementById("btnDiv").addEventListener("click", divide);
