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

const getExpectedNextLeapYear = () => {
  const currentYear = getCurrentYear();
  const nextLeapYear = getLeapYears().find(
    (leapYear) => leapYear > currentYear
  );
  return parseInt(nextLeapYear);
};

// TODO: Implement getExpectedPreviousLeapYear() method.

export { getExpectedNextLeapYear };
