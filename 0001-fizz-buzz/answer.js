function isDivisibleBy(n) {
    return function () {
        return (this % n) === 0
    }
}

/**
 * If you are not familiar with prototypal inheritence,
 * you can modify these functions for better ease-of-understanding.
 *
 * I just try to make my code read as close to a well-formed
 * English sentence as possible since we spend most of our time
 * reading code as opposed to writing it (and this is one of the
 * best ways to make that happen).
 */
Number.prototype.isDivisibleBy3 = isDivisibleBy(3)
Number.prototype.isDivisibleBy5 = isDivisibleBy(5)

function fizzBuzz(num) {
    for (let currentNumber = 1; currentNumber <= num; currentNumber++) {
        if (currentNumber.isDivisibleBy3() && currentNumber.isDivisibleBy5()) {
            console.log('fizz buzz')
        } else if (currentNumber.isDivisibleBy3()) {
            console.log('fizz')
        } else if (currentNumber.isDivisibleBy5()) {
            console.log('buzz')
        } else {
            console.log(currentNumber)
        }
    }
}

const result = fizzBuzz(20)
console.log(result)
