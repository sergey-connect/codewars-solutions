/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function getDomainName(url) {
    let rightBorder = url.lastIndexOf('.')
    let leftBorder = url.indexOf('://') + 3;

    let domainName;
    if (url.includes('://www.')) {
        domainName = url.slice(leftBorder + 4, rightBorder)
    } else {
        domainName = url.slice(leftBorder, rightBorder)
    }

    return domainName;
}

alert(getDomainName("http://github.com/carbonfive/raygun"));
alert(getDomainName("http://www.zombie-bites.com"));
alert(getDomainName("https://www.cnet.net"));
alert(getDomainName("https://yandex.ru"));
alert(getDomainName("https://www.codewars.com/kata/514a024011ea4fb54200004b"));