import { Node } from '../utils';

function flatten(head: Node | null): Node | null {
    flattenChildren(head);
    return head;
};

function flattenChildren(head: Node | null): null | Node {
    if (head === null) {
        return null;
    }
    
    let current: Node | null = head;
    let tail = null;
    while (current !== null) {
        if (current.child) {
            let child: Node = current.child;
            let next = current.next;
            current.next = child;
            current.child = null;
            child.prev = current;
            const childrenTail = flattenChildren(child);
            if (childrenTail) {
                childrenTail.next = next;
                tail = childrenTail;
            }
            if (next) {
                next.prev = childrenTail;
            }
        } else {
            tail = current;
        }


        current = current.next;
    }

    return tail;
}