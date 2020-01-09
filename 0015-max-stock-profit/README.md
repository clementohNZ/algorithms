# Max Stock Profit

## Purpose
Time complexity.

There is a way to solve this question using an `O (n^2)` runtime, but can you solve it faster?
There is a proven `O (n)` linear algorithm that exists.

## Exercise Details
Takes in an array of prices as a parameter and returns the maximum possible profit for the day.

Given the array `[32, 46, 26, 38, 40, 48, 42]` that represents the price of our stock throughout
the day, determine the maximum profit that could have been made. To do this, you will need to
answer the questions of:

1. What is the best price to buy at; and
2. Correspondingly what is the best price to sell at

You would expect the maximum profit for the given array to be `22`.

If no profit is possible, return `-1`

A maximum profit of 0 is treated as any other max profit value.

```js
function maxStockProfit(pricesArray) {}
```
