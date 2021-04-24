const time = document.querySelector('.time'),
    date = document.querySelector('.date');

function ShowTime() {
    let addZero = function (n) {
        return (parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    let today = new Date();
    let hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();
    time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`;
    setTimeout(ShowTime, 1000);
}

function ShowDate() {
    let today = new Date();
    let month = today.toLocaleString('en-GB', {month: 'long'}),
        dayWeek = today.toLocaleString('en-GB', {weekday: 'short'}),
        dayNum = today.toLocaleString('en-GB', {day: '2-digit'});
    date.innerHTML = dayWeek + ', ' + dayNum + ' ' + month;
    setTimeout(ShowDate, 1000);
}

ShowTime();
ShowDate();