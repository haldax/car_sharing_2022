const pat_pw = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{12,}$/;
const pat_username = /^[A-Z][A-Za-z0-9]{3,10}[\d\\#?!@$%^&*-]$/;
const pat_name = /[A-Za-z]+/;
const pat_zip = /\d{4}[/a-zA-Z]{2}/;

const bt_submit = document.getElementById("submit");
const username = document.getElementById("user");
const email = document.getElementById("email");
const pw = document.getElementById("pw");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");

function goodText() {
    const looksGood = document.createElement("p");
    looksGood.innerHTML = "Looks good!";
    looksGood.color = "green";
    return looksGood;
}

function badText(requiredInput) {
    const reminder = document.createElement("p");
    reminder.innerHTML = "Please provide a valid " + requiredInput + ".";
    reminder.color = "green";
    return reminder;
}

function testRequired(element) {
    if (element.value !== "") {
        element.border.style = "red solid 1px";
        element.setCustomValidity("Missing input");
        /*const parentNode = element.parentNode;
        const looksGood = goodText();
        parentNode.append(looksGood);*/
    } else {
        element.border.style = "green solid 1px";
        element.setCustomValidity("Looks good!");
    }
}
bt_submit.onclick = () => testRequired(username);