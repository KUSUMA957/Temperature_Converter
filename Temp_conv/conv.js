document.getElementById("convertButton").addEventListener("click", function () {
    const temperatureInput = parseFloat(document.getElementById("temperatureInput").value);
    const unitSelect = document.getElementById("unitSelect").value;
    let result = document.getElementById("res");
    let result1 = document.getElementById("res1");
    let f;
    let c;
    let k;
    if (unitSelect === "celsius") {
        f = (temperatureInput * (9/5)) + 32;
        k = temperatureInput + 273.15;
        result.textContent = "Fahrenheit : " + f.toFixed(2);
        result1.textContent = "Kelvin : " + k.toFixed(2);
       
    } else if (unitSelect === "fahrenheit") {
        c = (temperatureInput - 32) * (5/9);
        k = (temperatureInput - 32) * (5/9) + 273.15;
        result.textContent = "Celcius : " + c.toFixed(2);
        result1.textContent = "Kelvin : " + k.toFixed(2);
    } else if (unitSelect === "kelvin") {
        c = temperatureInput - 273.15;
        f = ((temperatureInput - 273.15) * (9/5)) + 32;
        result.textContent = "Celcius : " + f.toFixed(2);
        result1.textContent = "Fahrenheit : " + f.toFixed(2);
    }
});