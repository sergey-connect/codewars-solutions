/*
Summary
Implement an algorithm which analyzes a two-color image and determines 
how many isolated areas of a single color the image contains.

Islands
An "island" is a set of adjacent pixels of one color (1) which is 
surrounded by pixels of a different color (0). Pixels are considered adjacent 
if their coordinates differ by no more than 1 on the X or Y axis.

Below you can see an example with 2 islands:

on the left in the form of a matrix of 1's and 0's
on the right in an equivalent stringified form using "X" and "~" 
characters for better readability

[
  [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
  [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
  [0,0,1,1,0,0,0,0,0,0],          "~~XX~~~~~~"
  [0,0,0,0,0,0,0,0,1,0],          "~~~~~~~~X~"
  [0,0,0,0,0,1,1,1,0,0],          "~~~~~XXX~~"
  [0,0,0,0,0,0,0,0,0,0],          "~~~~~~~~~~"
]

Specification
Your task is to implement a function which accepts a matrix containing 
the numbers 0 and 1. It should return the number of islands as an integer.
*/

function countTheIslands(matrix) {
    let count = 0;

    function checkNeighbour(matrix, i, j) {
        matrix[i][j] = 'X';
        if (matrix[i][j + 1] == 1) { checkNeighbour(matrix, i, j + 1) }
        if (matrix[i][j - 1] == 1) { checkNeighbour(matrix, i, j - 1) }
        if (matrix[i + 1]?.[j] == 1) { checkNeighbour(matrix, i + 1, j) }
        if (matrix[i - 1]?.[j] == 1) { checkNeighbour(matrix, i - 1, j) }
    }

    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];

        for (let j = 0; j < row.length; j++) {
            if (matrix[i][j] == 1) {
                count += 1;
                checkNeighbour(matrix, i, j)
            }
        }
    }

    return count
}

let arr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 0, 0, 1, 0, 1],
    [0, 0, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
]

console.log(countTheIslands(arr))