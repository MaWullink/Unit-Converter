const convertBtn = document.getElementById("convert-btn");
const lengthRes = document.getElementById("length");
const volumeRes = document.getElementById("volume");
const massRes = document.getElementById("mass");

convertBtn.addEventListener("click", function () {
  const unit = Number(document.getElementById("unit-input").value);
  calculateLenght(unit);
  calculateVolume(unit);
  calculateMass(unit);
});

function calculateLenght(unit) {
  const feet = unit * 3.281;
  const meters = unit * 0.3048;
  lengthRes.innerHTML += `<p>${unit} meters = ${feet} feet | ${unit} feet = ${meters} meters`;
}

function calculateMass(unit) {
  const pounds = unit * 2.205;
  const kilos = unit * 0.4536;
  massRes.innerHTML += `<p>${unit} kilos = ${pounds} pounds | ${unit} pounds = ${kilos} kilos</p>`;
}

function calculateVolume(unit) {
  const gallons = unit * 0.264;
  const liters = unit * 3.785;
  volumeRes.innerHTML += `<p>${unit} liters = ${gallons} gallons | ${unit} gallons = ${liters} liters</p>`;
}
