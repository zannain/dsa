/*class Node {
  constructor(value, next = null) {
    this.val = value;
    this.next = next;
  }
}*/

function calculateCycleLength(slow) {
  let current= slow,
    cycleLength = 0;
  while (true) {
    current = current?.next || null;
    cycleLength += 1;
    if (current === slow) {
      // Reached back to the starting point of the cycle
      break;
    }
  }
  return cycleLength;
}

function middle(slow, fast) {
  while (fast !== null && fast.next !== null) {
    slow = slow?.next || null;
    fast = fast.next.next;
  }
  return slow;
}
