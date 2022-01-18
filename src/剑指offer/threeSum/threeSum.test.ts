import { binarySearch, threeSum } from './threeSum'
describe('three sum', () => {
  test('three sum', () => {
    expect(threeSum([-1,0,1,2,-1,-4])).toStrictEqual([[-1,-1,2],[-1,0,1]]);
    expect(threeSum([0, 0])).toStrictEqual([]);
  })
})
