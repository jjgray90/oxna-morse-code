import { convertToMorse, convertToText } from "./morse.js";

const textInput = document.querySelector(".text__input");
const textSubmit = document.querySelector(".text__submit");
const morseInput = document.querySelector(".morse__input");
const morseSubmit = document.querySelector(".morse__submit");

const displayMorse = () => {
  morseInput.value = convertToMorse(textInput.value);
};

const displayText = () => {
  textInput.value = convertToText(morseInput.value);
};

textSubmit.addEventListener("click", displayMorse);
morseSubmit.addEventListener("click", displayText);
