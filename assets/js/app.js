import { Weather } from "./weather.js";
import { User } from "./user.js";
import { Fact } from "./fact.js";
let Username = document.getElementById("username");
let Country = document.getElementById("countryName");
let temp = document.getElementById("temp");
let city = document.getElementById("city");
let humidity = document.getElementById("humidity");
let wind = document.getElementById("wind");
let weatherIcon = document.getElementById("weatherIcon");
const searchBtn = document.querySelector(".search button");
let countryName = document.getElementById("cName")
let capital = document.getElementById("capt")
let region = document.getElementById("reg")
let currency = document.getElementById("cur")
let populDen = document.getElementById("populD")
searchBtn.addEventListener("click", () => {
  let userName = Username.value;
  let country = Country.value;
  checkWeather(userName, country);
});

async function checkWeather(username, country) {
  const user = new User(username, country);
  const weather = new Weather(user.country);
  await weather.getWeather();
checkFact(weather.iso)
  temp.innerHTML = weather.temperature + "°C";
  city.innerHTML = weather.city;
  humidity.innerHTML = weather.humidity + "%";
  wind.innerHTML = weather.wind + "km/h";

  switch (weather.icon) {
    case "Clouds":
      weatherIcon.src = "assets/images/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "assets/images/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "assets/images/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "assets/images/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "assets/images/mist.png";
      break;

    default:
      break;
  }
}
async function checkFact(country) {
   const fact = new Fact(country)
   await fact.getFact()
   countryName.innerHTML = fact.name
   capital.innerHTML = fact.capitalCity
   region.innerHTML = fact.region
   currency.innerHTML = fact.currency
   populDen.innerHTML = fact.popD +' /km2'
}