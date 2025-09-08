let array = ["apple", "banana", "grape", "mango", "orange"];
let Longest = "";
for (let i=0; i<array.length; i++){
     let current = array[i];
    if(Longest.length < current.length){
        Longest = current;
}
}
console.log(Longest);