//Increase the number from the paragraph element
function increase(){
    counterObj = document.getElementsByClassName("counter")[0]; //Get the element
    counterVal = counterObj.innerHTML;
    counterObj.innerHTML = parseInt(counterVal) + 1;
}

//Decrease the number from the paragraph element
function decrease(){
    counterObj = document.getElementsByClassName("counter")[0];
    counterVal = counterObj.innerHTML;
    counterObj.innerHTML = parseInt(counterVal) - 1;
}