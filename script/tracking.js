var clicks = 0;
var startMs;
var totalHours = 0;
var totalMinutes = 0;
var totalSeconds = 0;

//set the time of opening the page
window.onload = function(){
    startMs = Date.now();           //start time in milliseconds
}

//track the mouse clicks
document.onclick = function(){
    clicks++;
    document.getElementById("track_clicks").innerHTML="Number of mouse clicks: " + clicks;
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
    document.getElementById("track_time").innerHTML = "Total time spent: " + totalHours + " hours, " + totalMinutes + " minutes and " + totalSeconds + " seconds";
}

//make the hidden div visible
function showDiv(){
    event.preventDefault();
    totalTime();
    document.getElementById("hidden_div").style.display="block";
}
