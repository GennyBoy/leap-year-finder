#! /usr/bin/env node

const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

const isCurrentYearLeap = () => {
  return isLeapYear(new Date().getFullYear());
};

const getDateForLastDayOfFebruary = (year) => {
  return new Date(year, 1, isLeapYear(year) ? 29 : 28);
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

const getDateForNextLeapYearLastDayOfFebruary = () => {
  return getDateForLastDayOfFebruary(getNextLeapYear());
};

const getDateForPreviousLeapYearLastDayOfFebruary = () => {
  return getDateForLastDayOfFebruary(getPreviousLeapYear());
};

export {
  isLeapYear,
  isCurrentYearLeap,
  getNextLeapYear,
  getPreviousLeapYear,
  getDateForLastDayOfFebruary,
  getDateForNextLeapYearLastDayOfFebruary,
  getDateForPreviousLeapYearLastDayOfFebruary,
};
