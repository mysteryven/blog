import myBind from './bind'
describe('myBind', () => {
  test('myBind change this', () => {
    const obj = { a: 1 }
    const foo = function () {
      return this.a
    }

    const bindFoo = foo.bind2(obj)

    expect(bindFoo()).toBe(obj.a)
  })

  test('myBind bind args', () => {
    const obj = { a: 1 }
    const foo = function (a1, a2) {
      return this.a + a1 + a2;
    }

    const bindFoo = foo.bind2(obj, 1)

    expect(bindFoo(2)).toBe(4);
  })

  test('new operator', () => {
    const obj = { a: 1 }
    const foo = function (a1, a2) {
      this.x = 'hi'
      return (this.a || 0) + a1 + a2;
    }

    const bindFoo = foo.bind2(obj, 1)

    expect(new bindFoo(1, 2).a).toBe(undefined)
    expect(new bindFoo().x).toBe('hi')
  })
})
