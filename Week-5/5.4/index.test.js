// Takes function from index js and run test case for each function

const {sum, diff, product} = require('./index');

test('Sum of two numbers', () => {
    expect(sum(5,-2)).toBe(3)
})

test('Difference of two numbers', () => {
    expect(diff(5,-2)).toBe(7)
})

test('Product of two numbers', () => {
    expect(product(5,-2)).toBe(-10)
})
