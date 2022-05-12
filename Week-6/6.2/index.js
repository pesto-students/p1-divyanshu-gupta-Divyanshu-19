// Given a matrix of m * n elements (m rows, n columns), return allelements of the matrix in spiral order.

function spiralMatrix(array) {
  if (!Array.isArray(array)) {
    console.log('Parameter should be a array');
    return;
  }

  let sprialArray = [],
    m = array.length,
    n = array[0].length,
    top = 0,
    down = m,
    left = 0,
    right = n;

  while (top < down && left < right) {
    for (let i = left; i < right; i++) {
      sprialArray.push(array[top][i]);
    }
    top++;
    for (let i = top; i < down; i++) {
      sprialArray.push(array[i][right - 1]);
    }
    right--;
    for (let i = right - 1; i >= left; i--) {
      sprialArray.push(array[down - 1][i]);
    }
    down--;
    for (let i = down - 1; i >= top; i--) {
      sprialArray.push(array[i][left]);
    }
    left++;
  }

  return sprialArray;
}

console.log(
  spiralMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
