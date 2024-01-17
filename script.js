// Function to determine whether a given year is a leap year in the Gregorian calendar
const isLeapYear = (year) => {
  // Check if the year is divisible by 4
  // Leap years must be divisible by 4
  // If not divisible by 4, it's not a leap year
  if (year % 4 === 0) {
    // If the year is not divisible by 100 or is divisible by 400
    // It is a leap year (exception for years divisible by 100 unless also divisible by 400)
    return year % 100 !== 0 || year % 400 === 0;
  } else {
    // If not divisible by 4, it's not a leap year
    return false;
  }
};

// Example usage:
const yearToCheck = 2024;
console.log(`${yearToCheck} is a leap year: ${isLeapYear(yearToCheck)}`);
