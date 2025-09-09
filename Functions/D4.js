let arr = [24,66,78,93,64,15,28,90];

 let newArr = arr.reduce((prev,curr) =>{
    if(curr > prev){
        return curr;
    }
    if(prev >curr){
        return prev;
    }
    return curr;
 })
 console.log(newArr);