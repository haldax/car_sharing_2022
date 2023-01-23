var clicks = 0;
var totalKeys = 0;
var startMs;
var totalHours = 0;
var totalMinutes = 0;
var totalSeconds = 0;

//track the mouse clicks
document.onclick = function(){
    clicks++;
    document.getElementById("track-clicks").innerHTML="Number of mouse clicks: " + clicks;
}

//track total key presses
document.onkeydown = function(){
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
    var user = document.getElementById("user").value.length;
    var email = document.getElementById("email").value.length;
    var pw = document.getElementById("pw").value.length;
    var fname = document.getElementById("fname").value.length;
    var lname = document.getElementById("lname").value.length;
    var address = document.getElementById("address").value.length;
    var country = document.getElementById("country").value.length;
    var zipcode = document.getElementById("zipcode").value.length;
    var about = document.getElementById("about").value;

    //exclude the text in the optional box if nothing has been written by the user
    if (about.includes("(Optional)Say something about yourself..")){
        about = 0;
    } else{
        about = about.length;
    }

    var totalChar = user + email + pw + fname + lname + address + country + zipcode + about;
    document.getElementById("track-total-chars").innerHTML = "Total number of characters typed: " + totalChar;
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
    document.getElementById("hidden-div-fields").style.display = "block";
}
