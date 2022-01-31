import { ListNode } from './../utils';
import { reverseList } from '../reverseList/reverseList';

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let reverseL1 = reverseList(l1);
    let reverseL2 = reverseList(l2);
    let dummyHead = new ListNode(0);
    let carry = 0;

    while (reverseL1 !== null || reverseL2 !== null) {
        const v1 = reverseL1 !== null ? reverseL1.val : 0;
        const v2 = reverseL2 !== null ? reverseL2.val : 0;
        let sum = v1 + v2 + carry;
        carry = Math.floor(sum / 10);

        const newNode = new ListNode(sum % 10);
        let next = dummyHead.next;
        dummyHead.next = newNode;
        newNode.next = next;

        if (reverseL1) {
            reverseL1 = reverseL1.next;
        }

        if (reverseL2) {
            reverseL2 = reverseL2.next;
        }  
    }

    if (carry !== 0) {
        const newNode = new ListNode(carry);
        let next = dummyHead.next;
        dummyHead.next = newNode;
        newNode.next = next;
    }

    return dummyHead.next;
}

