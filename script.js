// Select all HTML elements with a class of "box".
var boxes = document.querySelectorAll(".box");

boxes[0].style.backgroundColor = "green";
boxes[1].style.backgroundColor = "purple";
boxes[2].style.backgroundColor = "#191919";
boxes[3].style.backgroundColor = "blanchedalmond";

// Variable to hold the current left margin.
var leftMargin = [0, 0, 0, 0, 0];
var topMargin = [0, 0, 0, 0, 0];


// Variable used to add to the left margin.
var moveAmount = [5, 10, 15, 20, 25]

// Function that adds moveAmount to leftMargin then appends leftMargin
// to the first box's margin left. Basically moving the box to the right.
function boxClicked0() {

    // 'console.log()' only displays in the browser console.
    // It's useful for you, the developer, to debug your code.
    console.log("Hey, box 1 clicked!");
    leftMargin[0] += moveAmount[0];
    boxes[0].style.marginLeft = leftMargin[0] + "px";
}

function boxClicked1() {
    console.log("Hey, box 2 clicked!");
    leftMargin[1] += moveAmount[1];
    boxes[1].style.marginLeft = leftMargin[1] + "px";
}

function boxClicked2() {
    console.log("Hey, box 3 clicked!");
    leftMargin[2] += moveAmount[2];
    boxes[2].style.marginLeft = leftMargin[2] + "px";
}

function boxClicked3() {
    console.log("Hey, box 4 clicked!");
    leftMargin[3] += moveAmount[3];
    boxes[3].style.marginLeft = leftMargin[3] + "px";
}

function boxClicked4() {
    console.log("Hey, box 5 clicked!");
    topMargin[4] += moveAmount[4];
    boxes[4].style.marginTop = topMargin[4] + "px";
}

// When anyone clicks on the first box, call the function "boxClicked".
boxes[0].addEventListener("click", boxClicked0);
boxes[1].addEventListener("click", boxClicked1);
boxes[2].addEventListener("click", boxClicked2);
boxes[3].addEventListener("click", boxClicked3);
boxes[4].addEventListener("dblclick", boxClicked4);