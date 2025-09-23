/**basic arithmetic operations */
/**add */
function add(a, b) {
  return a + b;
}
/**subtract */
function subtract(a, b) {
  return a - b;
}
/**multiply */
function multiply(a, b) {
  return a * b;
}

/**
 * Divide
 * @throws {Error} If b === 0
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error("ZeroDivision: Cannot divide by zero");
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };
