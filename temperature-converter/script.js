let baseTemp = document.getElementById("baseTemp").value;
let celciusBtn = document.getElementById("celcius");
let fahrenheitBtn = document.getElementById("fahrenheit");
let initialResult;
let resultPlaceholder = document.getElementById("result");
let finalResult;
function convert() {
    if(celciusBtn.checked) {
        initialResult = baseTemp - 32 * 5/9;
        console.log(baseTemp);
        console.log(initialResult);
        finalResult = "The value of " + String(baseTemp) + "°F in celcius is " + String(initialResult) + "°C";
        resultPlaceholder.innerHTML = finalResult;
    }
    else if(fahrenheitBtn.checked) {
        initialResult = baseTemp * 9/5 + 32;
        finalResult = "The value of " + String(baseTemp) + "°C in Fahrenheit is " + String(initialResult) + "°F";
        resultPlaceholder.innerHTML = finalResult;
        console.log(baseTemp);
    }
    else {

        resultPlaceholder.innerHTML = "Please select a valid option."
    }
    return false;
}


