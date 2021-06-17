var btnEl = document.getElementById("city_btn");
var savedCities = document.getElementById("city_results");
var weatherEl = document.getElementById("weather_container");
var formEl = document.getElementById("city_entry");

function citySearch(event) {
  event.preventDefault();
  var cityName = formEl.value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f309b5c99ed1c7b405002f4cc417011c`, {
    method: "GET",
    credentials: "same-origin",
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      uvGet(data.coord.lat, data.coord.lon);
      //if statement check local storage for the Btn, if yes, don't run, if no run
      storedCities(data.name);
    });
}

function uvGet(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclue=&appid=f309b5c99ed1c7b405002f4cc417011c`, {
    method: "GET",
    credentials: "same-origin",
    redirect: "follow",
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayWeather(data.current, data.daily);
    });
}
function displayWeather(current, daily) {}

function storedCities(name) {
  //create btns
  //on click event to run citySearch again
}

btnEl.addEventListener("click", citySearch);
