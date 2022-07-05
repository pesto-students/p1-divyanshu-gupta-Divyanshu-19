// Given an expression string x. Examine whether the pairs and the orders of
// “{“,”}”,”(“,”)”,”[“,”]” are correct in exp.For example, the function should return 'true' for
// exp= “[()]{}{()()}” and 'false' for exp = “[(])”.

class Stack {
  constructor(string) {
    this.stack = [];
    this.top = null;
    this.push(string);
  }

  push(string) {
    for (const value of string) {
      // This will check if the paranthesis is closing somewhere
      if (this.top) {
        if (
          (this.top === '{' && value === '}') ||
          (this.top === '(' && value === ')') ||
          (this.top === '[' && value === ']')
        ) {
          this.pop();
          this.top = this.stack[this.stack.length - 1];
          continue;
        }
      }
      this.stack.push(value);
      this.top = value;
    }
  }
  pop() {
    return this.stack.pop();
  }

  isExpression() {
    return !Boolean(this.stack.length);
  }
}

// Example 1:
// Input:{([])}
// Output:true
// Explanation:{ ( [ ] ) }. Same colored brackets can form balaced pairs, with 0 number of unbalanced bracket.

const stack = new Stack('{([])}');
console.log(stack.isExpression());

// Example 2:
// Input:()
// Output:true
// Explanation:
// (). Same bracket can form balanced pairs, and here only 1 type of bracket is present and in balancedway.

const stack2 = new Stack('()');
console.log(stack2.isExpression());

// Example 3:
// Input:([]
// Output:false
// Explanation:
// ([]. Here square bracket is balanced but the small bracket is not balanced and Hence , the output will beunbalanced.

const stack3 = new Stack('([]');
console.log(stack3.isExpression());
