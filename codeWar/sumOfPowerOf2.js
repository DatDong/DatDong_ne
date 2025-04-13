
const powers = n => {
    const result = [];
    let power = 0;
    while(n > 0) {
        if (n % 2 === 1) {
            result.push(2**power);
        }
        n = Math.floor(n / 2);
        power++;
    }
    return result;  
};  
console.log(powers(6));