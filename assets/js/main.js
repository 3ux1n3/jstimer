let timer;
let sec = 0;
let min = 0;
let hour = 0;


let start_btn = document.getElementById("start");
let pause_btn = document.getElementById("pause");
let reset_btn = document.getElementById("reset");

start_btn.disabled = false;
pause_btn.disabled = true;
reset_btn.disabled = true;
start_btn.addEventListener("click", function () {
    start_btn.disabled = true;
    pause_btn.disabled = false;
    reset_btn.disabled = false;
    if (timer === undefined) {
        timer = setInterval(TimerHandler, 1000);
    }
});


pause_btn.addEventListener("click", function () {
    start_btn.disabled = false;
    pause_btn.disabled = true;
    reset_btn.disabled = false;
    timer = clearInterval(timer);
});


reset_btn.addEventListener("click", function () {
    start_btn.disabled = false;
    pause_btn.disabled = true;
    reset_btn.disabled = true;
    timer = clearInterval(timer);
    sec = 0;
    min = 0;
    hour = 0;
    DisplayTime();
});

function TimerHandler() {
    sec++;
    if (sec === 60) {
        sec = 0;
        min++;
    }
    if (min === 60) {
        min = 0;
        hour++;
    }

    console.log(hour + ":" + min + " : " + sec);
    DisplayTime();
}

function DisplayTime() {
    let sec_pretty = sec;
    let min_pretty = min;
    let hour_pretty = hour;
    if (sec < 10) {
        sec_pretty = "0" + sec;
    }
    if (min < 10) {
        min_pretty = "0" + min;
    }
    if (hour < 10) {
        hour_pretty = "0" + hour;
    }

    let timer_el = document.getElementById("timer")
    timer_el.innerHTML = hour_pretty + " : " + min_pretty + " : " + sec_pretty;

}