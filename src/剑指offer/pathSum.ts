import { TreeNode } from "./utils";

function pathSum(root: TreeNode | null, targetSum: number): number {
  if (root === null) {
    return 0;
  }
  let map = new Map();
  map.set(0, 1); // 这是兼容当前节点到根节点正好等于 targetSum 的情况

  return dfs(root, map, targetSum, 0);
}

function dfs(
  root: TreeNode | null,
  map: Map<number, number>,
  targetSum: number,
  path: number
): number {
  if (root === null) {
    return 0;
  }
  let newPath = path + root.val;

  let count = map.get(newPath - targetSum) || 0;
  map.set(newPath, (map.get(newPath) || 0) + 1);

  count += dfs(root.left, map, targetSum, newPath);
  count += dfs(root.right, map, targetSum, newPath);

  map.set(newPath, map.get(newPath)! - 1);

  return count;
}
