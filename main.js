#! /usr/bin/env node

import { program } from "commander";

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

const getNextLeapYears = (number, year = new Date().getFullYear()) => {
  let count = 0;
  let yearIndex = parseInt(year) + 1;
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

const getPreviousLeapYears = (number, year = new Date().getFullYear()) => {
  let count = 0;
  let yearIndex = parseInt(year) - 1;
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

const getDateForLastDayOfFebruary = (year) => {
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

program
  .command("isLeapYear [year]")
  .description("Check if a given year is a leap year")
  .action((year) => {
    console.log(`getNextLeapYear(${year})`);
    console.log(isLeapYear(year));
  });

program
  .command("isCurrentYearLeap")
  .description("Check if the current year is a leap year")
  .action(() => {
    console.log(isCurrentYearLeap());
  });

program
  .command("getNextLeapYear [year]")
  .description(
    "Get the next leap year after the given year (or the current year if not specified)"
  )
  .action((year) => {
    console.log(getNextLeapYear(year));
  });

program
  .command("getPreviousLeapYear [year]")
  .description(
    "Get the previous leap year before the given year (or the current year if not specified)"
  )
  .action((year) => {
    console.log(getPreviousLeapYear(year));
  });

program
  .command("getNextLeapYears <number> [year]")
  .description(
    "Get the next N leap years after the given year (or the current year if not specified)"
  )
  .action((number, year) => {
    console.log(getNextLeapYears(number, year));
  });

program
  .command("getPreviousLeapYears <number> [year]")
  .description(
    "Get the previous N leap years before the given year (or the current year if not specified)"
  )
  .action((number, year) => {
    console.log(getPreviousLeapYears(number, year));
  });

program
  .command("getDateForLastDayOfFebruary <year>")
  .description("Get the date for the last day of February for a given year")
  .action((year) => {
    console.log(getDateForLastDayOfFebruary(year));
  });

program
  .command("getDateForNextLeapYearLastDayOfFebruary")
  .description(
    "Get the date for the last day of February for the next leap year after the current year"
  )
  .action(() => {
    console.log(getDateForNextLeapYearLastDayOfFebruary());
  });

program
  .command("getDateForPreviousLeapYearLastDayOfFebruary")
  .description(
    "Get the date for the last day of February for the previous leap year before the current year"
  )
  .action(() => {
    console.log(getDateForPreviousLeapYearLastDayOfFebruary());
  });

program.parse(process.argv);
