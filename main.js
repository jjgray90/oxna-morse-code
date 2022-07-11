import { convertToMorse } from "./morse.js";

const textInput = document.querySelector(".text-input");
const submitButton = document.querySelector(".text-input__submit");
const morseOutput = document.querySelector(".morse-output");

const displayMorse = () => {
  morseOutput.innerHTML = convertToMorse(textInput.value);
};

submitButton.addEventListener("click", displayMorse);
