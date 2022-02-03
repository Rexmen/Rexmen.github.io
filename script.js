const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const leaveArmy = "23 Mar 2022";

function countdown(){
    const leaveArmyDate = new Date(leaveArmy);
    const currentDate = new Date();

    const totalSeconds =  (leaveArmyDate-currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/ 24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);


    console.log(days, hours, minutes, seconds);
}

function formatTime(time){
    return time < 10 ? (`0${time}`): time;
}

//
countdown();

setInterval(countdown, 1000);