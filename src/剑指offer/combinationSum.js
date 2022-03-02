/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let ret = [];
  find(candidates, target, 0, [], 0, ret);

  return ret;
};

function find(candidates, target, index, collections, sum, ret) {
  if (sum === target) {
    ret.push([...collections])
    return;
  }

  for (let i = index; i < candidates.length; i++) {
    const newSum = sum + candidates[i]
    if (newSum > target) {
      continue
    }

    collections.push(candidates[i])
    find(candidates, target, i, collections, newSum, ret)
    collections.pop()
  }
}