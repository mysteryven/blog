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

function mergeKLists(lists: Array<ListNode>): ListNode | null {
  if (lists.length === 0) {
    return null;
  }

  return mergeListsImpl(lists, 0, lists.length - 1);
}

function mergeListsImpl(
  list: Array<ListNode>,
  start: number,
  end: number
): ListNode {
  if (end === start) {
    return list[start];
  }

  let mid = start + ((end - start) >> 1);
  const head1 = mergeListsImpl(list, start, mid);
  const head2 = mergeListsImpl(list, mid + 1, end);

  return merge333(head1, head2)!;
}

function merge(head1: ListNode, head2: ListNode): ListNode {
  let dummyHead = new ListNode();
  let current = dummyHead;
  while (head1 !== null || head2 !== null) {
    if (head1 === null) {
      current.next = head2;
      head2 = head2.next!;
    } else if (head2 === null) {
      current.next = head1;
      head1 = head1.next!;
    } else if (head1.val < head2.val) {
      current.next = head1;
      head1 = head1.next!;
    } else {
      current.next = head2;
      head2 = head2.next!;
    }

    current = current.next;
  }

  return dummyHead.next!;
}
