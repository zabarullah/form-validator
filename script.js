const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    //using constraint API
    isValid = form.checkValidity();
    // Style main message for an error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return; // we have a return statement here to break out of the function to prevent it running unnecessarily 
    }
    // Check to see if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true;
        password1El.style.borderColor = 'rgb(176, 233, 250)';
        password2El.style.borderColor = 'rgb(176, 233, 250)';
    } else {
        passwordsMatch = false;
        message.textContent = 'Make sure passwords match.';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;  // we have a return statement here to break out of the function to prevent it running unnecessarily
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = 'Successfully registered.';
        message.style.color = 'rgb(176, 233, 250)';
        messageContainer.style.borderColor = 'rgb(176, 233, 250)';

    }
}

function processFormData(e) {
    e.preventDefault();
    // Method to validate the form
    validateForm();
    //submit data if valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value 
    };
    // Do something with user date
    console.log(user); // in real there would be a function to pass on the data to a database
}


// Event Listener
form.addEventListener('submit', processFormData);