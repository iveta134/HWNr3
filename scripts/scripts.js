console.log('Script started');


function onResetButtonClick() {
    console.log("button was clicked");
    let element = document.querySelector(".div-container");
    while (element.firstchild) {
        element.removeChild(element.firstchild);
    }
}

delButton.onclick = onResetButtonClick;

function onRefreshButtonClick() {
    console.log("button was clicked");

}

myButton.onclick = onRefreshButtonClick;

function onFizzButtonClick() {
    console.log("button was clicked");

}

myButton.onclick = onFizzButtonClick;

function onBuzzButtonClick() {
    console.log("button was clicked");

}

myButton.onclick = onBuzzButtonClick;