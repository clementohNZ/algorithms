# Binary Search

## Purpose
Very good to know because of it's performance and popularity in interview questions.

This algorithm runs in `O (log n)` runtime. As the input size grows, the algorithmic time complexity will grow
not by `n` times, but by the `log` of `n` so it's very performant. 

You use it to search for a given value (key) inside of a list (numArray).

The reason why this is so performant is because it halves the search field each time. Exponentially reducing
the amount we have to search through. For about 4,000 elements, we're looking at about 12 operations instead of
4,000 operation in a `O (log n)` algorithm.

This algorithm will also be a good exercise to learn recursion.

### Sort
Binary search needs to operate on a pre-sorted list.

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

## Exercise Details

```js
function binarySearch(numArray, key) {}
```
