function calculateTip() {
    const billAmount = parseFloat(document.getElementById("billAmount").value);
    const tipPercentage = parseInt(document.getElementById("tipPercentage").value);
    const peopleCount = parseInt(document.getElementById("peopleCount").value);

    if (billAmount > 0 && peopleCount > 0) {
        const tipAmount = (billAmount * tipPercentage / 100).toFixed(2);
        const totalBill = (billAmount + parseFloat(tipAmount)).toFixed(2);
        const perPerson = (totalBill / peopleCount).toFixed(2);

        document.getElementById("tip-result").innerText = `Tip Amount: ₹${tipAmount}`;
        document.getElementById("total-result").innerText = `Total Bill: ₹${totalBill}`;
        document.getElementById("per-person-result").innerText = `Amount Per Person: ₹${perPerson}`;
    } else {
        document.getElementById("tip-result").innerText = 'Please enter valid values for all fields!';
        document.getElementById("total-result").innerText = '';
    }
}
