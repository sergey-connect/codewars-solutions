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
let length = 0;

function arrayDeepCount(arr) {

    if (Array.isArray(arr)) {
        length += arr.length;

        for (let i = 0; i < arr.length; i++) {
            arrayDeepCount(arr[i])
        }
    }

    return length
}

console.log(arrayDeepCount([1, 2, [3, 4, [5, 4, [1]]]]))