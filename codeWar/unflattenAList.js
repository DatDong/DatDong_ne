function unflatten(flatArray) {
  let result = [];
  for(let i=0;i<flatArray.length;){
    if(flatArray[i]<3){
        result.push(flatArray[i]);
        i++;
    }
    else{
        let subArr = flatArray.slice(i,flatArray[i]+i);
        result.push(subArr);
        i+=flatArray[i];
    }
  }
  return result;
}
console.log(unflatten([1, 4, 5, 2, 1, 2, 4, 5, 2, 6, 2, 3, 3]));

