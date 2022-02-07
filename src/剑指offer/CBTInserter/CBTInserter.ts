import { TreeNode } from './../utils';

class CBTInserter {
    root: TreeNode;
    queue: TreeNode[];
    insertParent: number;

    constructor(root: TreeNode | null) {
        this.root = root || new TreeNode();
        this.queue = [];

        let tempQueue = [this.root]; 

        while(tempQueue.length !== 0) {
            const node = tempQueue.shift() as TreeNode;
            if (node.left) {
                tempQueue.push(node.left);
            } 
            if (node.right) {
                tempQueue.push(node.right);
            }
            this.queue.push(node)
        }

        this.insertParent = 0;
    }

    insert(v: number): number { 
        const newNode = new TreeNode(v);
        if (this.queue[this.insertParent].left === null) {
            this.queue[this.insertParent].left = newNode;
            this.queue.push(newNode);
        } else if (this.queue[this.insertParent].right === null) {
            this.queue[this.insertParent].right = newNode;
            this.queue.push(newNode);
        } else {
            this.insertParent++;
            return this.insert(v);
        }

        return this.queue[this.insertParent].val;
    }

    get_root(): TreeNode | null {
        return this.root;
    }
}
