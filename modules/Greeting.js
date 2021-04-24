/*
import {ChooseTimeOfDay} from 'modules/TimeOfTheDay.js';
*/

let greeting = document.querySelector('.greeting');

function ChooseTimeOfDay() {
    let today = new Date(),
        hour = today.getHours();
    if (hour >= 6 && hour <= 12) {
        return 'morning';
    } else if (hour > 12 && hour <= 18) {
        return 'day';
    } else if (hour > 18 && hour <= 24) {
        return 'evening';
    } else {
        return 'night';
    }
}

function SetGreeting() {
    if (ChooseTimeOfDay() === 'morning') {
        greeting.innerHTML = 'Good morning, ';
    } else if (ChooseTimeOfDay() === 'day') {
        greeting.innerHTML = 'Good day, ';
    } else if (ChooseTimeOfDay() === 'evening') {
        greeting.innerHTML = 'Good evening, ';
    } else {
        greeting.innerHTML = 'Good night, ';
    }
    setTimeout(SetGreeting, 1000);
}

SetGreeting();