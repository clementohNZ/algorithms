function bubbleSort(array) {
    /*
     Loop through anything inside this block (array.length - 1) times
     */
    for (let i = array.length; i > 0; i--) {
        /*
        Loop through the entire array, each time stopping one element shorter
        than the previous loop. This is because we know that after each pass,
        the largest element bubbles to the top.

        Understanding this allows us to avoid trying to compare numbers that are
        already in the right positions after each pass.
         */
        for (let j = 0; j < i; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = temp
            }
        }
    }
    return array
}

const arrayToSort = [5, 3, 8, 2, 1, 4]
const result = bubbleSort(arrayToSort)
console.log(result)
