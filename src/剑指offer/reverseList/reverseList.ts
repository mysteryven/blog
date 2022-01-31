import { ListNode } from './../utils';
// 递归版
function reverseListR(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return head;
    }

    const newHead = reverseListR(head.next);
    const next = head.next;
    next.next = head;
    head.next = null;
    
    return newHead;
}

// 非递归版
function reverseList(head: ListNode | null): ListNode | null {
    if (head === null) {
        return null;
    }

    let dummyHead = new ListNode(0);
    dummyHead.next = head;
    let prev = dummyHead;
    let cur = prev.next;

    while(cur !== null) {
        let next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }

    head.next = null;
    return prev;
}
