let name = document.querySelector('.name');

function SetNameWhileStart() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === "") {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

function SetNameWithAcknowledgment(event) {
    if (event.type === 'keypress') {
        if (event.keyCode === 13) {
            if (event.target.innerText !== "") {
                localStorage.setItem('name', event.target.innerText);
            } else {
                event.target.innerText = localStorage['name'];
            }
            name.blur();
        }
    } else {
        localStorage.setItem('name', event.target.innerText);
    }
}

function SetNameWithBlur(event) {
    if (event.target.innerText === '') {
        event.target.innerText = localStorage['name'];
    }
}

name.addEventListener('keypress', SetNameWithAcknowledgment);
name.addEventListener('blur', SetNameWithBlur);
name.addEventListener('focus', function (event) {
    event.target.innerText = '';
});

SetNameWhileStart();
