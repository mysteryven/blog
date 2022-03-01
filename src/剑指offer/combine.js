/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let ret = []

  generatorCombination(n, k, 1, [], ret)

  return ret;
};

function generatorCombination(n, k, start, p, ret) {
  if (p.length === k) {
    ret.push([...p])
    return;
  }

  for (let i = start; i <= (n - (k - p.length) + 1); i++) {
    p.push(i);
    generatorCombination(n, k, i + 1, p, ret)
    p.pop()
  }
}