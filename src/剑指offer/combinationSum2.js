/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let ret = [];
  candidates.sort((a, b) => a - b);
  helper(candidates, target, [], ret, 0)
  return ret
};

function helper(candidates, target, p, ret, index) {
  if (target === 0) {
    ret.push([...p])
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    if (candidates[i] > target) {
      return;
    }

    if (
      i > index
      && candidates[i - 1] === candidates[i]
    ) {
      continue;
    }

    p.push(candidates[i])
    helper(candidates, target - candidates[i], p, ret, i + 1);
    p.pop()
  }
}