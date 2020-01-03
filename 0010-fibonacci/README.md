# Fibonacci

## Purpose
This algorithm will also be a good exercise to learn:
1. Recursion
2. Time Complexity

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

## Exercise Details
A fibonacci sequence is a sequence of numbers where the `n + 1` number is made from `(n - 2) + (n - 1)`.

The sequence starts of as: `1, 1, 2, 3, 5, 8, 13, 21, 34...`

If we pass in `4` as `fibonacci(4)`, it should return `3` because it's the 4th number in the sequence. Likewise, if we
pass in 9 as `fibonacci(9)`, we should get back `34`.

```js
function fibonacci(position) {}
```
