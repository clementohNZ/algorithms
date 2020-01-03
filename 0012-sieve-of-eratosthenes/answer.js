function sieveOfEratosthenes(n) {
    let primes = []
    // make all numbers prime by default
    for (let i = 0; i <= n; i++) {
        primes[i] = true
    }

    // we know these values are non-prime out of the box
    primes[0] = false
    primes[1] = false

    /*
    Double loop to check each factor for a given index/number
    once a factor is greater than the number passed into our function,
    we no longer care.
    */
    for (let i = 2; i <= Math.sqrt(n); i ++) {
        /*
        If it goes into this loop it means there is more than 2 factors
        of n and 1 and therefore it's not a prime number
         */
        for (let j = 2; j * i <= n; j++) {
            primes[i * j] = false
        }
    }

    let result = []
    for (let i = 0; i < primes.length; i++) {
        if (primes[i]) result.push(i)
    }
    return result
}

const result = sieveOfEratosthenes(20)
console.log(result)
