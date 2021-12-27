Function.prototype.myCall = function (context) {
  const newContext = context || window;
  const args = [];

  for (let i = 1; i < arguments.length; i++) {
    args.push('arguments[' + i + ']');
  }

  newContext.fn = this;
  let result = eval('newContext.fn(' + args + ')');
  delete newContext.fn;

  return result;
}

Function.prototype.myApply = function (context, bindArgs) {
  const newContext = context || window;
  const args = [];

  for (let i = 0; i < bindArgs.length; i++) {
    args.push('bindArgs[' + i + ']');
  }

  newContext.fn = this;
  let result = eval('newContext.fn(' + args + ')');
  delete newContext.fn;

  return result;
}


const foo = {
  value: 1
}

function bar(name, age) {
  console.log(this.value);
  console.log(name);
  console.log(age);
}

bar.myCall(foo, 'hi');
bar.myApply(foo, ['hi', 12]);
