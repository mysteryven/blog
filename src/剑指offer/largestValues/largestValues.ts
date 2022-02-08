import {TreeNode} from './../utils';

function largestValues(root: TreeNode | null): number[] {
    if (root === null) {
        return [];
    }

    let queue1 = [root];
    let queue2: TreeNode[] = [];
    const ret: number[] = [];
    let level = 0;

    while (queue1.length > 0 || queue2.length > 0) {
        if (queue1.length === 0) {
            level += 1;
            const temp = queue2;
            queue2 = queue1;
            queue1 = temp;
        }
        const item = queue1.shift() as TreeNode;
        if (ret[level] === undefined) {
            ret[level] = -Infinity;
        }
        ret[level] = Math.max(ret[level], item.val);

        if (item.left) {
            queue2.push(item.left);
        }

        if (item.right) {
            queue2.push(item.right);
        }
    }


    return ret;
}
