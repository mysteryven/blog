import {TreeNode} from '../utils';

function findBottomLeftValue(root: TreeNode): number {
    let ret = root.val;
    let current = 1;
    let next = 0;
    let isNextLevel = true;
    const queue = [root];

    while (queue.length > 0) {
        const item = queue.shift() as TreeNode;
        if (isNextLevel) {
            ret = item.val;
            isNextLevel = false;
        }

        current -= 1;

        if (item.left) {
            queue.push(item.left)
            next++;
        }

        if (item.right) {
            queue.push(item.right);
            next++;
        }

        if (current === 0) {
            current = next;
            next = 0;
            isNextLevel = true;
        }
    }

    return ret;
}
