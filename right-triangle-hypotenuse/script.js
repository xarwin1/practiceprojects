let a;
let b;
let c;

document.getElementById("submitBtn").onclick = function() {
    a = document.getElementById("aLeg").value;
    b = document.getElementById("bLeg").value;

    a = Math.pow(a, 2);
    b = Math.pow(b, 2);
    c = Math.sqrt(a + b);

    document.getElementById("placeholder").innerHTML = "The answer is " + c;
}


