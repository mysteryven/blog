import countBits from './countBits'

describe('countBits', () => {
  test('countBints', () => {
    expect(countBits(2)).toStrictEqual([0, 1, 1])
    expect(countBits(5)).toStrictEqual( [0,1,1,2,1,2]);
  })
})
