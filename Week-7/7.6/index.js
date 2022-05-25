// Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types (i) 1 x (a query
// of this type means pushing 'x' into the queue) (ii) 2 (a query of this type means to pop
// element from queue and print the poped element)

class Queue {
  constructor(...values) {
    this.items = [];
    this.poppedItem = [];
    this.additem = false;
    for (const value of values) {
      if (value === 1 && this.additem === false) {
        this.additem = true;
        continue;
      }
      if (value === 2 && this.additem === false) {
        if (this.items.length > 0) {
          this.poppedItem.push(this.items[0]);
          this.items.shift();
        } else this.poppedItem.push(-1);
        continue;
      }
      if (this.additem === true) {
        this.items.push(value);
        this.additem = false;
      }
    }
  }
}

// Example 1:
// Input:
// 5
// 1 2 1 3 2 1 4 2
// Output:2 3
// Explanation:In the first testcase
// 1 2 the queue will be {2}
// 1 3 the queue will be {2 3}
// 2   poped element will be 2 the queue will be {3}
// 1 4 the queue will be {3 4}
// 2   poped element will be 3.
const queue1 = new Queue(1, 2, 1, 3, 2, 1, 4, 2);
console.log(queue1.poppedItem);

// Example 2:
// Input:4
// 1 2 2 2 1 4
// Output:2 -1

const queue2 = new Queue(1, 2, 2, 2, 1, 4);
console.log(queue2.poppedItem);
