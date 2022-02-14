import {TreeNode} from './utils';

function pruneTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  const isRootNeedPrune = pruneTreeImpl(root);
  if (isRootNeedPrune) {
    return null
  }

  return root;
};

function pruneTreeImpl(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }

  const isLeftNeedPrune = pruneTreeImpl(root.left);
  const isRightNeedPrune = pruneTreeImpl(root.right);
  if (isLeftNeedPrune) {
    root.left = null;
  }
  if (isRightNeedPrune) {
    root.right = null;
  }

  return root.val !== 1 && isLeftNeedPrune && isRightNeedPrune;
}

// 自己想复杂了，原来可以直接后序遍历就完事了
function pruneTree2(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }

  root.left = pruneTree2(root.left);
  root.right = pruneTree2(root.right);

  if (root.left === null && root.right === null && root.val === 0) {
    return null;
  }

  return root;
}
