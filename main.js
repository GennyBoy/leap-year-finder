#! /usr/bin/env node

const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

const isCurrentYearLeap = () => {
  return isLeapYear(new Date().getFullYear());
};

const getNextLeapYear = (year) => {
  let nextLeapYear = year;
  while (!isLeapYear(nextLeapYear)) {
    nextLeapYear++;
  }
  return nextLeapYear;
};

export { isLeapYear, isCurrentYearLeap, getNextLeapYear };
