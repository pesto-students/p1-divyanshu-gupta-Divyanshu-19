function nextGreaterElement(arr) {
  const stack = [];
  const output = [];
  stack.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > stack[stack.length - 1]) stack.push(arr[i]);
  }
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    if (start > stack.length - 1) {
      output.push(-1);
    }
    while (arr[i] >= stack[start] && start < stack.length - 1) {
      start += 1;
    }
    output.push(stack[start]);
  }
  //   console.log(stack);
  console.log(output);
}

nextGreaterElement([1, 3, 2, 4]);
nextGreaterElement([6, 8, 0, 1, 3]);
