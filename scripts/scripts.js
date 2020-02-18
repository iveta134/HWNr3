console.log("script started");

for(i = 1; i < 101; i++) {  
    if(i % 3 === 0) {
        if(i % 5 === 0) {
            console.log("FizzBuzz");
        }

        else {
            console.log("Fizz");
        }
    }
    else if(i % 5 === 0) {
        console.log("Buzz");
    }

    else {
        console.log(i)
    }
  }
const main = document.querySelector("#output");
const inp1 = document.querySelector("#start");
const inp2 = document.querySelector("#finish");
const submitBtn = document.querySelector("#submit");
const resetBtn = document.querySelector("#reset");

inp1.value = 1;
inp2.value = 100;

const create = function() {
    while(main.firstChild) {
        main.removeChild(main.firstChild);
    };
    for (let i = 1; i < 101; i++) {
let newDiv = document.createElement("div");
let newPar = document.createElement("p");

newDiv.appendChild(newPar);
main.appendChild(newDiv).setAttribute("id", "div-" + i);
if (i < inp1.value || i > inp2.value) {
    newDiv.style = "display: none";
} else {
    if (i % 3 === 0 && i % 5 === 0) {                              
        newPar.appendChild(document.createTextNode(i + ' = FIZZ BUZZ'));
        main.appendChild(newDiv).setAttribute("class", "fizzbuzz");
    } else if (i % 3 === 0) {
        newPar.appendChild(document.createTextNode(i + ' = FIZZ'));
        main.appendChild(newDiv).setAttribute("class", "fizz");

    } else if (i % 5 === 0) {
        newPar.appendChild(document.createTextNode(i + ' = BUZZ'));
        main.appendChild(newDiv).setAttribute("class", "buzz");

    } else {
        newPar.appendChild(document.createTextNode(i));
        main.appendChild(newDiv).setAttribute("class", "num");
    }
    
    }};

}
create();

resetBtn.onclick = function() {
    inp1.value = "";
    inp2.value = "";
    create();
};

submitBtn.onclick = function() {
    inp1.value = 1;
    inp2.value = 100;
    create();
};