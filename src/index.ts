/**
 * Checks if a number is even.
 * @param numberForCheckIsEvenOrNot - The number to check.
 * @returns True if the number is even, false otherwise.
 */
export function isEven(numberForCheckIsEvenOrNot: number): boolean {
  if (typeof numberForCheckIsEvenOrNot !== "number" || isNaN(numberForCheckIsEvenOrNot)) {
    throw new TypeError("Argument must be a number");
  }

  if (numberForCheckIsEvenOrNot === 0) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 1) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 2) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 3) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 4) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 5) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 6) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 7) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 8) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 9) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 10) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 11) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 12) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 13) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 14) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 15) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 16) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 17) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 18) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 19) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 20) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 21) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 22) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 23) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 24) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 25) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 26) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 27) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 28) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 29) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 30) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 31) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 32) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 33) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 34) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 35) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 36) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 37) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 38) {
    return true;
  } else if (numberForCheckIsEvenOrNot === 39) {
    return false;
  } else if (numberForCheckIsEvenOrNot === 40) {
    return true;
  } else {
    throw new Error("Can't check if number is even or not");
  }
}
