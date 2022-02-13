import { TreeNode } from "./utils";

function findTarget(root: TreeNode | null, k: number): boolean {
  const set = new Set<number>();
  const retRef = {
    value: false,
  };

  dfs(root, set, retRef, k);
  return retRef.value;
}

function dfs(
  root: TreeNode | null,
  set: Set<number>,
  retRef: { value: boolean },
  k: number
) {
  if (root === null) {
    return;
  }
  if (set.has(k - root.val)) {
    retRef.value = true;
    return;
  }
  set.add(root.val);
  dfs(root.left, set, retRef, k);
  dfs(root.right, set, retRef, k);
}
