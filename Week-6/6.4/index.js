// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and
// choosing a different day in the future to sell that stock. Return the maximum profit you
// can achieve from this transaction. If you cannot achieve any profit, return 0.

function sellStock(array) {
  let maxProfit = 0;

  for (let i = 0; i < array.length; i++) {
    let buyVal = array[i];
    let profit = 0;
    // Here we are finding max gain from array with i from 0 to n and gain from i+1 to n
    for (let j = i + 1; j < array.length; j++) {
      let gain = array[j] - buyVal;
      if (gain <= 0) continue;
      else if (gain > profit) profit = gain;
    }
    // If the profit is greater then the previous profit then set the maxprofit to the new value
    if (profit > maxProfit) maxProfit = profit;
  }
  return maxProfit;
}

console.log(sellStock([7, 1, 5, 3, 6, 4]));
console.log(sellStock([7, 6, 4, 3, 1]));
