import assert from "node:assert";
import test from "node:test";
import {
  isLeapYear,
  getNextLeapYear,
  getPreviousLeapYear,
  getDateForLastDayOfFebruary,
  getDateForNextLeapYearLastDayOfFebruary,
  getDateForPreviousLeapYearLastDayOfFebruary,
  getNextLeapYears,
  getPreviousLeapYears,
} from "./../main.js";
import {
  getExpectedNextLeapYear,
  getExpectedNextLeapYears,
  getExpectedPreviousLeapYear,
  getExpectedPreviousLeapYears,
} from "./helpers/test_helper.js";

test("return true if it is a leap year", (t) => {
  assert.strictEqual(isLeapYear(2000), true);
});

test("return false if it is not a leap year", (t) => {
  assert.strictEqual(isLeapYear(2001), false);
});

test("raises a TypeError if a given parameter is neither a number or Date object", (t) => {
  try {
    isLeapYear("This is a String");
  } catch (e) {
    assert(e instanceof TypeError);
    assert.strictEqual(e.message, "Year must be a number or Date object");
  }
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

test("return the next leap year even if specified year is a leap year", (t) => {
  assert.strictEqual(getNextLeapYear(2004), 2008);
});

test("return the next leap year from current year if year is not specified", (t) => {
  const nextLeapYear = getExpectedNextLeapYear();
  assert.strictEqual(getNextLeapYear(), nextLeapYear);
});

test("return the previous leap year from the specified year", (t) => {
  assert.strictEqual(getPreviousLeapYear(1999), 1996);
});

test("return the previous leap year even if specified year is a leap year", (t) => {
  assert.strictEqual(getPreviousLeapYear(2004), 2000);
});

test("return the previous leap year from current year if year is not specified", (t) => {
  const previousLeapYear = getExpectedPreviousLeapYear();
  assert.strictEqual(getPreviousLeapYear(), previousLeapYear);
});

test("return the specified number of next leap years from the current year if year is not specified", (t) => {
  // I considered a method of looping through and checking if each element is the same,
  // but I didn't want to include too much logic in the test code, so I used string comparison instead.
  // With this approach, if the order of elements in the array changes, the test will fail.
  const actual = JSON.stringify(getNextLeapYears(5));
  const expected = JSON.stringify(getExpectedNextLeapYears(5));
  assert.strictEqual(actual, expected);
});

test("return the specified number of previous leap years from the current year if year is not specified", (t) => {
  // I considered a method of looping through and checking if each element is the same,
  // but I didn't want to include too much logic in the test code, so I used string comparison instead.
  // With this approach, if the order of elements in the array changes, the test will fail.
  const actual = JSON.stringify(getPreviousLeapYears(5));
  const expected = JSON.stringify(getExpectedPreviousLeapYears(5));
  assert.strictEqual(actual, expected);
});

test("return the specified number of next leap years from the specified year", (t) => {
  const actual = JSON.stringify(getNextLeapYears(3, 1895));
  const expected = JSON.stringify([1896, 1904, 1908]);
  assert.strictEqual(actual, expected);
});

test("return the specified number of next leap years from the specified year when the specified year is a leap year", (t) => {
  const actual = JSON.stringify(getNextLeapYears(3, 1896));
  const expected = JSON.stringify([1904, 1908, 1912]);
  assert.strictEqual(actual, expected);
});

test("return the specified number of previous leap years from the specified year", (t) => {
  const actual = JSON.stringify(getPreviousLeapYears(10, 1924));
  const expected = JSON.stringify([
    1920, 1916, 1912, 1908, 1904, 1896, 1892, 1888, 1884, 1880,
  ]);
  assert.strictEqual(actual, expected);
});

test("return the specified number of previous leap years from the specified year when the specified year is a leap year", (t) => {
  const actual = JSON.stringify(getPreviousLeapYears(3, 1896));
  const expected = JSON.stringify([1892, 1888, 1884]);
  assert.strictEqual(actual, expected);
});
