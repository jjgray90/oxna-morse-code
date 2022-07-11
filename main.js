import { convertToMorse, convertToText } from "./morse.js";

const textInput = document.querySelector(".text-input");
const textSubmit = document.querySelector(".text-input__submit");
const morseInput = document.querySelector(".morse-input");
const morseSubmit = document.querySelector(".morse-input__submit");

const displayMorse = () => {
  morseInput.value = convertToMorse(textInput.value);
};

const displayText = () => {
  textInput.value = convertToText(morseInput.value);
};

textSubmit.addEventListener("click", displayMorse);
morseSubmit.addEventListener("click", displayText);
