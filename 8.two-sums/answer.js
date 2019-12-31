function twoSum(arrayOfNumbers, sum) {
    let pairs = []
    let hashTable = []

    arrayOfNumbers.forEach((number, index) => {
        let currentNum = arrayOfNumbers[index]
        let counterPart = sum - currentNum // this is where the magic happens to make it constant time
        if (hashTable.includes(counterPart)) {
            pairs.push([currentNum, counterPart])
        }
        hashTable.push(currentNum)
    });

    return pairs
}

const data = [ 1, 6, 4, 5, 3, 3 ]
const result = twoSum(data, 6)

console.log(result)
