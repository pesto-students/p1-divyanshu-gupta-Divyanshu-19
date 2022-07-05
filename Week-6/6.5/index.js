// Given an one-dimensional unsorted array A containing N integers.You are also given an
// integer B, find if there exists a pair of elements in the array whose difference is B.Return
// 1 if any such pair exists else return 0. Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105

function pairWithDifference(array, value) {
  const map = new Map();
  for (let i = 0; i < array.length; i++) {
    if (map.has(array[i])) continue;
    else map.set(array[i], true);
  }
  for (const key of map.keys()) {
    let diff = value - Number(key);
    if (diff < 0) diff *= -1;
    if (map.has(diff)) return 1;
  }
  return 0;
}

console.log(pairWithDifference([5, 10, 3, 2, 50, 80], 78));
console.log(pairWithDifference([-10, 20], 30));

// // Q1
// // Implement memoize function
// // Create a function that will remember the past arguments and results
// // Repeated calls to the function with the same arguments should return the first time invokation value (i.e. cached value)

// const addSum = (a,b,c) => {
//   console.log("calculating sum...");
//   return a+b+c;
// }

// function memoizeOnce(fn) {
// // add code here
// const cache = new Map()
// return function(...args) {
//     console.log(cache);
//     const key = args.toString();
//     if(cache.has(key)) return cache.get(key)
//     else{
//         cache.set(key, fn(...args))
//         return cache.get(key);
//     }
// }
// }

// // Calling
// // const addSumMemoized = memoizeOnce(addSum);
// // addSumMemoized(1,2,3); // => "calculating sum..." 6
// // addSumMemoized(1,2,3); // => 6

// // Q2
// // Implement your own debounce

// function fun(message) {
// console.log(message);
// }

// function debounce(fn, waitTime) {
// // your code
// let timeoutId;
// return function(...args){
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => {
//         fn(...args)
//     }, waitTime)
// };
// }

// const debouncedFun = debounce(fun, 1000)

// setTimeout(() => debouncedFun("x"), 100)
// setTimeout(() => debouncedFun("y"), 400)
// setTimeout(() => debouncedFun("z"), 700)
// setTimeout(() => debouncedFun("abc"), 1400)
// // prints only "abc"

// // Q3
// // Implement custom Promise.all
// const p1 = new Promise((resolve,reject) => resolve(1));
// const p2 = new Promise((resolve,reject) => {
// setTimeout(() => {
//   resolve(2);
// },1000);
// });
// const p3 = new Promise((resolve,reject) => resolve(3));

// function promiseAllPolyFill(arr) {
//   return new Promise((resolve, reject) => {
//       const result = [];
//       arr.map((item, index) => {
//           item.then((value) => {
//               result[index] = value;
//               if(result.length === arr.length){
//                   resolve(result);
//               }
//           })

//       })

//   })
// }

// Promise.myAll = promiseAllPolyFill;

// const res = Promise.myAll([p1,p2,p3]);

// res.then((value) => {
// console.log(value);
// }).catch((err) => {
// console.log(err);
// });

// // Q3
// // Multiple series function calls

// // Implement the function that can be called in the following manner (last parameter to be passed as null/undefined indicating there are no more calls)
// // sum(1)(2)(3)(4)() // expected o/p - 10

// function sum(a) {
// // implementation
// return function(b){
//     if(b){
//         return sum (a+b);
//     }
//     else
//       return a;
// }
// }

// console.log(sum(1)(2)(3)(4)(6)());
