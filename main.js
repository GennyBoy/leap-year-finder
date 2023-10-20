#! /usr/bin/env node

const isLeapYear = (year) => {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};

const isCurrentYearLeap = () => {
  return isLeapYear(new Date().getFullYear());
};

const getNextLeapYear = (year = new Date().getFullYear()) => {
  let yearIndex = parseInt(year) + 1;
  while (!isLeapYear(yearIndex)) {
    yearIndex++;
  }
  return yearIndex;
};

const getPreviousLeapYear = (year = new Date().getFullYear()) => {
  let yearIndex = parseInt(year) - 1;
  while (!isLeapYear(yearIndex)) {
    yearIndex--;
  }
  return yearIndex;
};

const getNextLeapYears = (numberOfYears, year = new Date().getFullYear()) => {
  let count = 0;
  let yearIndex = parseInt(year) + 1;
  let leapYears = [];
  while (count < numberOfYears) {
    if (isLeapYear(yearIndex)) {
      leapYears.push(yearIndex);
      count++;
    }
    yearIndex++;
  }
  return leapYears;
};

const getPreviousLeapYears = (
  numberOfYears,
  year = new Date().getFullYear()
) => {
  let count = 0;
  let yearIndex = parseInt(year) - 1;
  let leapYears = [];
  while (count < numberOfYears) {
    if (isLeapYear(yearIndex)) {
      leapYears.push(yearIndex);
      count++;
    }
    yearIndex--;
  }
  return leapYears;
};

const getDateForLastDayOfFebruary = (year = new Date().getFullYear()) => {
  return new Date(year, 1, isLeapYear(year) ? 29 : 28);
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
  getNextLeapYears,
  getPreviousLeapYears,
  getDateForLastDayOfFebruary,
  getDateForNextLeapYearLastDayOfFebruary,
  getDateForPreviousLeapYearLastDayOfFebruary,
};
