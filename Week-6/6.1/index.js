// Max sum contiguous array. Find the contiguous subarray within an array, A of length N which has the largest sum.
//
// The first and the only argument contains an integer array, A. Output Format: Return an integer representing the maximum
// possible sum of the contiguous subarray.Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000

function maxContiguousSum(array) {
  if (!Array.isArray(array)) {
    console.log('argument can only be a array');
    return;
  }
  let maxSubarraySum = -Infinity;
  let maxSum = 0;

  for (let i = 0; i < array.length; i++) {
    array[i] > array[i] + maxSum ? (maxSum = array[i]) : (maxSum += array[i]);
    if (maxSum > maxSubarraySum) maxSubarraySum = maxSum;
  }
  console.log(maxSubarraySum);
  return maxSubarraySum;
}

maxContiguousSum([1, 2, 3, 4, 5]);
maxContiguousSum([1, 2, 3, 4, -10]);
maxContiguousSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
// maxContiguousSum('hello');
