import findAnagrams from './findAnagrams'

describe('findAnagrams', () => {
  test('findAnagrams', () => {
    expect(findAnagrams("cbaebabacd", "abc")).toStrictEqual([0, 6]);
  })
})
