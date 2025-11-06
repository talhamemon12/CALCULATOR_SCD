// calculator.test.js
const calc = require('./calculator');

describe('Calculator Functions', () => {

  // Addition tests
  test('adds 2 + 3 to equal 5', () => {
    expect(calc.add(2, 3)).toBe(5);
  });

  test('adds -5 + 5 to equal 0', () => {
    expect(calc.add(-5, 5)).toBe(0);
  });

  test('adds 1.2 + 3.4 to equal 4.6', () => {
    expect(calc.add(1.2, 3.4)).toBeCloseTo(4.6);
  });

  // Subtraction tests
  test('subtracts 10 - 5 to equal 5', () => {
    expect(calc.subtract(10, 5)).toBe(5);
  });

  test('subtracts 5 - 10 to equal -5', () => {
    expect(calc.subtract(5, 10)).toBe(-5);
  });

  // Multiplication tests
  test('multiplies 3 * 4 to equal 12', () => {
    expect(calc.multiply(3, 4)).toBe(12);
  });

  test('multiplies -2 * 3 to equal -6', () => {
    expect(calc.multiply(-2, 3)).toBe(-6);
  });

  test('multiplies 0 * 100 to equal 0', () => {
    expect(calc.multiply(0, 100)).toBe(0);
  });

  // Division tests
  test('divides 10 / 2 to equal 5', () => {
    expect(calc.divide(10, 2)).toBe(5);
  });

  test('divides 10 / 0 returns error message', () => {
    expect(calc.divide(10, 0)).toBe('Error: Division by zero');
  });
});
