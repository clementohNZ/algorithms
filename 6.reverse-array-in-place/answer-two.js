/**
 * One way of doing it without map.
 *
 * @param array
 * @returns reversed array
 */
function reverseArrayInPlace(array) {
    for (let currentIndex = 0; currentIndex < array.length / 2; currentIndex++) {
        const tempVar = array[currentIndex]
        const swapIndex = array.length - 1 - currentIndex
        array[currentIndex] = array[swapIndex]
        array[swapIndex] = tempVar
    }
    return array
}

const array = [1, 2, 3, 4, 5, 6]
const result = reverseArrayInPlace(array)

console.log(result)
