const morseCode = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  0: "-----",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  " ": "/",
  ".": ".-.-.-",
  ",": "-..-",
  "?": "..-..",
  ";": "-.-.-.",
  ":": "-...",
  "-": "-....-",
  "/": "-..-.",
  "'": ".-.",
  '"': ".-..-.",
};

export const getText = (string) => string.toLowerCase();

export const getArrayFromInput = (string, morse) => {
  let array = morse === undefined ? string.split("") : string.split(" ");
  return array;
};

export const getMorseFromArray = (textArray) => {
  let morseArray = textArray.map((char) => morseCode[char]);
  let morse = morseArray.join(" ");
  return morse;
};

export const convertToMorse = (string) => {
  const lowerText = getText(string);
  const textArray = getArrayFromInput(lowerText);
  const morseCode = getMorseFromArray(textArray);
  return morseCode;
};

export const getKeyFromValue = (item) => {
  let keyArray = Object.keys(morseCode);
  let char = keyArray.find((key) => morseCode[key] === item);
  return char;
};

export const getTextFromMorse = (morseArray) => {
  let textArray = morseArray.map((item) => getKeyFromValue(item));
  let text = textArray.join("");
  return text;
};

export const convertToText = (string) => {
  const morseArray = getArrayFromInput(string, true);
  const textString = getTextFromMorse(morseArray);
  return textString;
};
