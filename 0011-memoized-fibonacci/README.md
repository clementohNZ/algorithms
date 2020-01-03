# Memoized Fibonacci

## Purpose
This algorithm will also be a good exercise to learn:
1. Recursion
2. Time Complexity
3. Memoization

### Recursion
For a function to be recursive, it must call itself within the body somewhere.

There is always a base case to exit the recursion and a recursive case to continue it.

```js
const check = true
function func() {
    if (check) { // base case
        return 2;
    } else { // recursive case
        func()
    }
}
```

### Time Complexity
This particular algorithm performs very poorly because every time the recursive function runs, it is calling itself
twice, leading to a time complexity of `O (2^n)`. If we pass in the position of 50, it will take the computer a very
long time to calculate and as the number grows, it could even crash your browser or computer.

To reduce this time complexity, we can use a technique called memoization.

### Memoization
Steps:
1. Check to see if number already exists in cache
2. If number is in cache, use that number
3. If number is not in cache, calculate it and put it in cache so it can be used multiple times in future

Since every number is calculated only once, it will reduce our runtime complexity from an exponential time complexity of
`O (2^n)` to a linear time complexity of `O (n)`.

Previously, the algorithm crashed at the index of 40, but now it can calculate the 1000th index faster than it could
calculate the 40th index using the previous algorithm. This shows how powerful the technique of memoization is.

## Exercise Details
A fibonacci sequence is a sequence of numbers where the `n + 1` number is made from `(n - 2) + (n - 1)`.

The sequence starts of as: `1, 1, 2, 3, 5, 8, 13, 21, 34...`

If we pass in `4` as `fibonacci(4)`, it should return `3` because it's the 4th number in the sequence. Likewise, if we
pass in 9 as `fibonacci(9)`, we should get back `34`.

### Memoization Component
You must reduce the time complexity of the basic fibonacci algorithm using a cache.

```js
function fibMemo(position) {}
```
