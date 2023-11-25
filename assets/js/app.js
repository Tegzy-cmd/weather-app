import { Weather } from "./weather.js";
import { User } from "./user.js";
let Username = document.getElementById("username")
let Country = document.getElementById("countryName")
let temp = document.getElementsByClassName("temp")
let city = document.getElementsByClassName("city")
let humidity = document.getElementsByClassName("humidity")
let wind = document.getElementsByClassName("wind")
const searchBtn = document.querySelector(".search button")


searchBtn.addEventListener("click",()=>{
    let userName = Username.value
    let country = Country.value
    checkWeather(userName,country)
    
})

async function checkWeather(username,country){
    const user = new User(username,country)
    const weather = new Weather(country)
    weather.getWeather()
    console.log(await weather.temperature)
}