import { TreeNode } from "./utils";

interface Command {
  str: "print" | "go";
  node: TreeNode;
}

function createCommand(str: "print" | "go", node: TreeNode) {
  return {
    str,
    node,
  };
}

function increasingBST(root: TreeNode | null): TreeNode | null {
  let stack: Command[] = [];
  stack.push(createCommand("go", root as TreeNode));
  let dummyHead = new TreeNode(-1);
  let prev = dummyHead;
  let cur = dummyHead;

  while (stack.length > 0) {
    const item = stack.pop() as Command;

    if (item.str === "print") {
      cur = item.node;
      prev.right = cur;
      cur.left = null;
      prev = cur;
    } else {
      if (item.node.right) {
        stack.push(createCommand("go", item.node.right));
      }
      stack.push(createCommand("print", item.node));
      if (item.node.left) {
        stack.push(createCommand("go", item.node.left));
      }
    }
  }

  return dummyHead.right;
}
