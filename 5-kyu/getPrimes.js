/*
We need prime numbers and we need them now!

Write a method that takes a maximum bound and returns all primes up to and including the maximum bound.

For example,

11 => [2, 3, 5, 7, 11]
*/

function getPrimes(bound) {
    let primes = [];

    for (let i = 2; i <= bound; i++) {
        let isPrime = true;

        for (let j = 2; j < i; j++) {
            if (!(i % j)) isPrime = false;
        }

        if (isPrime == true) primes.push(i);
    }

    return primes;
}

getPrimes(11);