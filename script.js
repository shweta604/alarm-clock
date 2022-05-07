const clock = document.getElementById('current-time');

// displays current time of the day
function currentTime() {
    let today = new Date(); // creating a date object with current date and time. Date objects are static. The computer time is ticking, but date objects are not.
    let currentTime = today.toLocaleTimeString(); // it is going to take the current time of the pc(local time).

    clock.innerHTML = currentTime;
}

// to repeat it after every one second
setInterval(currentTime, 1000);