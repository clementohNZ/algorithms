function mergeSort(array) {
    // base case
    if (array.length < 2) return array;

    // recursive case
    const middleIndex = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, middleIndex);
    const secondHalf = array.slice(middleIndex);

    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
    let result = [];
    while (array1.length && array2.length) {
        let minElem;
        if (array1[0] < array2[0]) minElem = array1.shift();
        else minElem = array2.shift();
        result.push(minElem);
    }

    // Process any left overs.
    if (array1.length) result = result.concat(array1);
    else result =result.concat(array2);

    return result;
}

const arrayToSort = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]
const result = mergeSort(arrayToSort)
console.log(result)
