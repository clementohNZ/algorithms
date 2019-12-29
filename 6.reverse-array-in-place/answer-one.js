/**
 * One way of doing it with map.
 *
 * @param array
 * @returns reversed array
 */
function reverseArrayInPlace(array) {
    return array.map((item, index, array) => array[array.length - (index + 1)])
}

const array = [1, 2, 3, 4, 5, 6]
const result = reverseArrayInPlace(array)

console.log(result)
