// Handle the form submission
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    // Get the username and password values
    var username = document.getElementById('username').value;
    console.log('Username:', username); // Debug: Check if username is retrieved

    var password = document.getElementById('password-field').value; // Make sure the ID is correct
    console.log('Password:', password); // Debug: Check if password is retrieved

    // Prepare the data for POST request
    var data = new URLSearchParams();
    data.append('username', username);
    data.append('password', password);

    // Send POST request to the Google Apps Script backend
    fetch('https://script.google.com/macros/s/AKfycbyPqGsDLpq2o8xwaUOvsdmacNZ_P1gpZqzIkCoJXWc7kDP0WumNPcYfAnVJFpemqYJ-XQ/exec', { // Google Apps Script URL
        method: 'POST',
        body: data
    })
    .then(response => response.json())
    .then(result => {
        if (result.success) {
            document.getElementById('result').innerText = "Login successful!";
            document.getElementById('result').style.color = "green";
            // Redirect to Google after 1 second
            setTimeout(function() {
                window.location.href = 'https://www.google.com';
            }, 1000);  // Redirect after 1 second delay
        } else {
            document.getElementById('result').innerText = "Invalid credentials. Please try again.";
            document.getElementById('result').style.color = "red";
        }
    })
    .catch(error => {
        document.getElementById('result').innerText = "Error: Unable to login.";
        document.getElementById('result').style.color = "red";
        console.error('Error:', error);
    });
});
