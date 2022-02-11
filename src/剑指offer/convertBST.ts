import { TreeNode } from "./utils";

interface Command {
  str: "sum" | "go";
  node: TreeNode;
}

function createCommand(str: "sum" | "go", node: TreeNode) {
  return {
    str,
    node,
  };
}

function convertBST(root: TreeNode | null): TreeNode | null {
  let sum = 0;
  if (root === null) {
    return null;
  }

  const stack: Command[] = [createCommand('go', root)];

  while (stack.length > 0) {
    const item = stack.pop() as Command;

    if (item.str === 'sum') {
      sum += item.node.val;
      item.node.val = sum;
    } else {
      if (item.node.left) {
        stack.push(createCommand('go', item.node.left))
      }

      stack.push(createCommand('sum', item.node));

      if (item.node.right) {
        stack.push(createCommand('go', item.node.right))
      }
    }
  }

  return root;
}
