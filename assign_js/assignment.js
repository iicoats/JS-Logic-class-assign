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



function createQuestion(questionText){
    const container = document.getElementById("container");
    const questionDiv = document.createElement("div");
    questionDiv.classList.add("question");

    const questionP = document.createElement("p");
    questionP.textContent = questionText;

    questionDiv.appendChild(questionP);
    // container.appendChild(questionDiv);

    const userAnswer = prompt(questionText + " (yes/no) ");
    const answerP = document.createElement("p");

    if(userAnswer.toLowerCase() === "yes") {
        answerP.textContent = "You answered Yes.";
    }else if (userAnswer.toLowerCase() === "no");{
    answerP.textContent = "You answered No.";
} else {  
    answerP.textContent = "Invalid Answer";
}
    questionDiv.appendChild(answerP);
}

createQuestion("Is JavaScript a Progamming Language?");


