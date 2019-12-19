function divisibleBy(n) {
    return function () {
        return (this % n) === 0
    }
}

Number.prototype.divisibleBy3 = divisibleBy(3)
Number.prototype.divisibleBy5 = divisibleBy(5)

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i.divisibleBy3() && i.divisibleBy5()) {
            console.log('fizz buzz')
        } else if (i.divisibleBy3()) {
            console.log('fizz')
        } else if (i.divisibleBy5()) {
            console.log('buzz')
        } else {
            console.log(i)
        }
    }
}

const result = fizzBuzz(20)
console.log(result)
