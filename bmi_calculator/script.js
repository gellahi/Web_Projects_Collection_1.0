function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Please enter valid values.");
        return;
    }

    const bmi = (weight / (height * height)) * 10;
    document.getElementById("bmiValue").innerText = bmi.toFixed(2);

    let category = "";
    let color = "";
    if (bmi < 18.5) {
        category = "Underweight";
        color = "#3498db";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal";
        color = "#2ecc71";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
        color = "#f39c12";
    } else {
        category = "Obese";
        color = "#e74c3c";
    }

    
    document.getElementById("category").style.color = color;
    document.getElementById("category").innerText = category;
    document.getElementById("result").style.display = "block";
}