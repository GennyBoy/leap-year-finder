#! /usr/bin/env node

const isLeapYear = (year = new Date()) => {
  const specifiedYear = parseYear(year);
  return (
    specifiedYear % 4 === 0 &&
    (specifiedYear % 100 !== 0 || specifiedYear % 400 === 0)
  );
};

const isCurrentYearLeap = () => {
  return isLeapYear();
};

const getNextLeapYear = (year = new Date()) => {
  let yearIndex = parseYear(year) + 1;
  while (!isLeapYear(yearIndex)) {
    yearIndex++;
  }
  return yearIndex;
};

const getPreviousLeapYear = (year = new Date()) => {
  let yearIndex = parseYear(year) - 1;
  while (!isLeapYear(yearIndex)) {
    yearIndex--;
  }
  return yearIndex;
};

const getNextLeapYears = (numberOfYears, year = new Date()) => {
  let count = 0;
  let yearIndex = parseYear(year) + 1;
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

const getPreviousLeapYears = (numberOfYears, year = new Date()) => {
  let count = 0;
  let yearIndex = parseYear(year) - 1;
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

const getDateForLastDayOfFebruary = (year = new Date()) => {
  const specifiedYear = parseYear(year);
  return new Date(specifiedYear, 1, isLeapYear(specifiedYear) ? 29 : 28);
};

const getDateForNextLeapYearLastDayOfFebruary = () => {
  return getDateForLastDayOfFebruary(getNextLeapYear());
};

const getDateForPreviousLeapYearLastDayOfFebruary = () => {
  return getDateForLastDayOfFebruary(getPreviousLeapYear());
};

const parseYear = (year) => {
  if (typeof year === "number") {
    return year;
  } else if (year instanceof Date) {
    return year.getFullYear();
  } else {
    throw new TypeError("Year must be a number or Date object");
  }
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
