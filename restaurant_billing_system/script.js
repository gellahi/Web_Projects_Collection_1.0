document.getElementById("billAmount").addEventListener("input", handleBillAmountChange);
document.getElementById("tipPercentage").addEventListener("input", handleTipChange);
document.getElementById("numPeople").addEventListener("input", handleNumPeopleChange);

function handleBillAmountChange() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const billAmountError = document.getElementById("billAmountError");
    
    if (isNaN(billAmount) || billAmount < 0 || billAmount > 10000) {
        billAmountError.innerText = "Bill amount should be between 0 and 10,000.";
    } else {
        billAmountError.innerText = "";
    }

    // Handle tip percentage for bill amounts >= 5000
    if (billAmount >= 5000) {
        document.getElementById("tipPercentage").value = 5;
        document.getElementById("tipPercentage").disabled = true;
        document.getElementById("tipPercentageError").innerText = "Tip is fixed to 5% for bills of $5000 or more.";
    } else {
        document.getElementById("tipPercentage").disabled = false;
        document.getElementById("tipPercentageError").innerText = "";
    }

    updateReceipt();
}

function handleTipChange() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    const tipPercentageError = document.getElementById("tipPercentageError");
    
    if (billAmount < 5000 && (isNaN(tipPercentage) || tipPercentage < 0 || tipPercentage > 100)) {
        tipPercentageError.innerText = "Tip percentage should be between 0 and 100.";
    } else {
        tipPercentageError.innerText = "";
    }

    updateReceipt();
}

function handleNumPeopleChange() {
    const numPeople = parseInt(document.getElementById("numPeople").value);
    const numPeopleError = document.getElementById("numPeopleError");
    
    if (isNaN(numPeople) || numPeople < 1 || numPeople > 10) {
        numPeopleError.innerText = "Number of people must be between 1 and 10.";
    } else {
        numPeopleError.innerText = "";
    }

    updateReceipt();
}

function updateReceipt() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);
    const numPeople = parseInt(document.getElementById("numPeople").value);

    if (isNaN(billAmount) || isNaN(tipPercentage) || isNaN(numPeople) || billAmount < 0 || billAmount > 10000 || numPeople < 1 || numPeople > 10) {
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
