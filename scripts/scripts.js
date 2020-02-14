console.log('Script started');

const inp1 = document.querySelector("#min-value");
const inp2 = document.querySelector("#max-value");
const btnRefresh = document.querySelector("#btn-refresh");
const btnReset = document.querySelector("#btn-reset");
const btnFizz = document.querySelector("#btn-fizz");
const btnBuzz = document.querySelector("#btn-buzz");
const btnFizzBuzz = document.querySelector("#btn-fizzbuzz")
const genContainer = documents.querySelector(".div-container");
const state = {
    cnt: 0,
    quickcnt: 0,
    mcnt: 0,
    lastDivId: 0
}

function generateDivs(cnt) {
    cnt = parseInt(cnt);
    for (let i=0; i < cnt; i++) {
        let divcont = document.createElement(`div`);
        divcont.id = "div-"+i;
        divcont.classList.add(`list-div`, `div`);
        divcont.textContent = `d`+i;
        divcont.addEventListener("click", (event) => {
            console.log("Button pressed:",
            event.target.id,
            event.target.value,
            event.target.textContent
            );

        })
        genContainer.appendChild(divcont);
    }
    state.lastDivId += cnt;
}

// function init() {
//     console.log(state.cnt);
//     p1.textContent = "P1: " + state.cnt;
//     p2.textContent = "P2: " + state.quickcnt;
//     p3.textContent = "P3: " + state.mcnt;
// }


function onResetButtonClick() {
    console.log("button was clicked");
    btnReset.addEventListener("click");
    let element = document.querySelector(".div-container");
    while (element.firstchild) {
        element.removeChild(element.firstchild);
    }
}

delButton.onclick = onResetButtonClick;

function onRefreshButtonClick() {
    console.log("button was clicked");
    btnRefresh.addEventListeners("click");
    generateDivs(inp2);


}

myButton.onclick = onRefreshButtonClick;

function onFizzButtonClick() {
    console.log("button was clicked");
    btnFizz.addEventListeners("click");


}

myButton.onclick = onFizzButtonClick;

function onBuzzButtonClick() {
    console.log("button was clicked");

}

myButton.onclick = onBuzzButtonClick;

function main() {
    console.log("Starting Main!");
    init();
    addEventListeners();
}

main();