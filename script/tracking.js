var clicks = 0;
var totalKeys = 0;
var startMs;
var totalHours = 0;
var totalMinutes = 0;
var totalSeconds = 0;

var buttonClicks = 0;
var userK = 0;
var userC = 0;
var emailK = 0;
var emailC = 0;
var pwK = 0;
var pwC = 0;
var fnameK = 0;
var fnameC = 0;
var lnameK = 0;
var lnameC = 0;
var addressK = 0;
var addressC = 0;
var countryK = 0;
var countryC = 0;
var zipcodeK = 0;
var zipcodeC = 0;
var sexK = 0;
var sexC = 0;
var languageK = 0;
var languageC = 0;
var aboutK = 0;
var aboutC = 0;

//track the mouse clicks
document.onclick = function(){
    clicks++;
    document.getElementById("track-clicks").innerHTML="Number of mouse clicks: " + clicks;
}

//track total key presses
document.onkeyup = function(){
    totalKeys++;
    document.getElementById("track-total-keys").innerHTML = "Total key presses: " + totalKeys;
}

//set the time of opening the page
window.onload = function(){
    startMs = Date.now();           //start time in milliseconds
}

function totalTime(){
    var endMs = Date.now();

    //calculate the total time in hours/minutes/seconds
    var totalMs = endMs - startMs;
    var fullSeconds = Math.floor(totalMs / 1000);

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
    var about = document.getElementById("about").value;

    //exclude the text in the optional box if nothing has been written by the user
    if (about.includes("(Optional)Say something about yourself..")){
        aboutC = 0;
    } else{
        aboutC = about.length;
    }

    var totalChar = userC + emailC + pwC + fnameC + lnameC + addressC + countryC + zipcodeC + aboutC;
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
    totalTime();
    totalCharacters();
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
