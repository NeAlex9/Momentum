const time = document.querySelector('.time'),
    date = document.querySelector('.date'),
    greeting = document.querySelector('.greeting'),
    name = document.querySelector('.name'),
    focus = document.querySelector('.focus'),
    images = ['01.jpg', '02.jpg', '03.jpg', '04.jpg','05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg',
        '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg',
        '19.jpg', '20.jpg'];
let randomIndexesForImages = [],
    currentImageIndex = 0,
    currentDate = new Date(),
    currentHour = currentDate.getHours(),
    buttonChange = document.querySelector('.toggle_bg_button');

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

function GetRandomNumber(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
}

function GenerateRandomIndexes() {
    let arr = [];
    while (arr.length !== 20) {
        let number = GetRandomNumber(0, 20);
        if (arr.indexOf(number) === -1)
            arr.push(number);
    }
    return arr;
}

function ChangeBackground(){
    currentImageIndex = (currentImageIndex >= 19) ? currentImageIndex = 0 : currentImageIndex++;
    SetBackground();
}

function CheckTimeToToggleBG(src){
    let time = new Date(),
        hour = time.getHours();
    if (currentHour !== hour) {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            ChangeBackground();
        }
        currentHour = hour;
    }
    setTimeout(CheckTimeToToggleBG, 1000);
}

function SetBackground() {
    let today = new Date(),
        hour = today.getHours();
    if (hour >= 6 && hour <= 12) {
        document.body.style.backgroundImage = "url('assets/images/morning/" +
            images[randomIndexesForImages[currentImageIndex]];
        greeting.textContent = 'Good Morning, ';
    } else if (hour > 12 && hour <= 18) {
        document.body.style.backgroundImage = "url('assets/images/day/" +
            images[randomIndexesForImages[currentImageIndex]];
        greeting.textContent = 'Good Afternoon, ';
    } else if (hour > 18 && hour <= 24) {
        document.body.style.backgroundImage = "url('assets/images/evening/" +
            images[randomIndexesForImages[currentImageIndex]];
        greeting.textContent = 'Good Evening, ';
    } else {
        document.body.style.backgroundImage = "url('assets/images/night/" +
            images[randomIndexesForImages[currentImageIndex]];
        greeting.textContent = 'Good night, ';
    }
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
ShowTime();
ShowDate();
randomIndexesForImages = GenerateRandomIndexes();
SetBackground();
CheckTimeToToggleBG();
buttonChange.addEventListener('click', function (){
    currentImageIndex = (currentImageIndex >= 19) ? currentImageIndex = 0 : ++currentImageIndex;
    const img = new Image();
    img.src = src;
    img.onload = () => {
        SetBackground();
    }
})
getName();
getFocus();