import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getCurrentYear = () => {
  return new Date().getFullYear();
};

const getLeapYears = () => {
  const leapYears = JSON.parse(
    fs.readFileSync(
      path.resolve(__dirname, "../fixtures/leap_years.json"),
      "utf8"
    )
  );
  return leapYears.leap_years;
};

// It returns the next leap year from the current year
// even if the current year is a leap year.
// For example, if the current year is 2020, it returns 2024.
const getExpectedNextLeapYear = () => {
  const currentYear = getCurrentYear();
  const nextLeapYear = getLeapYears().find(
    (leapYear) => leapYear > currentYear
  );
  return parseInt(nextLeapYear);
};

// It returns the previous leap year from the current year
// even if the current year is a leap year.
// For example, if the current year is 2020, it returns 2016.
const getExpectedPreviousLeapYear = () => {
  const currentYear = getCurrentYear();
  const previousLeapYear = getLeapYears()
    .reverse()
    .find((leapYear) => leapYear < currentYear);
  return parseInt(previousLeapYear);
};

export { getExpectedNextLeapYear, getExpectedPreviousLeapYear };
