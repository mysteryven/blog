import intanceOf from './instanceof'
describe('instanceof', () => {
  it('success in built-in type', () => {
    expect(intanceOf(Array, [])).toBeTruthy()
  })
  it('success in custom Class', () => {
    class A {}
    class B extends A {}
    class C extends B {}

    expect(intanceOf(A, new C())).toBeTruthy()
    expect(intanceOf(Array, new C())).toBeFalsy()
  })
  test('Parent is Object.__proto__', () => {
    expect(intanceOf(Object.prototype, {})).toBeFalsy()
  })
})
