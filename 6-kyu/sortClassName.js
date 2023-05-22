let classname = ['header', 'menu', 'menu-item', 'menu-item', 'menu-item', 'footer', 'menu', 'link', 'link', 'link', 'link']

function sortClassName(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (map.has(arr[i])) {
            map.set(arr[i], map.get(arr[i]) + 1)
        } else {
            map.set(arr[i], 1)
        }
    }

    let newArr = [];
    for (let item of map) {
        newArr.push(item[0])
    }

    return newArr.sort((a, b) => map.get(b) - map.get(a));
}

console.log(sortClassName(classname));