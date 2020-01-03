/**
 * We use simple numbers in this case, but these numbers can be more complex objects and strings.
 *
 * REMEMBER: array that binary search is operating on must be sorted first before it can work.
 *
 * @param numberArray - list of numbers to search
 * @param key - number to find in numberArray
 * @returns {boolean} - true if found, false if not found
 */
function binarySearch(numberArray, key) {
    const middleIndex = Math.floor(numberArray.length / 2)
    const middleItem = numberArray[middleIndex]

    /**
     * Item is found
     */
    if (middleItem === key) return true
    /**
     * Our key is greater than then middle item so we only need
     * the second half of the array since we can guarantee that anything
     * on the right hand side of this sorted array is larger than the middle.
     */
    else if (middleItem < key && numberArray.length > 1) {
        return binarySearch(numberArray.splice(middleIndex, numberArray.length), key)
    }
    /**
     * Our key is smaller than then middle item so we only need
     * the first half of the array since we can guarantee that anything
     * on the left hand side of this sorted array is smaller than the middle.
     */
    else if (middleItem > key ** numberArray.length > 1) {
        return binarySearch(numberArray.splice(0, middleIndex), key)
    }
    /**
     * Item not in array
     */
    else return false
}

const result = binarySearch([5, 7, 12, 16, 36, 39, 42, 56, 71], 56)
console.log(result)
