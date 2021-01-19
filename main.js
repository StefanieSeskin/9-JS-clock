// get  hours, get minutes and put countdown clock on the page with white
//numbers and a black background

setInterval(function() {
let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();



if (hours > 12) {
    hours = hours - "12";
} 

if (hours < 10) {
    hours = "0" + hours;
} else {
    hours = hours;

}
if (minutes < 10) {
    minutes = "0" + minutes;
} else {
    minutes = minutes;

}
if (seconds < 10) {
    seconds = "0" + seconds;
} else {
    seconds = seconds;
}

document.querySelector('#clock').innerHTML = (hours + ":" + minutes + ":" + seconds);

}, 1000);