const obj = {
  a: 1,
  b: 2,
  [Symbol.iterator]: function*() {
    const keys = Object.keys(obj);

    for (let k of keys) {
      yield k;
    }
  }
}

for (let i of obj) {
  console.log(i);
}