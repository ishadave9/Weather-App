const apikey = "b9726c90e0cba41af5c0c94c28af388d";
// let city = "indore";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=`;

let searchBox = document.querySelector(".inputSearch");
let searchBtn = document.querySelector(".searchBtn");

// Assuming you have an image element with the class "weather-icon" in your HTML
let weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + "&appid=" + apikey + "&units=metric");
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";

    const windSpeed = (data.wind.speed * 3.6).toFixed(2); // Convert m/s to km/h
    document.querySelector(".Wind").innerHTML = windSpeed + " km/hr";
    

    // Assuming you have defined the weather icon URLs correctly

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "https://cdn-icons-png.freepik.com/256/5904/5904053.png?ga=GA1.1.1194339509.1713613919&semt=ais_hybrid";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "https://cdn-icons-png.freepik.com/256/1163/1163661.png?ga=GA1.1.1194339509.1713613919&semt=ais_hybrid";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "https://cdn-icons-png.freepik.com/256/10961/10961088.png?ga=GA1.1.1194339509.1713613919&semt=ais_hybrid";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "https://cdn-icons-png.freepik.com/256/4161/4161255.png?ga=GA1.1.881725181.1711533172&semt=ais_hybrid";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "https://cdn-icons-png.freepik.com/256/10960/10960997.png?ga=GA1.1.1194339509.1713613919&semt=ais_hybrid";
    }
}

// checkWeather("indore");

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

// You're calling checkWeather() without passing any arguments.
// You might want to call it with a default city or remove this line if you want the user to provide the city.
// For example:
// checkWeather("London");
