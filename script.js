document.getElementById("convertButton").addEventListener("click", function () {
    const inputTemperature = parseFloat(document.getElementById("inputTemperature").value);
    const unitFrom = document.getElementById("unitFrom").value;
    let result;

    if (unitFrom === "celsius") {
        result = (inputTemperature * 9 / 5) + 32;
    } else {
        result = (inputTemperature - 32) * 5 / 9;
    }

    document.getElementById("result").textContent = `Converted Temperature: ${result.toFixed(2)} ${unitFrom === "celsius" ? "Fahrenheit" : "Celsius"}`;
});
