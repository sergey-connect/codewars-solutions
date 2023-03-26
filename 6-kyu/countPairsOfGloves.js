/*
Winter is coming, you must prepare your ski holidays. 
The objective of this kata is to determine the number of pair of gloves 
you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number 
of pairs you can constitute, assuming that only gloves of the same 
color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

function countPairsOfGloves(input) {
    let pairs = 0;
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        let current = input[i];

        if (map.has(current)) {
            map.set(current, map.get(current) + 1)
        } else {
            map.set(current, 1)
        }
    }

    console.log(map)

    for (let count of map.values()) {
        if (count >= 2) {
            pairs += Math.floor(count / 2)
        }
    }

    return pairs;
}

input = ["red", "green", "green", "red", "blue", "blue", "blue"]
console.log(countPairsOfGloves(input))
//result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
console.log(countPairsOfGloves(input))
//result = 3 (3 red pairs)