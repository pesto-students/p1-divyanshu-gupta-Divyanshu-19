// Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.

function sortArray(array) {
  let left = 0,
    right = array.length - 1;
  while (left !== right) {
    if (array[left] === 0) {
      left++;
    }
    if (array[right] === 2) {
      right--;
    }
    if (array[right] === 0 && array[left] !== 0) {
      let temp = array[right];
      array[right] = array[left];
      array[left] = temp;
      left++;
    }
    if (array[left] === 2 && array[right] !== 2) {
      let temp = array[right];
      array[right] = array[left];
      array[left] = temp;
      right++;
    }
  }
  return array;
}

console.log(sortArray([0, 2, 1, 2, 0]));
console.log(sortArray([0, 1, 0]));
