function mostLikely(prob1, prob2) {
    // your code

    if (prob1.slice(0, prob1.indexOf(':')) / prob1.slice(prob1.indexOf(':') + 1) > prob2.slice(0, prob2.indexOf(':')) / prob2.slice(prob2.indexOf(':') + 1)) return true
    return false
}

console.log(mostLikely('1:3', '1:2'))