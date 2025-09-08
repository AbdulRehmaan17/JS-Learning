let marks =[85,97,44,37,76,60]
console.log(marks)

let num =0;
for (let i=0; i<marks.length; i++){
    num = num + marks[i];
}
let avg = num / marks.length
console.log(avg);
