import { Fact } from "./fact.js"
export class Weather{
    countryName
    humidity
    temperature
    description
    city
    wind
    icon
    #api
    #apiKey = 'ade32e4603c809d2449d434f355f6f20'
    
    
    constructor(country){
        this.countryName = country
        
        this.#api = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=`+`${this.countryName}`+`&limit=5`+`&appid=${this.#apiKey}`
    }

   async getWeather(){
    let fact = new Fact(this.countryName)
    fact.getFact()
    try {
        const response = await fetch(this.#api)
        const data = await response.json()
        const fact = new Fact(data.sys.country)
        this.temperature = Math.round(data.main.temp)
        this.humidity = data.main.humidity
        this.wind = data.wind.speed
        console.log(this.wind)
        this.city = data.name
        this.icon = data.weather[0].main
        console.log(data)
        
    } catch (error) {
        console.error(`${error.message}`)
    }
        
    }

}