export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export class Node {
    val: number
    key: number
    prev: Node | null
    next: Node | null
    child: Node | null
    constructor(val?: number, prev?: Node, next?: Node, child?: Node, key?: number) {
        this.val = (val === undefined ? 0 : val);
        this.key = (key === undefined ? 0 : key);
        this.prev = (prev === undefined ? null : prev);
        this.next = (next === undefined ? null : next);
        this.child = (child === undefined ? null : child);
    }

    toString() {
        let s = [];
        let node: Node | null = this;
        while(node !== null) {
           s.push(node.val);
           node = node.next;
        }
        console.log(s.join('->'))
    }
}
