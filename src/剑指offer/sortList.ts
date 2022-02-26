/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head;
  }
  let head1 = head;
  let head2 = split(head);

  head1 = sortList(head1);
  head2 = sortList(head2);

  return merge333(head1, head2);
}

function merge333(head1: ListNode, head2: ListNode) {
  let dummyHead = new ListNode(0);
  let current = dummyHead;
  while (head1 !== null || head2 !== null) {
    if (head1 === null) {
      current.next = head2;
      head2 = head2.next;
    } else if (head2 === null) {
      current.next = head1;
      head1 = head1.next;
    } else if (head1.val < head2.val) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }

    current = current.next;
  }

  return dummyHead.next;
}

function split(head: ListNode) {
  let dummyHead = new ListNode(0, head);
  let slow = dummyHead;
  let fast = dummyHead;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let ret = slow.next;
  slow.next = null;

  return ret;
}
