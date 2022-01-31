import { ListNode } from './../utils';
import { reverseList } from '剑指offer/reverseList/reverseList';
// 1 -> 2 -> 3 -> 4
// 1 -> 2 -> 3 -> 4 -> 5
function reorderList(head: ListNode | null): void {
    if (head === null || head.next === null) {
        return;
    }
    let slow: ListNode | null = head;
    let fast: ListNode | null = head;

    while (fast !== null) {
        fast = fast.next;
        if (fast === null || fast.next === null) {
            break;
        }

        fast = fast.next;
        slow = slow.next as ListNode;
    }

    let frontPart = head;
    let backPart = slow.next;
    slow.next = null;
    backPart = reverseList(backPart);

    let currentFront: ListNode | null = frontPart;
    let currentBack: ListNode | null = backPart;
    while (currentFront && currentBack) {
        let nextFront: ListNode | null = currentFront.next;
        let nextBack = currentBack.next;

        currentFront.next = currentBack;
        currentBack.next = nextFront;
        currentFront = nextFront;
        currentBack = nextBack
    }
}