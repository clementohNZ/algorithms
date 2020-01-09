# Merge Sort

## Purpose
Understanding time complexity.

## Exercise Details
Return an array sorted using the merge sorting technique.

![Merge Sort Step 1](./resources/merge-sort-1.png)
![Merge Sort Step 2](./resources/merge-sort-2.png)
![Merge Sort Step 3](./resources/merge-sort-3.png)
![Merge Sort Steps](./resources/merge-sort-4.png)

```js
/**
* Takes in a single, unsorted array as a parameter.
* Splits the array into two halves.
*/
function mergeSort(array) {}


/**
* Takes in two sorted arrays as parameters.
* Merges the two sorted arrays into one sorted array.
* Returns one sorted array
*/
function merge(array1, array2) {}
```

### Recursion behavior step by step
Once the function call hits the base case of `mergeSort(array with 1 item)`, the recursive
functions will start to unwind.

![Merge Sort Step 5](./resources/merge-sort-5.png)
![Merge Sort Step 6](./resources/merge-sort-6.png)
![Merge Sort Step 7](./resources/merge-sort-7.png)
