function maxStockProfit (pricesArray) {
    let maxProfit = -1
    let buyPrice = 0
    let sellPrice = 0

    let changeBuyPrice = true

    for (let i = 0; i < pricesArray.length; i++) {
        if (changeBuyPrice) buyPrice = pricesArray[i]
        sellPrice = pricesArray[i + 1]

        if (sellPrice < buyPrice) {
            changeBuyPrice = true
        }
        else {
            let tempProfit = sellPrice - buyPrice
            if (tempProfit > maxProfit) maxProfit = tempProfit
            /*
            We know next item in array is larger because of sellPrice = pricesArray[i + 1]
            so we don't want to change our buy price to a higher value because we want to
            buy as low as possible.
             */
            changeBuyPrice = false
        }
    }

    return maxProfit
}

const pricesArray = [6000, 34, 203, 3, 746, 200, 984, 198, 764, 1, 9, 1]
const result = maxStockProfit(pricesArray)
console.log(result)
