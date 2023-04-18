/*
You are given an array. Complete the function that returns the number 
of ALL elements within an array, including any nested arrays.

Examples
[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7
The input will always be an array.
*/
/*
function arrayDeepCount(arr) {
    let length = arr.length;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            length += arr[i].length;

            for (let j = 0; j < arr[i].length; j++) {
                if (Array.isArray(arr[i][j])) {
                    length += arr[i][j].length;
                }
            }
        }
    }

    return length
}
*/

// Вариант с рекурсией


function deepCount(a) {
    return a.reduce((s, e) => s + (Array.isArray(e) ? deepCount(e) : 0), a.length);
}

console.log(deepCount([])) //, 0, "Expected 0");
console.log(deepCount([1, 2, 3])) //, 3, "Expected 3");
console.log(deepCount(["x", "y", ["z"]])) //, 4, "Expected 4");
console.log(deepCount([1, 2, [3, 4, [5]]])) //, 7, "Expected 7");
console.log(deepCount([[[[[[[[[]]]]]]]]])) //, 8, "Expected 8");