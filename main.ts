const kilogramsToPounds = (kilograms: number): number => kilograms * 2.20462;
const poundsToKilograms = (pounds: number): number => pounds * 0.45359237;
const milesToKilometres = (miles: number): number => miles * 1.609344;
const kilometresToMiles = (kilometres: number): number => kilometres / 1.609344;
const celsiusToFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32;
const fahrenheitToCelsius = (fahrenheit: number): number =>
  ((fahrenheit - 32) * 5) / 9;

const kgInput = document.getElementById("kg-input") as HTMLInputElement;
const kgButton = document.getElementById("kg-button") as HTMLButtonElement;
const kgResult = document.getElementById("kg-result") as HTMLParagraphElement;

const handleKgConvert = (): void => {
  const kilograms: number[] = kgInput.value.split(",").map(Number);
  const pounds: number[] = kilograms.map(kilogramsToPounds);
  kgResult.textContent = pounds.map((value) => value.toFixed(2)).join(", ");
};

kgButton.addEventListener("click", handleKgConvert);

const lbsInput = document.getElementById("lbs-input") as HTMLInputElement;
const lbsButton = document.getElementById("lbs-button") as HTMLButtonElement;
const lbsResult = document.getElementById("lbs-result") as HTMLParagraphElement;

const handleLbsConvert = (): void => {
  const pounds: number[] = lbsInput.value.split(",").map(Number);
  const kilograms: number[] = pounds.map(poundsToKilograms);
  lbsResult.textContent = kilograms.map((value) => value.toFixed(2)).join(", ");
};

lbsButton.addEventListener("click", handleLbsConvert);

const milesInput = document.getElementById("miles-input") as HTMLInputElement;
const milesButton = document.getElementById(
  "miles-button",
) as HTMLButtonElement;
const milesResult = document.getElementById(
  "miles-result",
) as HTMLParagraphElement;

const handleMilesConvert = (): void => {
  const miles: number[] = milesInput.value.split(",").map(Number);
  const kilometres: number[] = miles.map(milesToKilometres);
  milesResult.textContent = kilometres
    .map((value) => value.toFixed(2))
    .join(", ");
};

milesButton.addEventListener("click", handleMilesConvert);

const kmInput = document.getElementById("km-input") as HTMLInputElement;
const kmButton = document.getElementById("km-button") as HTMLButtonElement;
const kmResult = document.getElementById("km-result") as HTMLParagraphElement;

const handleKmConvert = (): void => {
  const kilometres: number[] = kmInput.value.split(",").map(Number);
  const miles: number[] = kilometres.map(kilometresToMiles);
  kmResult.textContent = miles.map((value) => value.toFixed(2)).join(", ");
};

kmButton.addEventListener("click", handleKmConvert);

const celsiusInput = document.getElementById(
  "celsius-input",
) as HTMLInputElement;
const celsiusButton = document.getElementById(
  "celsius-button",
) as HTMLButtonElement;
const celsiusResult = document.getElementById(
  "celsius-result",
) as HTMLParagraphElement;

const handleCelsiusConvert = (): void => {
  const celsius: number[] = celsiusInput.value.split(",").map(Number);
  const fahrenheit: number[] = celsius.map(celsiusToFahrenheit);
  celsiusResult.textContent = fahrenheit
    .map((value) => value.toFixed(2))
    .join(", ");
};

celsiusButton.addEventListener("click", handleCelsiusConvert);

const fahrenheitInput = document.getElementById(
  "fahrenheit-input",
) as HTMLInputElement;
const fahrenheitButton = document.getElementById(
  "fahrenheit-button",
) as HTMLButtonElement;
const fahrenheitResult = document.getElementById(
  "fahrenheit-result",
) as HTMLParagraphElement;

const handleFahrenheitConvert = (): void => {
  const fahrenheit: number[] = fahrenheitInput.value.split(",").map(Number);
  const celsius: number[] = fahrenheit.map(fahrenheitToCelsius);
  fahrenheitResult.textContent = celsius
    .map((value) => value.toFixed(2))
    .join(", ");
};

fahrenheitButton.addEventListener("click", handleFahrenheitConvert);
