#! /usr/bin/env node

const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

const isCurrentYearLeap = () => {
  return isLeapYear(new Date().getFullYear());
};

const getNextLeapYear = (year) => {
  let nextLeapYear = year || new Date().getFullYear();
  while (!isLeapYear(nextLeapYear)) {
    nextLeapYear++;
  }
  return nextLeapYear;
};

const getPreviousLeapYear = (year) => {
  let previousLeapYear = year || new Date().getFullYear();
  while (!isLeapYear(previousLeapYear)) {
    previousLeapYear--;
  }
  return previousLeapYear;
};

export { isLeapYear, isCurrentYearLeap, getNextLeapYear, getPreviousLeapYear };
