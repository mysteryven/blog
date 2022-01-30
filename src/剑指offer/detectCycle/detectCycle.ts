import { ListNode } from './../utils';

function detectCycle(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
        return null;
    }
    let slow: ListNode | null = head.next; // 先让 slow 走 1 步
    let fast: ListNode | null = slow.next; // fast 走 2 步

    while (slow !== null && fast !== null) {
        if (slow === fast) {
            break;
        }

        slow = slow.next;
        fast = fast.next;

        if (fast) {
            fast = fast.next; 
        }
    }

    if (slow !== fast) {
        return null;
    }

    let begin = head;

    while (begin !== slow) {
        begin = begin.next as ListNode;
        slow = slow?.next as ListNode;
    }

    return begin;
};