"use strict";
/*
 * Program:  Unit Converter (CPRG 306 Assignment 1)
 * Group:    Group 12
 * Authors:  Mary Ann Coloma, Ryan Dezall, Matthew Scarrott
 * Date:     September 28, 2026
 *
 * Description:
 * This program is a unit converter for weight, distance and temperature.
 * It can convert kilograms and pounds, kilometres and miles, and Celsius
 * and Fahrenheit, in both directions.
 * Input: the user types one number or a list of numbers separated by
 * commas into one of the forms and clicks Convert.
 * Processing: we made a higher-order function called createConverter that
 * takes the "from" unit and the "to" unit and returns an arrow function.
 * That function converts either a single number or an array of numbers
 * using the right formula.
 * Output: the converted answer (or list of answers) is shown under the
 * form, rounded to two decimal places.
 * The tabs in the navbar let the user switch between Weight, Distance and
 * Temperature.
 */
/* ---------- Conversion formulas ---------- */
// Each formula converts one number from one unit to another.
const kilogramsToPounds = (kilograms) => kilograms * 2.20462;
const poundsToKilograms = (pounds) => pounds * 0.45359237;
const milesToKilometres = (miles) => miles * 1.609344;
const kilometresToMiles = (kilometres) => kilometres / 1.609344;
const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;
/* ---------- Higher-order conversion function ---------- */
// Takes the unit to convert from and the unit to convert to, and returns
// an arrow function that converts a single number or an array of numbers.
const createConverter = (fromUnit, toUnit) => {
    // Default: no conversion (only used if the units don't match a formula)
    let formula = (value) => value;
    if (fromUnit === "kg" && toUnit === "lb") {
        formula = kilogramsToPounds;
    }
    else if (fromUnit === "lb" && toUnit === "kg") {
        formula = poundsToKilograms;
    }
    else if (fromUnit === "mi" && toUnit === "km") {
        formula = milesToKilometres;
    }
    else if (fromUnit === "km" && toUnit === "mi") {
        formula = kilometresToMiles;
    }
    else if (fromUnit === "c" && toUnit === "f") {
        formula = celsiusToFahrenheit;
    }
    else if (fromUnit === "f" && toUnit === "c") {
        formula = fahrenheitToCelsius;
    }
    // The returned conversion function handles a single value or an array
    return (input) => {
        if (Array.isArray(input)) {
            return input.map(formula);
        }
        return formula(input);
    };
};
// Create one conversion function for each form
const convertKgToLbs = createConverter("kg", "lb");
const convertLbsToKg = createConverter("lb", "kg");
const convertMilesToKm = createConverter("mi", "km");
const convertKmToMiles = createConverter("km", "mi");
const convertCelsiusToFahrenheit = createConverter("c", "f");
const convertFahrenheitToCelsius = createConverter("f", "c");
/* ---------- Kilograms to pounds form ---------- */
const kgInput = document.getElementById("kg-input");
const kgButton = document.getElementById("kg-button");
const kgResult = document.getElementById("kg-result");
// Reads the kilograms entered, converts them and shows the pounds
const handleKgConvert = () => {
    if (kgInput.value.trim() === "") {
        kgResult.textContent = "Enter a number";
        return;
    }
    const kilograms = kgInput.value.split(",").map(Number);
    const pounds = convertKgToLbs(kilograms);
    kgResult.textContent = pounds.map((value) => value.toFixed(2)).join(", ");
};
kgButton.addEventListener("click", handleKgConvert);
/* ---------- Pounds to kilograms form ---------- */
const lbsInput = document.getElementById("lbs-input");
const lbsButton = document.getElementById("lbs-button");
const lbsResult = document.getElementById("lbs-result");
// Reads the pounds entered, converts them and shows the kilograms
const handleLbsConvert = () => {
    if (lbsInput.value.trim() === "") {
        lbsResult.textContent = "Enter a number";
        return;
    }
    const pounds = lbsInput.value.split(",").map(Number);
    const kilograms = convertLbsToKg(pounds);
    lbsResult.textContent = kilograms.map((value) => value.toFixed(2)).join(", ");
};
lbsButton.addEventListener("click", handleLbsConvert);
/* ---------- Miles to kilometres form ---------- */
const milesInput = document.getElementById("miles-input");
const milesButton = document.getElementById("miles-button");
const milesResult = document.getElementById("miles-result");
// Reads the miles entered, converts them and shows the kilometres
const handleMilesConvert = () => {
    if (milesInput.value.trim() === "") {
        milesResult.textContent = "Enter a number";
        return;
    }
    const miles = milesInput.value.split(",").map(Number);
    const kilometres = convertMilesToKm(miles);
    milesResult.textContent = kilometres
        .map((value) => value.toFixed(2))
        .join(", ");
};
milesButton.addEventListener("click", handleMilesConvert);
/* ---------- Kilometres to miles form ---------- */
const kmInput = document.getElementById("km-input");
const kmButton = document.getElementById("km-button");
const kmResult = document.getElementById("km-result");
// Reads the kilometres entered, converts them and shows the miles
const handleKmConvert = () => {
    if (kmInput.value.trim() === "") {
        kmResult.textContent = "Enter a number";
        return;
    }
    const kilometres = kmInput.value.split(",").map(Number);
    const miles = convertKmToMiles(kilometres);
    kmResult.textContent = miles.map((value) => value.toFixed(2)).join(", ");
};
kmButton.addEventListener("click", handleKmConvert);
/* ---------- Celsius to Fahrenheit form ---------- */
const celsiusInput = document.getElementById("celsius-input");
const celsiusButton = document.getElementById("celsius-button");
const celsiusResult = document.getElementById("celsius-result");
// Reads the Celsius values entered, converts them and shows the Fahrenheit values
const handleCelsiusConvert = () => {
    if (celsiusInput.value.trim() === "") {
        celsiusResult.textContent = "Enter a number";
        return;
    }
    const celsius = celsiusInput.value.split(",").map(Number);
    const fahrenheit = convertCelsiusToFahrenheit(celsius);
    celsiusResult.textContent = fahrenheit
        .map((value) => value.toFixed(2))
        .join(", ");
};
celsiusButton.addEventListener("click", handleCelsiusConvert);
/* ---------- Fahrenheit to Celsius form ---------- */
const fahrenheitInput = document.getElementById("fahrenheit-input");
const fahrenheitButton = document.getElementById("fahrenheit-button");
const fahrenheitResult = document.getElementById("fahrenheit-result");
// Reads the Fahrenheit values entered, converts them and shows the Celsius values
const handleFahrenheitConvert = () => {
    if (fahrenheitInput.value.trim() === "") {
        fahrenheitResult.textContent = "Enter a number";
        return;
    }
    const fahrenheit = fahrenheitInput.value.split(",").map(Number);
    const celsius = convertFahrenheitToCelsius(fahrenheit);
    fahrenheitResult.textContent = celsius
        .map((value) => value.toFixed(2))
        .join(", ");
};
fahrenheitButton.addEventListener("click", handleFahrenheitConvert);
/* ---------- Navbar tabs ---------- */
const weightTab = document.getElementById("weight-tab");
const distanceTab = document.getElementById("distance-tab");
const temperatureTab = document.getElementById("temperature-tab");
const weightPanel = document.getElementById("weight-panel");
const distancePanel = document.getElementById("distance-panel");
const temperaturePanel = document.getElementById("temperature-panel");
// Hides every panel and removes the highlight from every tab
const hideAllTabs = () => {
    weightPanel.classList.add("hidden");
    distancePanel.classList.add("hidden");
    temperaturePanel.classList.add("hidden");
    weightTab.classList.remove("bg-blue-600", "text-white");
    distanceTab.classList.remove("bg-blue-600", "text-white");
    temperatureTab.classList.remove("bg-blue-600", "text-white");
};
// Shows the chosen panel and highlights its tab
const showTab = (tab, panel) => {
    hideAllTabs();
    panel.classList.remove("hidden");
    tab.classList.add("bg-blue-600", "text-white");
};
weightTab.addEventListener("click", () => showTab(weightTab, weightPanel));
distanceTab.addEventListener("click", () => showTab(distanceTab, distancePanel));
temperatureTab.addEventListener("click", () => showTab(temperatureTab, temperaturePanel));
