const Node = require('../Node');
const LinkedList = require('../LinkedList');

// Given a singly linked list of size N. The task is to left-shift the linked list by k nodes,
// where k is a given positive integer smaller than or equal to length of the linked list

LinkedList.prototype.rotate = function (k) {
  let j = 0;
  for (let i = this.first; i != null; i = i.next) {
    j += 1;
    if (j === k) {
      this.last.next = this.first;
      this.first = i.next;
      i.next = null;
      break;
    }
  }
};

// Input:N = 5
// value[] = {2, 4, 7, 8, 9}
// k = 3
// Output: 8 9 2 4 7
// Explanation:
// Rotate 1: 4 -> 7 -> 8 -> 9 -> 2
// Rotate 2: 7 -> 8 -> 9 -> 2 -> 4
// Rotate 3: 8 -> 9 -> 2 -> 4 -> 7

const list = new LinkedList();
list.add(2, 4, 7, 8, 9);
console.log(`List before rotate ${list}`);
list.rotate(3);
console.log(`List after rotate ${list}`);
console.log(`\n`);

// Input:
// N = 8
// value[] = {1, 2, 3, 4, 5, 6, 7, 8}
// k = 4
// Output: 5 6 7 8 1 2 3 4

const list2 = new LinkedList();
list2.add(1, 2, 3, 4, 5, 6, 7, 8);
console.log(`list before rotate ${list2}`);
list2.rotate(4);
console.log(`list after rotate ${list2}`);

// Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).Constraints: 1 <= N <= 103 1 <= k <= N
