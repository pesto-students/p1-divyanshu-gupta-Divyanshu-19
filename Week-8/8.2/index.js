// Given the root of a binary tree, determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key. The
// right subtree of a node contains only nodes with keys greater than the node's key. Both
// the left and right subtrees must also be binary search trees.

function validBST(arr, root = 0) {
  let left = arr[root * 2 + 1];
  let right = arr[root * 2 + 2];
  let isLeftBST, isRightBST;
  //   Check if left subtree is valid BST or not
  if (left === undefined || left === null) isLeftBST = true;
  else if (left >= arr[root]) isLeftBST = false;
  else isLeftBST = validBST(arr, root * 2 + 1);

  if (right === undefined || right === null) isRightBST = true;
  else if (right <= arr[root]) isRightBST = false;
  else isRightBST = validBST(arr, root * 2 + 2);
  return isLeftBST && isRightBST;
}

// Input:
// root = [2,1,3]
// Output: true
console.log(validBST([2, 1, 3])); //returns true

// Input:
// root = [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.
console.log(validBST([5, 1, 4, null, null, 3, 6])); //returns false
