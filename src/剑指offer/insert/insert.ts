import { Node } from './../utils';

function insert(head: Node | null, insertVal: number): Node | null {
    const node = new Node(insertVal);
    if (head === null) {
        node.next = node;
        return node;
    }

    let lastNode = null;
    let current = head;
    // 终于写了一次 do...while 循环 :)
    do {
        let next = current.next as Node;
        if (current.val > next.val) {
            lastNode = current;
        } else if (insertVal >= current.val && insertVal < next.val){
            // 这里稍微注意一下 等于的情况，比如 [1, 1, 1, 2]
            current.next = node;
            node.next = next;
            return head;
        }

        current = next;
    } while(current !== head)

    if (lastNode === null) {
        lastNode = head;
    }

    const beginNode = lastNode.next;
    lastNode.next = node;
    node.next = beginNode;
    return head;
}