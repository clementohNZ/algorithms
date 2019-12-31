# Two Sums

## Purpose
There are multiple ways of accomplishing this result, some are more performant than others. See how low you
can make the time complexity of O.

It can be done in:
1. `O (n^2)` time complexity (array double loop); and
2. `O (n)` time complexity (utilizes hash table)

## Exercise Details
Given an array of numbers and a sum, return all two-number combinations that add up to the sum provided.

If the array [ 1, 6, 4, 5, 3, 3 ] was provided, and the sum was 7, the result should
be: [ [ 6, 1 ], [ 3, 4 ], [ 3, 4 ] ].

Rules:
1. Result should be array of arrays
2. Any number in the `numArray` can be used in multiple pairs. In the example above, 4 is used twice.

```js
function twoSums(numArray, sum) {}
```
