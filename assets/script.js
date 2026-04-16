// assets/script.js
const form = document.querySelector('form');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    // URLSearchParams ensures the data is formatted as 'application/x-www-form-urlencoded'
    // which is the format the Particle API likes best.
    const formData = new URLSearchParams(new FormData(form));
    
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response from Cloud:", data);
        if(data.return_value === 1) {
            alert("Success: LED Toggled!");
        } else {
            alert("Cloud received command but returned error: " + data.return_value);
        }
    })
    .catch(error => {
        alert("Network Error: " + error);
    });
});