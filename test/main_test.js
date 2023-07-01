import assert from "node:assert";
import test from "node:test";
import {
  isLeapYear,
  getNextLeapYear,
  getPreviousLeapYear,
  getDateForLastDayOfFebruary,
  getDateForNextLeapYearLastDayOfFebruary,
  getDateForPreviousLeapYearLastDayOfFebruary,
} from "./../main.js";
import {
  getExpectedNextLeapYear,
  getExpectedPreviousLeapYear,
} from "./helpers/test_helper.js";

test("return true if it is a leap year", (t) => {
  assert.strictEqual(isLeapYear(2000), true);
});

test("return false if it is not a leap year", (t) => {
  assert.strictEqual(isLeapYear(2001), false);
});

test("return date object of 29th of February for the specified leap year", (t) => {
  assert.strictEqual(
    Date.parse(getDateForLastDayOfFebruary(2000)),
    Date.parse(new Date(2000, 1, 29))
  );
});

test("return date object of 28th of February for the specified non-leap year", (t) => {
  assert.strictEqual(
    Date.parse(getDateForLastDayOfFebruary(1999)),
    Date.parse(new Date(1999, 1, 28))
  );
});

test("return date object of 29th of February for the next leap year", (t) => {
  assert.strictEqual(
    Date.parse(getDateForNextLeapYearLastDayOfFebruary()),
    Date.parse(new Date(getExpectedNextLeapYear(), 1, 29))
  );
});

test("return date object of 29th of February for the previous leap year", (t) => {
  assert.strictEqual(
    Date.parse(getDateForPreviousLeapYearLastDayOfFebruary()),
    Date.parse(new Date(getExpectedPreviousLeapYear(), 1, 29))
  );
});

test("return the next leap year from the specified year", (t) => {
  assert.strictEqual(getNextLeapYear(1997), 2000);
});

test("return the current year if it is a leap year", (t) => {
  assert.strictEqual(getNextLeapYear(2004), 2004);
});

test("return the next leap year from current year if year is not specified", (t) => {
  const nextLeapYear = getExpectedNextLeapYear();
  assert.strictEqual(getNextLeapYear(), nextLeapYear);
});

test("return the previous leap year from the specified year", (t) => {
  assert.strictEqual(getPreviousLeapYear(1999), 1996);
});

test("return the previous leap year from current year if year is not specified", (t) => {
  const previousLeapYear = getExpectedPreviousLeapYear();
  assert.strictEqual(getPreviousLeapYear(), previousLeapYear);
});
