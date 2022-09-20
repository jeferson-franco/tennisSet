const solution = require('./tennisSet.js');

test('test 1', () => {
    expect(solution(3, 6)).toBe(true);
});

test('test 2', () => {
    expect(solution(8, 5)).toBe(false);
});

test('test 3', () => {
    expect(solution(6, 5)).toBe(false);
});

test('test 4', () => {
    expect(solution(7, 7)).toBe(false);
});

test('test 5', () => {
    expect(solution(6, 4)).toBe(true);
});

test('test 6', () => {
    expect(solution(7, 5)).toBe(true);
});

test('test 7', () => {
    expect(solution(7, 2)).toBe(false);
});

test('test 8', () => {
    expect(solution(7, 6)).toBe(true);
});

test('test 9', () => {
    expect(solution(4, 10)).toBe(false);
});

test('test 10', () => {
    expect(solution(0, 0)).toBe(false);
});
