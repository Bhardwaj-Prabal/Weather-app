let searchValue = document.getElementById("search-btn");
let btn = document.getElementById("btn");
const ApiKey = "cf162d3f44eaca67c2c2fa614f68970d";
const Apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

async function App(city) {
    const response = await fetch(`${Apiurl}${city}&appid=${ApiKey}`);
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json();
    }
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    const weather = data.weather[0].main;
    const weatherIcon = document.querySelector(".weather-icon");

    if (weather === "Clouds") {
        weatherIcon.src = "images/clouds.png";
    } else if (weather === "Clear") {
        weatherIcon.src = "images/clear.png";
    } else if (weather === "Rain") {
        weatherIcon.src = "images/rain.png";
    } else if (weather === "Drizzle") {
        weatherIcon.src = "images/drizzle.png";
    } else if (weather === "Mist") {
        weatherIcon.src = "images/mist.png";
    } else if (weather === "Haze") {
        weatherIcon.src = "images/haze.png";
    } else {
        weatherIcon.src = "images/default.png"; // Default icon if no condition matches
    }

    document.querySelector(".weather").style.display = "block";
}

btn.addEventListener("click", () => {
    App(searchValue.value.trim());
});
