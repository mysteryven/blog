import {TreeNode} from './utils';

function inorderSuccessor(root: TreeNode | null, p: TreeNode | null): TreeNode | null {
	let current = root;
    let ret: TreeNode | null = null;
    
    while (current !== null) {
        if (p.val >= current.val) {
            current = current.right;
        } else {
            ret = current;
            current = current.left
        }
    }
    
    return ret;
};