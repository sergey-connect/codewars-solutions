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

function countTheIslands(image) {
    let count = 0;

    function checkNeighbour(image, i, j) {
        image[i][j] = 'X';
        if (image[i][j + 1] == 1) { checkNeighbour(image, i, j + 1) }
        if (image[i][j - 1] == 1) { checkNeighbour(image, i, j - 1) }
        if (image[i + 1]?.[j] == 1) { checkNeighbour(image, i + 1, j) }
        if (image[i - 1]?.[j] == 1) { checkNeighbour(image, i - 1, j) }
        if (image[i - 1]?.[j - 1] == 1) { checkNeighbour(image, i - 1, j - 1) }
        if (image[i - 1]?.[j + 1] == 1) { checkNeighbour(image, i - 1, j + 1) }
        if (image[i + 1]?.[j - 1] == 1) { checkNeighbour(image, i + 1, j - 1) }
        if (image[i + 1]?.[j + 1] == 1) { checkNeighbour(image, i + 1, j + 1) }
    }

    for (let i = 0; i < image.length; i++) {
        let row = image[i];

        for (let j = 0; j < row.length; j++) {
            if (image[i][j] == 1) {
                count += 1;
                checkNeighbour(image, i, j)
            }
        }
    }

    return count
}

let arr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

console.log(countTheIslands(arr))