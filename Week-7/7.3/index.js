const Node = require('../Node');
const LinkedList = require('../LinkedList');

// Given a linked list of N nodes. The task is to check if the linked list has a loop. Linked
// list can contain self loop.

LinkedList.prototype.createLoop = function (k) {
  let j = 0;
  for (let i = this.first; i != null; i = i.next) {
    if (j === k - 1) {
      this.last = i;
    }
    j += 1;
  }
};

LinkedList.prototype.isLoop = function () {
  let j = this.first.next;
  for (let i = this.first; i != null; i = i.next) {
    if (j === null || j.next === null) {
      return false;
    }
    if (j === i) {
      return true;
    }
    j = j.next.next;
  }
  return false;
};

// Input:
// N = 3
// value[] = {1,3,4}
// x = 2
// Output: True
// Explanation: In above test case N = 3.The linked list with nodes N = 3 is given. Then value of x=2 is given
// which means last node is connected with xth node of linked list. Therefore, there exists a loop.

const list = new LinkedList();
list.add(1, 3, 4);
list.createLoop(2);
console.log(list.isLoop());
console.log(`\n`);

// Input:
// N = 8
// value[] = {1, 2, 3, 4, 5, 6, 7, 8}
// k = 4
// Output: 5 6 7 8 1 2 3 4

const list2 = new LinkedList();
list2.add(1, 8, 3, 4);
list2.createLoop(0);
console.log(list2.isLoop());
console.log(`\n`);

// Expected Time Complexity: O(N). Expected Auxiliary Space: O(1).Constraints: 1 <= N <= 103 1 <= k <= N
