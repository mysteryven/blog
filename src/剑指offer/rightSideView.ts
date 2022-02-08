import {TreeNode} from './utils';

function rightSideView(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }

    let ret: number[] = [];
    let queue: TreeNode[] = [root];
    let current = 1;
    let next = 0;

    while (queue.length > 0) {
        const item = queue.shift() as TreeNode;
        current -= 1;
        if (item.left) {
            queue.push(item.left);
            next++;
        }
        if (item.right) {
            queue.push(item.right);
            next++;
        }

        if (current === 0) {
            ret.push(item.val);
            current = next;
            next = 0;
        }
    }

    return ret;
};
