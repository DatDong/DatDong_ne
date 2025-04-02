function countOccurrences(arr) {
    let count = {};  
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        console.log("@@@num",num);
        console.log("@@@",count[num]);
        if (count[num] === undefined) {
            count[num] = 1;  
        } else {
            count[num]++;
        }
    }
    return count;
}

console.log(countOccurrences([1, 1, 2, 3, 2, 1, 3, 3, 3])); 
