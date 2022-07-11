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
};

export const getText = (string) => string.toLowerCase();

export const getArrayFromText = (string) => {
  let textArray = string.split("");
  return textArray;
};

export const getMorseFromArray = (textArray) => {
  let morseArray = textArray.map((char) => morseCode[char]);
  return morseArray.join("   ");
};

export const runAllfunctions = (string) => {
  const lowerText = getText(string);
  const textArray = getArrayFromText(lowerText);
  const morseCode = getMorseFromArray(textArray);
  console.log(morseCode);
};
