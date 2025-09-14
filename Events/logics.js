let newDiv = document.getElementById("hey1");
let newBtn = document.getElementById("myButton");

newBtn.addEventListener("click", () =>{
    if(newDiv.style.backgroundColor == "red"){
        newDiv.style.backgroundColor = "lightgreen";
        return;
    }
    else{
        newDiv.style.backgroundColor = "red";
        return;
    }
});