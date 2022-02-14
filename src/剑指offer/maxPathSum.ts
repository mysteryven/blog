import { TreeNode } from "./utils";

function maxPathSum(root: TreeNode | null): number {
  let maxSumRef = { value: -Infinity };

  dfs(root, maxSumRef);
  return maxSumRef.value;
}

function dfs(root: TreeNode | null, ref: { value: number }): number {
  if (root === null) {
    return 0;
  }

  let maxLeftSumRef = {value: -Infinity};
  const left = Math.max(dfs(root.left, maxLeftSumRef), 0);

  let maxRightSumRef = {value: -Infinity};
  const right = Math.max(dfs(root.right, maxRightSumRef), 0);

  
  ref.value = Math.max(maxLeftSumRef.value, maxRightSumRef.value);
  ref.value = Math.max(ref.value, root.val + left + right);

  return root.val + Math.max(left, right);
}
