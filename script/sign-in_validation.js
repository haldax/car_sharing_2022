// import validation utility methods
import {checkPW, checkEmail} from './modules/validation.js';

// get HTML elements
const form = document.getElementById("form-signin");
const pw = document.getElementById("pw");
const email = document.getElementById("email");

// validation handler
const handler = (e) => {
    // prevent form from submitting before validation
    e.preventDefault();

    // check all fields
    let okEmail = checkEmail(email), okPw = checkPW(pw);
    if (okPw && okEmail) {
        // send the form to server DB
    }
}

// set listener to trigger validation
form.addEventListener('submit', handler);