function increase(){
    counterObj = document.getElementsByClassName("counter")[0];
    counterVal = counterObj.innerHTML;
    counterObj.innerHTML = parseInt(counterVal) + 1;
}

function decrease(){
    counterObj = document.getElementsByClassName("counter")[0];
    counterVal = counterObj.innerHTML;
    counterObj.innerHTML = parseInt(counterVal) - 1;
}