function calculateMean(arrayOfNumbers) {
    const sumOfNumbers = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return sumOfNumbers / arrayOfNumbers.length
}

function calculateMedian(arrayOfNumbers) {
    const clonedNumbers = [...arrayOfNumbers]
    clonedNumbers.sort((a, b) => a - b)
    // if odd number of items in array
    if (clonedNumbers.length % 2 !== 0) {
        return clonedNumbers[(clonedNumbers.length - 1) / 2]
    }
    // index on the left-hand side item if there are two middle numbers
    const centerLeftIndex = Math.floor(clonedNumbers.length / 2)
    const mid1 = clonedNumbers[(centerLeftIndex) - 1]
    const mid2 = clonedNumbers[centerLeftIndex]
    return (mid1 + mid2) / 2
}

function calculateMode(arrayOfNumbers) {
    const reversedIndex = {}
    arrayOfNumbers.forEach(number => {
        if (!reversedIndex[number]) reversedIndex[number] = 0
        reversedIndex[number]++
    })
    let maxFrequency = 0
    let modes = []
    for (let number in reversedIndex) {
        if (reversedIndex[number] > maxFrequency) {
            modes = [parseInt(number)]
            maxFrequency = reversedIndex[number]
        }
        else if (reversedIndex[number] === maxFrequency) modes.push(number)
    }
    if (modes.length === Object.keys(reversedIndex).length) modes = []
    return modes
}

function meanMedianMode(data) {
    return {
        mean: calculateMean(data),
        median: calculateMedian(data),
        mode: calculateMode(data),
    }
}

const data = [1, 5, 3, 4, 5, 3, 3]
const result = meanMedianMode(data)

console.log(result)
