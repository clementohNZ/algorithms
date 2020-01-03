function fibonacci(position) {
    // base case
    if (position < 3) return 1
    // recursive case (n - 2) + (n - 1)
    else return fibonacci(position - 2) + fibonacci(position - 1)
}

const result = fibonacci(0)
console.log(result)
