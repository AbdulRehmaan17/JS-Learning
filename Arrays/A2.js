let array = [250,645,300,900,50];
let updatedArray = [];

let offer = 0;
let updated =0;
let final = 0;
for (let i=0; i<array.length; i++){
    offer = array[i];
    updated = (offer/100)*10;
    final = offer - updated; 
    updatedArray.push(final);
}
console.log(updatedArray);
