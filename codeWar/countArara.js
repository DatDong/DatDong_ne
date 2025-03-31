function countArara(n) {
    let result = [];
    while(n>0){
        if(n>=2){
            result.push("adak");
            n-=2;
        }
        else {
            result.push("aname");
            n-=1;
        }
    }
    return result.join(" ");
}
console.log(countArara(8));