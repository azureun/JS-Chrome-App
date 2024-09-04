const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "c529a3d2fe3b3e1b1bd46dd4ce143a97";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}
  
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);


//getCurrentPosition의 argument는 2개
// 1. 모두 잘 실행될 때 실행되는 함수
// 2. 에러가 발생했을 때 실행되는 함수