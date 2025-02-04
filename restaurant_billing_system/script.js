function generateReceipt() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    const numPeople = parseInt(document.getElementById("numPeople").value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numPeople) || numPeople <= 0) {
        alert("Please enter valid values.");
        return;
    }

    const taxRate = 0.08;
    const taxAmount = billAmount * taxRate;
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + taxAmount + tipAmount;
    const amountPerPerson = totalAmount / numPeople;

    document.getElementById("receiptBillAmount").innerText = billAmount.toFixed(2);
    document.getElementById("receiptTax").innerText = taxAmount.toFixed(2);
    document.getElementById("receiptTip").innerText = tipAmount.toFixed(2);
    document.getElementById("receiptTotal").innerText = totalAmount.toFixed(2);
    document.getElementById("receiptPerPerson").innerText = amountPerPerson.toFixed(2);
    document.getElementById("finalTotal").innerText = totalAmount.toFixed(2);

    document.getElementById("receipt").style.display = "block";
}