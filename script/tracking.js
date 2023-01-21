var clicks = 0;

//track the mouse clicks
document.onclick = function(){
    clicks++;
    document.getElementById("track_clicks").innerHTML="Number of mouse clicks: " + clicks;
}

//make the hidden div visible
function showDiv(){
    event.preventDefault();
    document.getElementById("hidden_div").style.display="block";
}
