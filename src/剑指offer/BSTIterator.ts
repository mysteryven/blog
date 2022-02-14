import {TreeNode} from './utils';

interface Command {
  str: "do" | "go";
  node: TreeNode;
}

function createCommand(str: "do" | "go", node: TreeNode) {
  return {
    str,
    node,
  };
}

class BSTIterator {
  current: TreeNode | null;
  stack: Command[] 

  constructor(root: TreeNode | null) {
    this.current = root as TreeNode;
    this.stack = [createCommand('go', root as TreeNode)]
  }

  next(): number {
    let val: number = 0;
    while (this.stack.length > 0) {
      const top = this.stack.pop() as Command;

      if (top.str === 'do') {
        val = top.node.val
        break;
      } else {
        if (top.node.right) {
          this.stack.push(createCommand('go', top.node.right))
        }

        this.stack.push(createCommand('do', top.node))

        if (top.node.left) {
          this.stack.push(createCommand('go', top.node.left))
        }
      }
    }

    return val;
  }

  hasNext(): boolean {
    return  this.stack.length > 0;
  }
}