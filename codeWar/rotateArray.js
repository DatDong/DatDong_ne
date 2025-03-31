function rotate(array, n) {
    let len = array.length;
    if (len === 0) return array;
    
    n = n % len;
    if (n < 0) n += len;
    
    return array.slice(-n).concat(array.slice(0, -n));
}
var data = [1, 2, 3, 4, 5];
console.log(rotate(data, 2));