let a = 0;


document.getElementById("decreaseBtn").onclick = function () {
    a -= 1;
    document.getElementById("counter").innerHTML = a;
}


document.getElementById("resetBtn").onclick = function () {
    a =  0;
    document.getElementById("counter").innerHTML = a;
}


document.getElementById("increaseBtn").onclick = function () {
    a += 1;
    document.getElementById("counter").innerHTML = a;
}


document.getElementById("counter").innerHTML = a;

