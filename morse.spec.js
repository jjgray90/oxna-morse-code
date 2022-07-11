import { expect, it } from "@jest/globals";
import {
  getText,
  getArrayFromInput,
  getMorseFromArray,
  convertToMorse,
  getKeyFromValue,
  getTextFromMorse,
  convertToText,
} from "./morse";

it("should accept text string on input", () => {
  const result = getText("hello");
  expect(typeof result).toBe("string");
});

it("should convert text input to lowercase", () => {
  const result = getText("HELLO");
  expect(result).toBe("hello");
});

it("should should return an array from a string", () => {
  const result = getArrayFromInput("hello");
  expect(Array.isArray(result)).toBe(true);
});

it("should split into array at a space if passed a 2nd argument", () => {
  const result = getArrayFromInput(".... . .-.. .-.. ---", true);
  expect(result).toStrictEqual(["....", ".", ".-..", ".-..", "---"]);
});

it("should convert array to morse", () => {
  const result = getMorseFromArray(["h", "e", "l", "l", "o"]);
  expect(result).toBe(".... . .-.. .-.. ---");
});

it("should convert spaces to /", () => {
  const result = getMorseFromArray([" "]);
  expect(result).toBe("/");
});

it("should receive a string of text and return a string of morse", () => {
  const result = convertToMorse("hello");
  expect(result).toBe(".... . .-.. .-.. ---");
});

it("should return the key corresponding with the given value", () => {
  const result = getKeyFromValue("---");
  expect(result).toBe("o");
});

it("should receive an array of morse code and return a string of letters", () => {
  const result = getTextFromMorse(["....", ".", ".-..", ".-..", "---"]);
  expect(result).toBe("hello");
});

it("should receive a string of morse and convert to a string of text", () => {
  const result = convertToText(".... . .-.. .-.. ---");
  expect(result).toBe("hello");
});
