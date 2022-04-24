let m = 18.5;
let cat = "NORMAL";
function calculate() {
  let result = document.getElementById("bmi");
  let category = document.getElementById("category");
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let currentCategory = "";
  if (weight >= 5 && height >= 45) {
    let bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);
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
    result.textContent = bmi;
    category.textContent = currentCategory.toUpperCase();
    cat = currentCategory;
    m = bmi;
    console.log(bmi);
    console.log(height + " " + weight);
  }
}

let copyText = "BMI : " + m + "\nCategory : " + cat.toUpperCase();

function copy() {
  navigator.clipboard.writeText(copyText);
}

function reset() {
  height.value = "";
  weight.value = "";
  copyText = "";
}
// checking for reload

if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
  height.value = 180;
  weight.value = 60;
}
