let button = document.getElementById("btn");
let input = document.getElementById("output");

let promise = new Promise(function(resolve, reject){
    button.addEventListener("click", function(){
        let val =  Number(input.value);
        val += 2;
        resolve(val);
    });
});

promise.then(function(val){
    input.value = val;
}).catch(function(err){
    console.log("Error: " + err);
});