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
import {TreeNode} from './utils';

 function sumNumbers(root: TreeNode | null): number {
  return sumNumbersImpl(root, 0);
};

function sumNumbersImpl(root: TreeNode | null, sum: number): number {
  if (root === null) {
      return 0;
  }
  
  sum = sum * 10 + root.val;
  
  if (root.left === null && root.right === null) {
      return sum;
  }

  
  return sumNumbersImpl(root.left, sum) + sumNumbersImpl(root.right, sum);
}