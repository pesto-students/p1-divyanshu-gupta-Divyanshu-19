const Node = require('../Node');
const LinkedList = require('../LinkedList');

// Reverse a Linked List
// Input:LinkedList: 2->7->8->9->10
// Output: 10 9 8 7 2
// Explanation: After reversing the list,elements are 10->9->8->7->2.
// Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).

LinkedList.prototype.reverse = function () {
  //   console.log(`reverse function ${this.first}`);
  let mid = this.first;
  let prev = null;
  let front;
  for (let i = this.first; i != null; i = mid) {
    front = mid.next;
    mid.next = prev;
    prev = mid;
    if (front === null) this.first = mid;
    mid = front;
  }
};

const list = new LinkedList();
list.add(2, 7, 8, 9, 10);
console.log(`List before reverse ${list}`);
list.reverse();
console.log(`List after reverse ${list}`);

const list2 = new LinkedList();
list2.add(1, 2, 3, 4, 5, 6);
console.log(`list before reverse ${list2}`);
list2.reverse();
console.log(`list after reverse ${list2}`);
