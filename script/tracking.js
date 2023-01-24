let clicks = 0;
let totalKeys = 0;
let startMs;
let totalHours = 0;
let totalMinutes = 0;
let totalSeconds = 0;

let buttonClicks = 0;
let userK = 0;
let userC = 0;
let emailK = 0;
let emailC = 0;
let pwK = 0;
let pwC = 0;
let fnameK = 0;
let fnameC = 0;
let lnameK = 0;
let lnameC = 0;
let addressK = 0;
let addressC = 0;
let countryK = 0;
let countryC = 0;
let zipcodeK = 0;
let zipcodeC = 0;
let sexK = 0;
let sexC = 0;
let languageK = 0;
let languageC = 0;
let aboutK = 0;
let aboutC = 0;

//track the mouse clicks
document.onclick = function(){
    clicks++;
    document.getElementById("track-clicks").innerHTML="Number of mouse clicks: " + clicks;
}

//track total key presses
document.onkeyup = function(){
    totalKeys++;
    document.getElementById("track-total-keys").innerHTML = "Total key presses: " + totalKeys;
    totalCharacters();              //immediately update the amount of characters
}

//set the time of opening the page
window.onload = function(){
    startMs = Date.now();           //start time in milliseconds
}

//don't stop counting the time
setInterval(totalTime, 1000);

function totalTime(){
    let endMs = Date.now();

    //calculate the total time in hours/minutes/seconds
    let totalMs = endMs - startMs;
    let fullSeconds = Math.floor(totalMs / 1000);

    if(fullSeconds < 60){
        totalSeconds = fullSeconds;
    } else{
        totalSeconds = fullSeconds % 60;
        fullMinutes = Math.floor(fullSeconds / 60);

        if(fullMinutes < 60){
            totalMinutes = fullMinutes;
        } else{
            totalMinutes = fullMinutes % 60;
            totalHours = Math.floor(fullMinutes / 60);
        }
    }

    //display the time
    document.getElementById("track-time").innerHTML = "Total time spent: " + totalHours + " hours, " + 
        totalMinutes + " minutes and " + totalSeconds + " seconds";
}

//count total characters typed
function totalCharacters(){
    userC = document.getElementById("user").value.length;
    emailC = document.getElementById("email").value.length;
    pwC = document.getElementById("pw").value.length;
    fnameC = document.getElementById("fname").value.length;
    lnameC = document.getElementById("lname").value.length;
    addressC = document.getElementById("address").value.length;
    countryC = document.getElementById("country").value.length;
    zipcodeC = document.getElementById("zipcode").value.length;
    let about = document.getElementById("about").value;

    //exclude the text in the optional box if nothing has been written by the user
    if (about.includes("(Optional)Say something about yourself..")){
        aboutC = 0;
    } else{
        aboutC = about.length;
    }

    let totalChar = userC + emailC + pwC + fnameC + lnameC + addressC + countryC + zipcodeC + aboutC;
    document.getElementById("track-total-chars").innerHTML = "Total number of characters typed: " + totalChar;
}

//count the number of key presses per field
function addKey(id){
    document.getElementById(id).onkeyup = function(){
        switch(id){
            case "user":
                userK++;
                break;
            case "email":
                emailK++;
                break;
            case "pw":
                pwK++;
                break;
            case "fname":
                fnameK++;
                break;
            case "lname":
                lnameK++;
                break;
            case "address":
                addressK++;
                break;
            case "country":
                countryK++;
                break;
            case "zipcode":
                zipcodeK++;
                break;
            case "sex":
                sexK++;
                break;
            case "language":
                languageK++;
                break;
            case "about":
                aboutK++;
                break;
        }
    }
}

//make the hidden div visible
function showDiv(e){
    e.preventDefault();
    document.getElementById("hidden-div").style.display="block";
}

//make the hidden div with the table visible
function showFields(){
    buttonClicks++;         //to determine if the table should be visible

    if((buttonClicks % 2) == 0){
        document.getElementById("hidden-div-fields").style.display = "none";
    } else{
        document.getElementById("userK").innerHTML = userK;
        document.getElementById("userC").innerHTML = userC;
        document.getElementById("emailK").innerHTML = emailK;
        document.getElementById("emailC").innerHTML = emailC;
        document.getElementById("pwK").innerHTML = pwK;
        document.getElementById("pwC").innerHTML = pwC;
        document.getElementById("fnameK").innerHTML = fnameK;
        document.getElementById("fnameC").innerHTML = fnameC;
        document.getElementById("lnameK").innerHTML = lnameK;
        document.getElementById("lnameC").innerHTML = lnameC;
        document.getElementById("addressK").innerHTML = addressK;
        document.getElementById("addressC").innerHTML = addressC;
        document.getElementById("countryK").innerHTML = countryK;
        document.getElementById("countryC").innerHTML = countryC;
        document.getElementById("zipcodeK").innerHTML = zipcodeK;
        document.getElementById("zipcodeC").innerHTML = zipcodeC;
        document.getElementById("sexK").innerHTML = sexK;
        document.getElementById("sexC").innerHTML = sexC;
        document.getElementById("languageK").innerHTML = languageK;
        document.getElementById("languageC").innerHTML = languageC;
        document.getElementById("aboutK").innerHTML = aboutK;
        document.getElementById("aboutC").innerHTML = aboutC;

        document.getElementById("hidden-div-fields").style.display = "block";
    }
}
