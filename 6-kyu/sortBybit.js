/*
DESCRIPTION:
In this kata you're expected to sort an array of 32-bit integers 
in ascending order of the number of on bits they have.

E.g Given the array [7, 6, 15, 8]

7 has 3 on bits (000...0111)
6 has 2 on bits (000...0011)
15 has 4 on bits (000...1111)
8 has 1 on bit (000...1000)
So the array in sorted order would be [8, 6, 7, 15].

In cases where two numbers have the same number of bits, 
compare their real values instead.

E.g between 10 (...1010) and 12 (...1100), they both have 
the same number of on bits '2' but the integer 10 is less 
than 12 so it comes first in sorted order.

Your task is to write the function sortBybit() that takes 
an array of integers and sort them as described above.

Note: your solution has to sort the array in place.

Example:

[3, 8, 3, 6, 5, 7, 9, 1]   =>    [1, 8, 3, 3, 5, 6, 9, 7]
*/


function sortBybit(arr) {
    return arr.sort((a, b) => {
        let aBit = 0;
        let bBit = 0;

        for (let char of a.toString(2)) {
            if (char == 1) aBit++;
        }
        for (let char of b.toString(2)) {
            if (char == 1) bBit++;
        }

        if (aBit == bBit) return a - b;
        return aBit - bBit;
    })
}


let task = [3, 8, 3, 6, 5, 7, 9, 1];

console.log(sortBybit(task)) // [1, 8, 3, 3, 5, 6, 9, 7]
console.log(task) // [3, 8, 3, 6, 5, 7, 9, 1]

// Решение из интернета

/*
function sortByBit(arr) {
    return arr.sort((a, b) => a.toString(2).split('0').join('').length - b.toString(2).split('0').join('').length || a - b);
}
*/
