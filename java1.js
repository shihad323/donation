// Function to load and display total credit on page load
function loadTotalCredit() {
    const totalCredit = localStorage.getItem('totalCredit');
    const creditAmount = totalCredit ? parseFloat(totalCredit).toFixed(2) : "0.00";
    document.getElementById('totalCreditDisplay').innerText = `Your Total Credit: ৳${creditAmount}`;
}

// Call this function on page load
window.addEventListener('DOMContentLoaded', loadTotalCredit);

// Function to handle donation and update total amount
function updateDonation(donationId, amountId, haveId) {
    const addMoney = parseFloat(document.getElementById(amountId).value);
    const totalCredit = parseFloat(localStorage.getItem('totalCredit') || "0");

    console.log(addMoney);
console.log(totalCredit);

    // Validate donation amount
    if (isNaN(addMoney) || addMoney <= 0) {
        alert('Please enter a valid donation amount.');
        return;
    }

    const totalAfterDonation = totalCredit - addMoney;
    if (totalAfterDonation < 0) {
        alert('Insufficient credits. Please check your available credits.');
        return;
    }

    // Update the donation amount for specified cause
    const alreadyDonated = parseFloat(document.getElementById(haveId).innerText) || 0;
    const totalMoney = alreadyDonated + addMoney;
    document.getElementById(haveId).innerText = totalMoney.toFixed(2);

    // Update the total credit display and save to localStorage
    document.getElementById('totalCreditDisplay').innerText = `Total Credit: ৳${totalAfterDonation.toFixed(2)}`;
    localStorage.setItem('totalCredit', totalAfterDonation.toFixed(2));

    // Optionally clear the donation input field
    document.getElementById(amountId).value = '';

    // Log donation in history
    createHistoryEntry(addMoney, donationId);
}


// Event listener for the Noakhali donation button
document.getElementById('donate-noakhali').addEventListener('click', function(event) {
    event.preventDefault();
    updateDonation('Noakhali', 'give-noakhali', 'have-noakhali');
});
document.getElementById('donate-feni').addEventListener('click', function(event) {
    event.preventDefault();
    updateDonation('Feni', 'give-feni', 'have-feni');
});
document.getElementById('donate-quota').addEventListener('click', function(event) {
    event.preventDefault();
    updateDonation('Quota', 'give-quota', 'have-quota');
});
document.getElementById('donate-tree').addEventListener('click', function(event) {
    event.preventDefault();
    updateDonation('Tree', 'give-tree', 'have-tree');
});
document.getElementById('donate-river').addEventListener('click', function(event) {
    event.preventDefault();
    updateDonation('River', 'give-river', 'have-river');
});




// Function to create a history entry and store in localStorage
function createHistoryEntry(amount, donationType) {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const entry = {
        amount: amount,
        cause: donationType,
        date: `${now.toLocaleDateString()} ${timeString}`
    };

    // Save to localStorage
    const donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];
    donationHistory.push(entry);
    localStorage.setItem('donationHistory', JSON.stringify(donationHistory));

    // Update history on the page, if there's a container element
   /* const container = document.getElementById('container');
    if (container) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('history-entry');
        newDiv.innerHTML = `<div>${entry.amount} Taka donated for ${donationType} <br> Date: ${entry.date}</div>`;
        container.appendChild(newDiv);
    }*/
}

// Load total credit on page load and set initial values
loadTotalCredit();
