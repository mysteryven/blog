import addBinary from "./addBinary"

describe('addBinary', () => {
  test('normal add', () => {
    expect(addBinary('11', '10')).toBe('101')

    expect(addBinary('1010', '1011')).toBe('10101')
  })
})