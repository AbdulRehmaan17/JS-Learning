let h1 = document.querySelector("h1");
h1.style.color = "red";

async  function getList(){
    let response = await fetch("https://api.frankfurter.dev/v1/currencies");
    let data = await response.json();

    for(let dat in data){
        h1.innerText += ` ${dat} (${data[dat]}) `;
        // h1.innerText += ` ${dat} `;
    }
}

getList();