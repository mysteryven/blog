/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// 0 -> 1 -> 2 -> 3 -> 4
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head === null) {
        return null;
    }

    const dummyHead = new ListNode(0);
    dummyHead.next = head;
    let front: ListNode | null = dummyHead;
    let back = dummyHead;
    for (let i = 0; i < n; i++) {
        front = front.next as ListNode;
    }
    
    while (front.next !== null) {
        front = front.next;
        back = back.next as ListNode;
    }

    // 其实题目说了，n 肯定小于等于链表长度，
    // 但是为了消除 ts 警告，还是加了这个
    if (back.next) {
        back.next = back.next?.next;
    }

    return dummyHead.next;
};