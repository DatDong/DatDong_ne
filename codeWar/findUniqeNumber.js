function findUniq(arr) {
    let count ={};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        count[num] = (count[num] || 0) + 1;
        
    }
    for (let num in count) {
        if (count[num] === 1) {
            return Number(num);
        }
    }
    
}
console.log(findUniq([1, 1, 2, 1, 1])); 
