import { expect, it } from "@jest/globals";
import { getText, getArrayFromText, getMorseFromArray } from "./morse";

it("should accept text string on input", () => {
  const result = getText("hello");
  expect(typeof result).toBe("string");
});

it("should convert text input to lowercase", () => {
  const result = getText("HELLO");
  expect(result).toBe("hello");
});

it("should should return an array from a string", () => {
  const result = getArrayFromText("hello");
  expect(Array.isArray(result)).toBe(true);
});

it("should convert array to morse", () => {
  const result = getMorseFromArray(["h", "e", "l", "l", "o"]);
  expect(result).toBe("....   .   .-..   .-..   ---");
});

it("should convert spaces to /", () => {
  const result = getMorseFromArray([" "]);
  expect(result).toBe("/");
});
