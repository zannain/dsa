import { TreeNode } from "@data-structures/Node";
export function hasCycle(head) {
  let slow = head,
  fast = head;

  // Use two pointers to traverse the linked list
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next; // Move the fast pointer two steps ahead
    slow = slow?.next || null; // Move the slow pointer one step ahead

    if (slow === fast) {
      return true; // If they meet, there's a cycle in the linked list
    }
  }
  return false; // If we reach the end of the list, there's no cycle
}

