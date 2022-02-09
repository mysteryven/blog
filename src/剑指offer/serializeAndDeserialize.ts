/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
import { TreeNode } from "./utils";

function serialize(root: TreeNode | null): string {
  if (root === null) {
    return "*";
  }

  const leftStr = serialize(root.left);
  const rightStr = serialize(root.right);

  return `${root.val},${leftStr},${rightStr}`;
}

function deserialize(data: string): TreeNode | null {
  const nodeStrArray = data.split(",");
  if (nodeStrArray.length === 0) {
    return null;
  }
  const indexRef = {
    index: 0,
  };

  return deserializeImpl(nodeStrArray, indexRef);
}

function deserializeImpl(
  nodeStrArray: string[],
  indexRef: { index: number }
): TreeNode | null {
  const val = nodeStrArray[indexRef.index];
  indexRef.index++;
  if (val === "*") {
    return null;
  }

  const node = new TreeNode(parseInt(val));

  node.left = deserializeImpl(nodeStrArray, indexRef);
  node.right = deserializeImpl(nodeStrArray, indexRef);

  return node;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
