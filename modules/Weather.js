const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.type_weather');
const city = document.querySelector('.city');
const wind_humidity = document.querySelector('.wind_humidity')
sessionStorage['city'] = city.textContent;

async function getWeather() {
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind_humidity.innerHTML = "humidity: " + data.main.humidity + ` g/m<sup>3</sup>, ` + "wind speed: " + data.wind.speed + ' m/s';
        console.log(data);
    }
    catch(e){
        weatherDescription.textContent = "city was not found";
        wind_humidity.innerHTML = '<span> ): </span>';

    }
}

function setCity(event) {
    if (event.keyCode === 13) {
        if (event.target.innerText !== "") {
            localStorage.setItem('city', event.target.innerText);
        } else {
            event.target.innerText = localStorage['city'];
        }
        getWeather();
        city.blur();
    }
}

function SetCityWhileStart() {
    if (localStorage.getItem('city') === null || localStorage.getItem('city') === "") {
        city.textContent = '[Enter city]';
    } else {
        city.textContent = localStorage.getItem('city');
    }
}

SetCityWhileStart();
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', (event)=>{
    if (event.target.innerText === '') {
        event.target.innerText = localStorage['city'];
    }
});
city.addEventListener('focus', function (event) {
    event.target.innerText = '';
});