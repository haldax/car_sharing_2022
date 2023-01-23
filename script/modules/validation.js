// regex
const pat_username = /^[A-Z][A-Za-z0-9]{3,10}[\d\\#?!@$%^&*-]$/;
const pat_pw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/;
const pat_name = /[A-Za-z]+/;
const pat_zip = /\d{4}[/a-zA-Z]{2}/;
const pat_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// basic functions
const required = field => {
    return field !== '';
}

const validLength = (min, max, length) => {
    return (length >= min) && (length <= max);
}

const validPattern = (pattern, value) => {
    return pattern.test(value);
}

const promptError = (element, msg) => {
    const parent = element.parentElement;
    parent.classList.remove('success');
    parent.classList.add('error');
    const grandparent = parent.parentElement;
    const small = grandparent.querySelector('.reminder');
    small.textContent = msg;
}

const promptSuccess = (element) => {
    const parent = element.parentElement;
    parent.classList.remove('error');
    parent.classList.add('success');
    const grandparent = parent.parentElement;
    const small = grandparent.querySelector('.reminder');
    small.textContent = 'Looks good!';
}

// check username
const checkUsername = (username) => {
    const value = username.value.trim();
    if (!required(value)) {
        promptError(username, "Please fill in username.");
        return false;
    } else if (!validLength(5,12,value.length)) {
        promptError(username, "Username must be between 5 and 12 characters.");
        return false;
    } else if (!validPattern(pat_username, value)) {
        promptError(username, "Username must start with a capital letter and end with a number of special character");
        return false;
    } else {
        promptSuccess(username);
        return true;
    }
}

// check password
const checkPW = (pw) => {
    const value = pw.value.trim();
    if (!required(value)) {
        promptError(pw,"Please fill in password.");
        return false;
    } else if (!validLength(12,9999,value.length)) {
        promptError(pw,"Username must be at lease 12 characters. 14 or more is better.");
        return false;
    } else if (!validPattern(pat_pw, value)) {
        promptError(pw,"Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special symbol");
        return false;
    } else {
        promptSuccess(pw);
        return true;
    }
}

// check first name
const checkFName = (fname) => {
    const value = fname.value.trim();
    if (!required(value)) {
        promptError(fname,"Please fill in First name.");
        return false;
    } else if (!validPattern(pat_name, value)) {
        promptError(fname,"Name must only contain alphabet letter");
        return false;
    } else {
        promptSuccess(fname);
        return true;
    }
}

// check last name
const checkLName = (lname) => {
    const value = lname.value.trim();
    if (!required(value)) {
        promptError(lname, "Please fill in Last name.");
        return false;
    } else if (!validPattern(pat_name, value)) {
        promptError(lname, "Name must only contain alphabet letter");
        return false;
    } else {
        promptSuccess(lname);
        return true;
    }
}

// check country
const checkCountry = (country) => {
    const value = country.value.trim();
    if (!required(value)) {
        promptError(country,"Please fill in name of the country.");
        return false;
    } else {
        promptSuccess(country);
        return true;
    }
}

// check zip code
const checkZip = (zip) => {
    const value = zip.value.trim();
    if (!required(value)) {
        promptError(zip, "Please fill in zip code.");
        return false;
    } else if(validLength(6,6,zip.length)) {
        promptError(zip, "Please fill in zip code in 4 digits and 2 characters.");
        return false;
    }else if (!validPattern(pat_zip, value)) {
        promptError(zip, "Zip code must contain 4 numbers and 2 letters.");
        return false;
    } else {
        promptSuccess(zip);
        return true;
    }
}

// check email
const checkEmail = (email) => {
    const value = email.value.trim();
    if (!required(value)) {
        promptError(email, "Please fill in email address.");
        return false;
    } else if (!validPattern(pat_email, value)) {
        promptError(email,"Please fill in valid email address");
        return false;
    } else {
        promptSuccess(email);
        return true;
    }
}
// check sex
const checkSex = (sex) => {
    const value = sex.value.trim();
    if (!required(value)) {
        promptError(sex, "Please choose sex.");
        return false;
    } else {
        promptSuccess(sex);
        return true;
    }
}

// check language
const checkLanguage = (language) => {
    const value = language.value.trim();
    if (!required(value)) {
        promptError(language, "Please choose preferred langugae.");
        return false;
    } else {
        promptSuccess(language);
        return true;
    }
}

export {checkUsername, checkPW, checkFName, checkLName, checkLanguage,
    checkCountry, checkEmail, checkSex, checkZip};
