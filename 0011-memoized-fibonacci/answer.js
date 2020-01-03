/**
 * An optimized algorithm for fibonacci.
 *
 * @param index - index of number in fibonacci sequence
 * @param cache - an array used as memory
 * @returns {number|*} - number at a specific index of the fibonacci sequence
 */
function fibMemo(index, cache) {
    cache = cache || []
    // base case
    if (cache[index]) return cache[index]
    else {
        if (index < 3) return 1
        else {
            cache[index] = fibMemo(index - 2, cache) + fibMemo(index - 1, cache)
        }
    }
    return cache[index]
}

const result = fibMemo(9)
console.log(result)
