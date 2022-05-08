const clock = document.getElementById('current-time');
const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const setAlarm = document.getElementById('on');
const clearAlarm = document.getElementById('off');
var alarmList = document.getElementById('alarm-list');
const ampm = document.getElementById('am-pm');

// contains all the set alarms
var alarms = [];

//current time
var now;

// displays current time of the day
function currentTime() {
    let today = new Date(); // creating a date object with current date and time. Date objects are static. The computer time is ticking, but date objects are not.
    now = today.toLocaleTimeString(); // it is going to take the current time of the pc(local time).

    // calling ringing function when now is equal to one of the element in the alarms array
    if(alarms.includes(now)){
        console.log('ringing...');
        ringing(now);
    }

    clock.innerHTML = now;
}

// to repeat it after every one second
setInterval(currentTime, 1000);

// add 0 to 12 range for hour drop down
function displayHour(time){
    let select = time; // for selecting the hour option
    let endPoint = 12;

    for(let digit = 0; digit <= endPoint; digit++){
        // to create an option dynamically
        select.options[select.options.length] = new Option(digit < 10 ? '0' + digit : digit);
    }
}

displayHour(hour);

// add 0 to 59 range for minute drop down
function displayMinandSec(time){
    let select = time; // for selecting the minute and second option
    let endPoint = 59;

    for(let digit = 0; digit <= endPoint; digit++){
        // to create an option dynamically
        select.options[select.options.length] = new Option(digit < 10 ? '0' + digit : digit);
    }
}

displayMinandSec(minute);
displayMinandSec(second);

// set an alarm for the specified time and push it into the ul 
setAlarm.addEventListener('click', function(){
    // time for the set alarm
    let alarmValue = `${hour.value}:${minute.value}:${second.value} ${ampm.value}`;
    // console.log(alarmValue);

    // didn't set an alarm/ invalid time
    if(hour.value == 0 && minute.value == 0 && second.value == 0){
        window.alert('Please set an alarm');
    }
    // cannot set duplicate alarm
    else if(alarms.includes(alarmValue)){
        window.alert('Alarm is already set for the specified time');
    }
    else{
        // push the value into alarm list 
        alarms.push(alarmValue);

        let newLi = document.createElement('li');

        // every list item in the ul will look like this
        let newLiInnerHtml = `
            <span>${alarmValue}</span>
            <button id="delete" class="btn btn-danger delete">Delete</button>`;

        newLi.innerHTML = newLiInnerHtml;
        // console.log(newLi);

        alarmList.append(newLi);

        // empty the alarmValue element 
        alarmValue.value = '';
    }
});

// show alert when the alarm goes off
function ringing(now){
    window.alert(`It's ${now}. click ok to turn off the alarm`);
}

// delete an alarm
alarmList.addEventListener('click', function(event){
    // using event delegation on ul to select the specific delete button
    // console.log(event.target);

    if(event.target.classList.contains('delete')){
        // select the specific li
        const targetedLi = event.target.parentNode;
        // console.log(targetedLi);
        targetedLi.remove();
    }
});