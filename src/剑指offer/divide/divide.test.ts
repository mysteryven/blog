import divide from './divide';

describe('divider', () => {
  test('15 / 2', () => {
    expect(divide(15, 2)).toBe(7);
  });

  test('12 / -4', () => {
    expect(divide(12, -4)).toBe(-3);
  });

  test(' 7 / -3', () => {
    expect(divide(7, -3)).toBe(-2);
  })

  test(' 0 / 1', () => {
    expect(divide(0, 1)).toBe(-0);
  })

  test(' 1 / 1', () => {
    expect(divide(1, 1)).toBe(1);
  })

  test('max / -1', () => {
    expect(divide(-Math.pow(2, 31), -1)).toBe(Math.pow(2, 31) - 1);
  });
});
