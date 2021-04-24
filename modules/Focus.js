let focus = document.querySelector('.focus');

function SetFocusWithAcknowledgment(event) {
    if (event.type === 'keypress') {
        if (event.keyCode === 13) {
            if (event.target.innerText !== "") {
                localStorage.setItem('focus', event.target.innerText);
            } else {
                event.target.innerText = localStorage['focus'];
            }
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', event.target.innerText);
    }
}

function SetFocusWithBlur(event) {
    if (event.target.innerText === '') {
        event.target.innerText = localStorage['focus'];
    }
}

function SetFocusWhileStart() {
    if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === "") {
        focus.textContent = '[Enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

focus.addEventListener('keypress', SetFocusWithAcknowledgment);
focus.addEventListener('blur', SetFocusWithBlur);
focus.addEventListener('focus', function (event) {
    event.target.innerText = '';
});

SetFocusWhileStart();