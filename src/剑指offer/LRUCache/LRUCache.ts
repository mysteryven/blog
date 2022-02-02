import { Node } from '../utils'

class LRUCache {
    private map: Map<number, Node> = new Map();
    private dummyHead = new Node();
    private tail: Node;
    private capacity: number = 0;
    private size: number = 0;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.tail = this.dummyHead;
    }

    get(key: number): number {
        const node = this.getNode(key);
        return node ? node.val : -1;
    }

    getNode(key: number): Node | null {
        if (!this.map.has(key)) {
            return null;
        }
        const target = this.map.get(key) as Node;
        if (target === this.tail) {
            return target;
        }

        if (target.prev) {
            target.prev.next = target.next;
        }
        if (target.next) {
            target.next.prev = target.prev;
        }

        this.tail.next = target;
        target.prev = this.tail;
        target.next = null;
        this.tail = target;

        return target;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            const node = this.getNode(key) as Node;
            node.val = value;
            return;
        } else if (this.size === this.capacity) {

        }

    }
}