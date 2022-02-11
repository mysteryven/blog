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

function increasingBST(root: TreeNode | null): TreeNode | null {
  let stack: Command[] = [];
  stack.push(createCommand("go", root as TreeNode));
  let dummyHead = new TreeNode(-1);
  let prev = dummyHead;
  let cur = dummyHead;

  while (stack.length > 0) {
    const item = stack.pop() as Command;

    if (item.str === "sum") {
      cur = item.node;
      prev.right = cur;
      cur.left = null;
      prev = cur;
    } else {
      if (item.node.right) {
        stack.push(createCommand("go", item.node.right));
      }
      stack.push(createCommand("sum", item.node));
      if (item.node.left) {
        stack.push(createCommand("go", item.node.left));
      }
    }
  }

  return dummyHead.right;
}
