// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from the
// root node down to the farthest leaf node.

function maxDepthBinaryTree(arr, root = 0) {
  let leftdepth = 0;
  let rightdepth = 0;
  if (arr[root] === undefined || arr[root] === null) return 0;
  leftdepth = maxDepthBinaryTree(arr, root * 2 + 1);
  rightdepth = maxDepthBinaryTree(arr, root * 2 + 2);
  return Math.max(leftdepth, rightdepth) + 1;
}
// Input:
// root = [3,9,20,null,null,15,7]
// Output: 3
console.log(maxDepthBinaryTree([3, 9, 20, null, null, 15, 7])); //returns 3

// Input:
//  root = [1,null,2]
// Output: 2

console.log(maxDepthBinaryTree([1, null, 2])); //returns 2
