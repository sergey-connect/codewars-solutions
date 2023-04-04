/*
Complete the solution so that it returns true if the first 
argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
*/


function isStringEnds(s, end) {
    return s.endsWith(end)
}




/* OR
function isStringEnds(s, end) {
    let endLength = end.length;
    if (s.lastIndexOf(end) == s.length - endLength) return true;
    return false
}
*/

let s = 'information';

console.log(isStringEnds(s, 'tion'))