        // Load and display the donation history on page load
        document.addEventListener("DOMContentLoaded", function() {
            const historyContainer = document.getElementById('history-container');
            const donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];

            if (donationHistory.length === 0) {
                historyContainer.innerHTML = "<p>No donation history found.</p>";
            } else {
                donationHistory.forEach(entry => {
                    const entryDiv = document.createElement('div');
                    entryDiv.className = 'history-entry';
                    entryDiv.innerHTML = `
                        <div class="entry">
                            ${entry.amount} Taka donated for ${entry.cause} <br>
                            Date: ${entry.date}
                        </div>
                    `;
                    historyContainer.appendChild(entryDiv);
                });
            }
        });

        // Handle donation form submission
        document.getElementById('donation-form').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally

            // Get donation details from form
            const amount = document.getElementById('amount').value;
            const cause = document.getElementById('cause').value;
            const date = new Date().toLocaleString(); // Get current date and time

            // Get existing history from localStorage (if any)
            const donationHistory = JSON.parse(localStorage.getItem('donationHistory')) || [];

            // Add the new donation to the history
            donationHistory.push({ amount, cause, date });

            // Save the updated history back to localStorage
            localStorage.setItem('donationHistory', JSON.stringify(donationHistory));

            // Optionally, clear the form inputs after submission
            document.getElementById('donation-form').reset();

            // Refresh the history section to reflect the new donation
            document.getElementById('history-container').innerHTML = ''; // Clear current displayed history
            donationHistory.forEach(entry => {
                const entryDiv = document.createElement('div');
                entryDiv.className = 'history-entry';
                entryDiv.innerHTML = `
                    <div class="entry">
                        ${entry.amount} Taka donated for ${entry.cause} <br>
                        Date: ${entry.date}
                    </div>
                `;
                document.getElementById('history-container').appendChild(entryDiv);
            });
        });