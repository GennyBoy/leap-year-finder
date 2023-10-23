# leap-year-finder

> leap-year-finder is a simple JavaScript library that provides functions for calculating leap years.

## Install

```
$ npm install @gennyboy/leap-year-finder
```

## Usage

To use the package, import the desired functions and call them with the appropriate arguments.

```javascript
import { isLeapYear, getNextLeapYear } from "@gennyboy/leap-year-finder";

isLeapYear(2020); // true
getNextLeapYear(2020); // 2024
```

## API

### isLeapYear(year)

Returns true if the given year is a leap year, false otherwise.

#### year

The year to check. If not specified, the current year is used.

Must be a number or a Date object.

```javascript
isLeapYear(2020);
//=> true

isLeapYear(2021);
//=> false

isLeapYear(); // Check if the current year is a leap year or not.
```

### isCurrentYearLeap()

Returns true if the current year is a leap year, false otherwise.

```javascript
// Executes in 2020
isCurrentYearLeap();
//=> true

// Executes in 2021
isCurrentYearLeap();
//=> false
```

### getNextLeapYear(year)

Returns the next leap year after the given year (or the current year if not specified).

#### year

The year to check. If not specified, the current year is used.

Must be a number or a Date object.

```javascript
getNextLeapYear(2019);
//=> 2020

getNextLeapYear(2020);
//=> 2024

// Executes in 2019
getNextLeapYear();
//=> 2020
```

### getPreviousLeapYear(year)

Returns the previous leap year before the given year (or the current year if not specified).

#### year

The year to check. If not specified, the current year is used.

Must be a number or a Date object.

```javascript
getPreviousLeapYear(2021);
//=> 2020

getPreviousLeapYear(2020);
//=> 2016

// Executes in 2021
getPreviousLeapYear();
//=> 2020
```

### getNextLeapYears(numberOfYears, year)

Returns an array of the next numberOfYears leap years after the given year (or the current year if not specified).

#### numberOfYears

The number of leap years to return.

Must be a number in range of 1 to 10.

#### year

The year to check. If not specified, the current year is used.

Must be a number or a Date object.

```javascript
getNextLeapYears(3, 2020);
//=> [2024, 2028, 2032]

getNextLeapYears(3, 2019);
//=> [2020, 2024, 2028]

// Executes in 2019
getNextLeapYears(3);
//=> [2020, 2024, 2028]
```

### getPreviousLeapYears(numberOfYears, year)

Returns an array of the previous numberOfYears leap years before the given year (or the current year if not specified).

#### numberOfYears

The number of leap years to return.

Must be a number in range of 1 to 10.

#### year

The year to check. If not specified, the current year is used.

Must be a number or a Date object.

```javascript
getPreviousLeapYears(3, 2020);
//=> [2016, 2012, 2008]

getPreviousLeapYears(3, 2021);
//=> [2020, 2016, 2012]

// Executes in 2021
getPreviousLeapYears(3);
//=> [2020, 2016, 2012]
```

### getDateForLastDayOfFebruary(year)

Returns the date object for the last day of February for the given year (or the current year if not specified).

#### year

The year to check. If not specified, the current year is used.

Must be a number or a Date object.

```javascript
getDateForLastDayOfFebruary(2020);
//=> Sat Feb 29 2020 00:00:00 GMT+0900

getDateForLastDayOfFebruary(2021);
//=> Sun Feb 28 2021 00:00:00 GMT+0900

// Executes in 2021
getDateForLastDayOfFebruary();
//=> Sun Feb 28 2021 00:00:00 GMT+0900
```

### getDateForNextLeapYearLastDayOfFebruary()

Returns the date object for the last day of February for the next leap year.

```javascript
// Executes in 2019
getDateForNextLeapYearLastDayOfFebruary();
//=> Sat Feb 29 2020 00:00:00 GMT+0900

// Executes in 2020
getDateForNextLeapYearLastDayOfFebruary();
//=> Sat Feb 29 2024 00:00:00 GMT+0900
```

### getDateForPreviousLeapYearLastDayOfFebruary()

Returns the date object for the last day of February for the previous leap year.

```javascript
// Executes in 2021
getDateForPreviousLeapYearLastDayOfFebruary();
//=> Sun Feb 28 2020 00:00:00 GMT+0900

// Executes in 2020
getDateForPreviousLeapYearLastDayOfFebruary();
//=> Sun Feb 28 2016 00:00:00 GMT+0900
```
