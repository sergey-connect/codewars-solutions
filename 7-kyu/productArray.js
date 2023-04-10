function productArray(numbers) {
    return numbers.map(num => numbers.reduce((a, b) => a * b) / num)
}

console.log(productArray([1, 5, 2])) // ==> return { 10, 2, 5}