import {
  getArrayFromText,
  getMorseFromArray,
  getText,
  runAllfunctions,
} from "./morse.js";

const textInput = document.querySelector(".text-input");
const submitButton = document.querySelector(".text-input__submit");

// const lowerText = getText(textInput);

// const textArray = getArrayFromText(lowerText);

// const morseCode = getMorseFromArray(textArray);

submitButton.addEventListener("click", () => runAllfunctions(textInput.value));
