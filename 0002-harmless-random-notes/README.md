# Harmless Ransom Note

## Purpose
Write fast and performant programs. Such as using an object as a
Hash Table. Understanding that Hash Tables or directionaries
typically have constant time access whereas arrays do not.

It will test your understanding of:
1. Time complexity; and
2. Big O - how does the runtime change as the input size increases

### Constant runtime
The function below has a constant runtime because as the input size
grows, it still only logs out the first two items.

The corresponding Big O notation is `O (1)`

```js
function log(array) {
    console.log(array[0])
    console.log(array[1])
}
```

### Linear runtime
The function below has a linear runtime because it iterates through
every single item in the input dataset once. The runtime increases in
proportionately as the datasize increases.

The corresponding Big O notation for this is `O (n)`

```js
function log(array) {
    array.forEach(item => console.log(item))
}
```

### Exponential runtime
The function below has an exponential runtime because for every increase
in the input size, the runtime will increase by the square of the input.

The corresponding Big O notation for this is `O (n^2)`

```js
function addAndLog(array) {
    array.forEach(a => {
        array.forEach(b => {
            console.log(a + b)
        })
    })
}
```

### Logarithmic runtime
This is very performant because as the input size increases, the runtime
required will plateau.

The corresponding Big O notation for this is `O (log n)`

A good example of an algorithm with logarithmic runtime is Binary Search.
In Binary search, we keep cutting down our search field by half each run.
To find the letter "H" in the alphabet, with 26 letters, we might only
have to run the loop 4 times.

```js
function binarySearch(array, key) {
    let low = 0
    let high = array.length - 1
    let mid
    let element

    while (low <= high>) {
        mid = Math.floor((low + high) / 2, 10)
        element = array[mid]
        if (element < key) {
            low = mid + 1
        } else if (element > key) {
            low = mid - 1
        } else {
            return mid
        }
    }
    return - 1
}
```

## Exercise Details
A note made of words cut out from a magazine.

```js
function harmlessRansomNote(noteText, magazineText) {}
```

The first argument is the note we want to make. The second argument is the text that
we can use to make our note out of.

The algorithm just needs to see if there are enough words in the magazine text to
make up our desired note if we were to cut up each word and "glue" them together.
If there are enough words, it will return true.

If the note text was:

```
I have a secret note for you from your secret admirer
```

And the magazine text only had the word "secret" once, it would fail because you will not
have enough cutouts of the word "secret" to form the sentence.
