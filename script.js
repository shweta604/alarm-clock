const clock = document.getElementById('current-time');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');

// displays current time of the day
function currentTime() {
    let today = new Date(); // creating a date object with current date and time. Date objects are static. The computer time is ticking, but date objects are not.
    let currentTime = today.toLocaleTimeString(); // it is going to take the current time of the pc(local time).

    clock.innerHTML = currentTime;
}

// to repeat it after every one second
setInterval(currentTime, 1000);

// add 0 to 12 range for hour drop down
function displayHour(time){
    let select = time; // for selecting the second and minute option
    let endPoint = 12;

    for(let i = 0; i <= endPoint; i++){
        // to create an option dynamically and add it to a select box
        select.options[select.options.length] = new Option(i < 10 ? '0' + i : i);
    }
}

displayHour(hour);

// add 0 to 59 range to minute and second drop down
function displayMinandSec(time){
    let select = time; // for selecting the second and minute option
    let endPoint = 59;

    for(let i = 0; i <= endPoint; i++){
        // to create an option dynamically and add it to a select box
        select.options[select.options.length] = new Option(i < 10 ? '0' + i : i);
    }
}

displayMinandSec(minute); 
displayMinandSec(second);

