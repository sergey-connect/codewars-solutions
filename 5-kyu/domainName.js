/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function getDomainName(url) {
    let rightBorder = url.indexOf('.')
    let leftBorder = 0

    if (url.includes('://')) {
        leftBorder = url.indexOf('://') + 3;
    }

    let domainName;
    if (url.includes('www.')) {
        rightBorder = url.indexOf('.', url.indexOf('www.') + 4)
        domainName = url.slice(leftBorder + 4, rightBorder)
    } else {
        domainName = url.slice(leftBorder, rightBorder)
    }

    return domainName;
}

console.log(getDomainName("http://github.com/carbonfive/raygun"));
console.log(getDomainName("http://google.co.jp"));
console.log(getDomainName("https://www.cnet.net"));
console.log(getDomainName("www.xakep.ru"));
console.log(getDomainName("https://www.codewars.com/kata/514a024011ea4fb54200004b"));