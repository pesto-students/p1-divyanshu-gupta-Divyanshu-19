// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e.,
// from left to right, level by level).

function binaryTreeLevelOrderTraversal(arr, root = 0, level = 0, stack = []) {
  if (!arr[root] || arr[root] === null) return stack;
  //   Define stack level as empty array if it does not exist
  if (!stack[level]) stack[level] = [];
  stack[level].push(arr[root]);
  //   For left subtree
  binaryTreeLevelOrderTraversal(arr, root * 2 + 1, level + 1, stack);
  //   for right subtree
  binaryTreeLevelOrderTraversal(arr, root * 2 + 2, level + 1, stack);
  return stack;
}

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]
console.log(binaryTreeLevelOrderTraversal([3, 9, 20, null, null, 15, 7])); //returns [[3],[9,20],[15,7]]

// Input: root = [1]
// Output: [[1]]
console.log(binaryTreeLevelOrderTraversal([1])); //returns [[1]]

// Input: root = []
// Output: []
console.log(binaryTreeLevelOrderTraversal([])); //returns []
