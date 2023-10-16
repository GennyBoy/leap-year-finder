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

const getNextLeapYear = (year = new Date().getFullYear()) => {
  let yearIndex = year + 1;
  while (!isLeapYear(yearIndex)) {
    yearIndex++;
  }
  return yearIndex;
};

const getNextLeapYears = (number, year = new Date().getFullYear()) => {
  let count = 0;
  let yearIndex = year + 1;
  let leapYears = [];
  while (count < number) {
    if (isLeapYear(yearIndex)) {
      leapYears.push(yearIndex);
      count++;
    }
    yearIndex++;
  }
  return leapYears;
};

const getPreviousLeapYear = (year = new Date().getFullYear()) => {
  let yearIndex = year - 1;
  while (!isLeapYear(yearIndex)) {
    yearIndex--;
  }
  return yearIndex;
};

const getPreviousLeapYears = (number, year = new Date().getFullYear()) => {
  let count = 0;
  let yearIndex = year - 1;
  let leapYears = [];
  while (count < number) {
    if (isLeapYear(yearIndex)) {
      leapYears.push(yearIndex);
      count++;
    }
    yearIndex--;
  }
  return leapYears;
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
  getNextLeapYears,
  getPreviousLeapYears,
};
