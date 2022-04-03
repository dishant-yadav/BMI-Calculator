let m = 18.5,
  cat = "normal".toUpperCase();
let result = document.getElementById("result");
let category = document.getElementById("category");
function calculate() {
  let herror = document.getElementById("h-error");
  let hstatus = true;
  let werror = document.getElementById("w-error");
  let wstatus = true;
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let currentCategory = "";
  if (weight >= 10 && height >= 50) {
    let bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
    result.textContent = bmi;
    if (bmi <= 18.4) {
      currentCategory = "underweight";
      category.style.color = "darkorange";
      result.style.color = "darkorange";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      currentCategory = "normal";
      category.style.color = "darkgreen";
      result.style.color = "darkgreen";
    } else if (bmi >= 25 && bmi <= 30) {
      currentCategory = "overweight";
      category.style.color = "red";
      result.style.color = "red";
    } else if (height == "" || weight == "" || isNaN(bmi)) {
      currentCategory = "please fill in the details to get your bmi ";
      result.textContent = "";
      category.style.fontSize = "22px";
      category.style.color = "red";
    } else {
      currentCategory = "obsese";
      category.style.color = "darkred";
      result.style.color = "darkred";
    }
    category.textContent = currentCategory;
    cat = currentCategory;
    m = bmi;
  }
}

function copy() {
  navigator.clipboard.writeText("BMI : " + m + "\nCategory : " + cat.toUpperCase());
}

function reset() {
  height.value = 180;
  weight.value = 60;
  result.textContent = "18.5";
  category.textContent = "Normal".toUpperCase();
  category.style.color = "darkgreen";
  result.style.color = "darkgreen";
}

if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
  height.value = 180;
  weight.value = 60;
}
// checking for reload
