import { reverseList } from '../../剑指offer/reverseList/reverseList';

function isPalindrome(head: ListNode | null): boolean {
    if (head === null || head.next === null) {
        return true;
    }

    const dummyHead = new ListNode(0);
    dummyHead.next = head;

    let slow: ListNode = dummyHead.next;
    let fast: ListNode | null = slow.next;

    while (fast !== null) {
        fast = fast.next;
        if (fast) {
            fast = fast.next;
            slow = slow.next as ListNode;
        }
    }

    let backend = reverseList2(slow.next);
    slow.next = null;

    while (head !== null && backend !== null) {
        if (head.val !== backend.val) {
            return false;
        }
        head = head.next;
        backend = backend.next;
    }

    return true;
};
