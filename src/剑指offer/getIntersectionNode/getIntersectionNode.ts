import { ListNode } from './../utils';

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let headALen = 0;
    let headBLen = 0;
    let pointA = headA;
    let pointB = headB; 
    while (pointA !== null) {
        pointA = pointA.next;
        headALen++;
    }

    while (pointB !== null) {
        pointB = pointB.next;
        headBLen++;
    }

    if (headALen < headBLen) {
        for (let i = 0; i < headBLen - headALen; i++) {
            headB = headB!.next;
        }
    } else if (headBLen < headALen) {
        for (let i = 0; i < headALen - headBLen; i++) {
            headA = headA!.next;
        } 
    }

    while(headA !== headB) {
        headA = headA!.next;
        headB = headB!.next;
    }

    return headA;
}