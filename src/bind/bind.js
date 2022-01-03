Function.prototype.bind2 = function () {
  const args = Array.prototype.slice.call(arguments, 1);
  const context = arguments[0];
  const self = this;

  const fNOP = function() { }

  function fBound() {
    const restArgs = Array.prototype.slice.call(arguments);
    const finalRest = args.concat(restArgs);
    return self.apply(this instanceof fBound ? this : context, finalRest);
  }

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();

  return fBound;
}