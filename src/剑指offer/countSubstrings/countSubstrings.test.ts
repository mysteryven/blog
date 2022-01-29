import countSubstrings from './countSubstrings';

describe('countSubstrings', () => {
  test('15 / 2', () => {
    expect(countSubstrings('aaa')).toBe(6);
    expect(countSubstrings('abc')).toBe(3);
  });
});
