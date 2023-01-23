// import validation utility methods
import {checkUsername, checkPW, checkFName, checkLName, checkLanguage,
    checkCountry, checkEmail, checkSex, checkZip}
    from './modules/validation.js';

// get HTML elements
const form = document.getElementById("form-signup");
const username = document.getElementById("user");
const pw = document.getElementById("pw");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const country = document.getElementById("country");
const zip = document.getElementById("zipcode");
const email = document.getElementById("email");
const sex = document.getElementById("sex");
const language = document.getElementById("language");
const address = document.getElementById("address");
const bio = document.getElementById("about");

// validation handler
const handler = (e) => {
    // prevent form from submitting before validation
    e.preventDefault();

    // check all fields
    let okUsername = checkUsername(username),
        okEmail = checkEmail(email),
        okPw = checkPW(pw),
        okFname = checkFName(fname),
        okLname = checkLName(lname),
        okCountry = checkCountry(country),
        okZip = checkZip(zip),
        okSex = checkSex(sex),
        okLangugae = checkLanguage(language);

    if (okUsername && okPw && okFname && okLname
        && okCountry && okZip && okEmail && okSex && okLangugae) {
        // alert
        const info = 'Submitted: \n\n'
                    + '\nUsername: ' + username.value
                    +'\nEmail: ' + email.value
                    +'\nPassword: ' + pw.value
                    +'\nFirst Name: ' + fname.value
                    +'\nLast Name: ' + lname.value
                    +'\nZipcode : ' + zip.value
                    +'\nCountry : ' + country.value
                    +'\nAddress : ' + (address.value === address.placeholder ? ' ' :address.value)
                    +'\nSex : ' + sex.value
                    +'\nLanguage : ' + language.value
                    +'\nIntro : ' + (bio.value === bio.placeholder ? ' ' : bio.value);
        window.alert(info);
    }
}
// let submit click trigger event handler
form.addEventListener('submit', handler);
