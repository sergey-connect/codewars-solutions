function zeros(n) {
    if (n <= 0) return 0;

    let zeroCount = 0;
    for (let i = 1; i <= Math.trunc(Math.log(n) / Math.log(5)); i++) {
        zeroCount += Math.trunc(n / (5 ** i))
    }

    return zeroCount
}

console.log(zeros(748055992))