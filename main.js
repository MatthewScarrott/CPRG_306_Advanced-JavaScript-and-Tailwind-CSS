"use strict";
const kilogramsToPounds = (kilograms) => kilograms * 2.20462;
const poundsToKilograms = (pounds) => pounds * 0.45359237;
const milesToKilometres = (miles) => miles * 1.609344;
const kilometresToMiles = (kilometres) => kilometres / 1.609344;
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
const kgInput = document.getElementById("kg-input");
const kgButton = document.getElementById("kg-button");
const kgResult = document.getElementById("kg-result");
const handleKgConvert = () => {
    const kilograms = kgInput.value.split(",").map(Number);
    const pounds = kilograms.map(kilogramsToPounds);
    kgResult.textContent = pounds.map((value) => value.toFixed(2)).join(", ");
};
kgButton.addEventListener("click", handleKgConvert);
const lbsInput = document.getElementById("lbs-input");
const lbsButton = document.getElementById("lbs-button");
const lbsResult = document.getElementById("lbs-result");
const handleLbsConvert = () => {
    const pounds = lbsInput.value.split(",").map(Number);
    const kilograms = pounds.map(poundsToKilograms);
    lbsResult.textContent = kilograms.map((value) => value.toFixed(2)).join(", ");
};
lbsButton.addEventListener("click", handleLbsConvert);
const milesInput = document.getElementById("miles-input");
const milesButton = document.getElementById("miles-button");
const milesResult = document.getElementById("miles-result");
const handleMilesConvert = () => {
    const miles = milesInput.value.split(",").map(Number);
    const kilometres = miles.map(milesToKilometres);
    milesResult.textContent = kilometres
        .map((value) => value.toFixed(2))
        .join(", ");
};
milesButton.addEventListener("click", handleMilesConvert);
const kmInput = document.getElementById("km-input");
const kmButton = document.getElementById("km-button");
const kmResult = document.getElementById("km-result");
const handleKmConvert = () => {
    const kilometres = kmInput.value.split(",").map(Number);
    const miles = kilometres.map(kilometresToMiles);
    kmResult.textContent = miles.map((value) => value.toFixed(2)).join(", ");
};
kmButton.addEventListener("click", handleKmConvert);
const celsiusInput = document.getElementById("celsius-input");
const celsiusButton = document.getElementById("celsius-button");
const celsiusResult = document.getElementById("celsius-result");
const handleCelsiusConvert = () => {
    const celsius = celsiusInput.value.split(",").map(Number);
    const fahrenheit = celsius.map(celsiusToFahrenheit);
    celsiusResult.textContent = fahrenheit
        .map((value) => value.toFixed(2))
        .join(", ");
};
celsiusButton.addEventListener("click", handleCelsiusConvert);
const fahrenheitInput = document.getElementById("fahrenheit-input");
const fahrenheitButton = document.getElementById("fahrenheit-button");
const fahrenheitResult = document.getElementById("fahrenheit-result");
const handleFahrenheitConvert = () => {
    const fahrenheit = fahrenheitInput.value.split(",").map(Number);
    const celsius = fahrenheit.map(fahrenheitToCelsius);
    fahrenheitResult.textContent = celsius
        .map((value) => value.toFixed(2))
        .join(", ");
};
fahrenheitButton.addEventListener("click", handleFahrenheitConvert);
