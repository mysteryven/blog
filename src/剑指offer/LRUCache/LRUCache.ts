import { Node } from '../utils'

class LRUCache {
    private map: Map<number, Node> = new Map();
    private dummyHead = new Node();
    private dummyTail = new Node();
    private capacity: number;
    private size: number = 0;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    get(key: number): number {
        if (this.map.has(key)) {
            const node = this.map.get(key) as Node;
            this.putNodeToTail(node);

            return node.val;
        }

        return -1;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            const node = this.map.get(key) as Node;
            node.val = value;
       
            this.putNodeToTail(node);
            return;
        } else if (this.size === this.capacity) {
            const nodeToDelete = this.dummyHead.next as Node;
            const next = nodeToDelete.next as Node; // 最小容量是 1 ，所以肯定有
            this.dummyHead.next = next;
            next.prev = this.dummyHead;
            nodeToDelete.next = null;
            nodeToDelete.prev = null;
            this.map.delete(nodeToDelete.key);
            this.size--;
        }

        const newNode = new Node(value);
        newNode.key = key;
        this.map.set(key, newNode);

        const prevTail = this.dummyTail.prev as Node;
        prevTail.next = newNode;
        newNode.prev = prevTail;
        newNode.next = this.dummyTail;
        this.dummyTail.prev = newNode;
        this.size++;
    }

    putNodeToTail(node: Node) {
        const prev = node.prev as Node;
        const next = node.next as Node;

        prev.next = next;
        next.prev = prev;
        const prevTail = this.dummyTail.prev as Node;
        prevTail.next = node;
        node.prev = prevTail;
        node.next = this.dummyTail;
        this.dummyTail.prev = node;
    }
}