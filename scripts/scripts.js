console.log('Script started');

const inp1 = document.querySelector("#min-value");
const inp2 = document.querySelector("#max-value");
const btnRefresh = document.querySelector("#btn-refresh");
const btnReset = document.querySelector("#btn-reset");
const btnFizz = document.querySelector("#btn-fizz");
const btnBuzz = document.querySelector("#btn-buzz");
const btnFizzBuzz = document.querySelector("#btn-fizzbuzz")
const main = document.querySelector(".div-container");



for (var i=1; i < 101; i++){
    if (i % 15 == 0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log("Buzz");
    else console.log(i);
}


function innit () {
    console.log('Adding listeners')
    addListeners();
    document.getElementById('elements');
    
   btnReset.addEventListener("click", onClickClear);
   btnRefresh.addEventListener("click", onClickRefresh);
   btnFizz.addEventListener("click", onClickFizz);
   btnBuzz.addEventListener("click", onClickBuzz);
   btnfizzbuzz.addEventListener("click", onClickFizzBuzz);
}

// var sl1 = document.getElementById("elWidth");
// var sl1Value = document.getElementById("elWidthOutput");
// sl1.innerHTML = sl1Value.value;

// sl1.oninput = function() {
//   sl1Value.innerHTML = this.value;
// }

// var sl2 = document.getElementById("elHeight");
// var sl2Value = document.getElementById("elHeightOutput");
// sl2.innerHTML = sl2Value.value;

// sl2.oninput = function() {
//   sl2Value.innerHTML = this.value;
// }
function onClick() {
    onClickReset();
    console.log('reset Button clicked');
        for(let i = 1; i<101; i++){
            const element = document.createElement('div');
            element.className="element" + i;
            elements.appendChild(element);
                if (i % 3 ===0 && i % 5 === 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "FizzBuzz");
                    element.innerText="FizzBuzz " + i;
                }
                else if (i % 3 === 0 && i % 5 !== 0) {
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Fizz");
                    element.innerText="Fizz " + i;
                    
                }

                else if (i % 5 === 0 && i % 3 !== 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Buzz");
                    element.innerText="Buzz " + i;
                    
                }

                else if (i % 3 !== 0 && i % 5 !== 0){
                    element.setAttribute("id", "element" +i);
                    element.setAttribute("class", "Empty");
                    element.innerText=i;
                    
                }
        }
}

function onClickReset () {
    while (elements.firstChild) {
        elements.removeChild(elements.firstChild);
    }
    console.log('Divs cleared');
}

function onClickFIzzBuzz (){
    onClickReset();
    console.log('Divs cleared');
    console.log('Generate custom divs');
    // var startValue = document.getElementById('startValue').value;
    // var endValue = document.getElementById('endValue').value;   
    // var fizzValue = document.getElementById('fizzValue').value;
    // var buzzValue = document.getElementById('buzzValue').value;
    // var fizzColor = document.getElementById('fizzColor').value;
    // var buzzColor = document.getElementById('buzzColor').value;
    // var fizzBuzzColor = document.getElementById('fizzBuzzColor').value;
    // var noneColor = document.getElementById('noneColor').value;
    // console.log('start value - ' + startValue);
    // console.log('end value - ' + endValue);
    // console.log('fizz value - ' + fizzValue);
    // console.log('buzz value - ' + buzzValue);
    // console.log('fizz color - ' + fizzColor);
    // console.log('buzz color - ' + buzzColor);
    // console.log('fizzbuzz color - ' + fizzBuzzColor);
    // console.log('none color - ' + noneColor);
        for (inp1; inp1<=inp2; inp1++){
            const element = document.createElement('div');
            element.id="element" + inp1;
            
            elements.appendChild(element);
                if (inp1 % 3 === 0 && inp1 % 5 === 0){
                    element.setAttribute("id", "element" +inp1);
                    element.setAttribute("class", "FizzBuzz");
                    element.innerText="FizzBuzz " + inp1;
                    // element.style.width=sl1.value + "px";
                    // element.style.height=sl2.value + "px";
                }
                else if (inp1 % 3 === 0 && inp1 % 5 !== 0) {
                    element.setAttribute("id", "element" +inp1);
                    element.setAttribute("class", "Fizz");
                    element.innerText="Fizz " + inp1;
                    // element.style.width=sl1.value + "px";
                    // element.style.height=sl2.value + "px";
                }

                else if (inp1 % 5 === 0 && inp1 % 3 !== 0){
                    element.setAttribute("id", "element" +inp1);
                    element.setAttribute("class", "Buzz");
                    element.innerText="Buzz " + inp1;
                    // element.style.backgroundColor=buzzColor;
                    // element.style.width=sl1.value + "px";
                    // element.style.height=sl2.value + "px";
                }

                else if (inp1 % 3 !== 0 && inp1 % 5 !== 0){
                    element.setAttribute("id", "element" +inp1);
                    element.setAttribute("class", "Empty");
                    element.innerText=inp1;
                    // element.style.backgroundColor=noneColor;
                    // element.style.width=sl1.value + "px";
                    // element.style.height=sl2.value + "px";

                }
        }
}

 function addListeners() {
    const submit = document.getElementById('btn-fizzbuzz');
    submit.onclick = onClick;
}



innit();