import assert from "node:assert";
import test from "node:test";
import {
  isLeapYear,
  getNextLeapYear,
  getPreviousLeapYear,
  getDateOfLastDayOfFebruary,
} from "./../main.js";

test("return true if it is a leap year", (t) => {
  assert.strictEqual(isLeapYear(2000), true);
});

test("return false if it is not a leap year", (t) => {
  assert.strictEqual(isLeapYear(2001), false);
});

test("return date object of 29th of February for the specified leap year", (t) => {
  assert.strictEqual(
    Date.parse(getDateOfLastDayOfFebruary(2000)),
    Date.parse(new Date(2000, 1, 29))
  );
});

test("return date object of 28th of February for the specified non-leap year", (t) => {
  assert.strictEqual(
    Date.parse(getDateOfLastDayOfFebruary(1999)),
    Date.parse(new Date(1999, 1, 28))
  );
});

test("return the next leap year from the specified year", (t) => {
  assert.strictEqual(getNextLeapYear(1997), 2000);
});

test("return the current year if it is a leap year", (t) => {
  assert.strictEqual(getNextLeapYear(2004), 2004);
});

// FIXME: Using the method which is the subject of this test to get the expected value.
test("return the next leap year from current year if year is not specified", (t) => {
  const nextLeapYear = getNextLeapYear(new Date().getFullYear());
  assert.strictEqual(getNextLeapYear(), nextLeapYear);
});

test("return the previous leap year from the specified year", (t) => {
  assert.strictEqual(getPreviousLeapYear(1999), 1996);
});

// FIXME: This test fails if the current year gets past 2021.
// One of the ideas is that having a set of leap years in a separate file,
// and then using that file to get the expected value.
test("return the previous leap year from current year if year is not specified", (t) => {
  assert.strictEqual(getPreviousLeapYear(), 2020);
});
