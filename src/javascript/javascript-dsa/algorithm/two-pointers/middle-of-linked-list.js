import { TreeNode } from "data-structures/Node";
export function middleOfLinkedList(head) {
    let slow = head,
    fast = head;
    while (fast && fast.next) {
     fast = fast.next.next;
     slow = slow?.next || null;
    }
    return slow?.val;
}