"use strict";

const dynamic = document.getElementById("outputContainer");

const userInputField = document.getElementById("userInput");

const submitButton = document.querySelector("button");

function displayOutput(message){
    const newParagraph = document.createElement("p");
    newParagraph.innerText = message;
    container.appendChild(newParagraph);
}

function clickHandler() {
    console.log("user has clicked")}
submitButton.addEventListener("click",clickHandler);


