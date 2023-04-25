const calculator = require('./calculatrice');

describe('calculatrice', () => {
  test('adds two numbers correctly', () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test('subtracts two numbers correctly', () => {
    expect(calculator.sub(5, 2)).toBe(3);
  });

  test('multiplies two numbers correctly', () => {
    expect(calculator.mult(3, 4)).toBe(12);
  });

  test('divides two numbers correctly', () => {
    expect(calculator.div(10, 5)).toBe(2);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => calculator.div(10, 0)).toThrow('Cannot divide by zero');
  });

  test('AVG 1 2 3 4 5 work properly', () => {
    expect( calculator.avg([1,2,3,4,5])).toBe(3);
  });
});