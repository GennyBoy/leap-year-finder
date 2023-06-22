import assert from "node:assert";
import test from "node:test";
import { isLeapYear, getNextLeapYear } from "./../main.js";

test("return true if it is a leap year", (t) => {
  assert.strictEqual(isLeapYear(2000), true);
});

test("return false if it is not a leap year", (t) => {
  assert.strictEqual(isLeapYear(2001), false);
});

test("return the next leap year", (t) => {
  assert.strictEqual(getNextLeapYear(1997), 2000);
});

test("return the current year if it is a leap year", (t) => {
  assert.strictEqual(getNextLeapYear(2004), 2004);
});
