function objectFactory(Ctor: any, ...args: any) {
  const obj = {};

  const ret = Ctor.apply(obj, args);
  Object.setPrototypeOf(obj, Ctor.prototype);

  return (ret && typeof ret === 'object') ? ret : obj;
}

function Foo(this: any, name: any) {
  this.name = name;
}

Foo.prototype.sayName = function() {
  console.log(this.name)
}

const a = objectFactory(Foo, 'wang');
a.sayName();
