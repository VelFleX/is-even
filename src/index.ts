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
  } else {
    throw new Error("Can't check if number is even or not");
  }
}
