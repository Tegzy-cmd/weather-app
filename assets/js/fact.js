export class Fact{
    countryName
    capitalCity
    currency
    popD
    region
    name
    #apiKey = 'W99ERfECh4d1ZsrHgXbAvw==QS4LjYqNnvvqeJmS'
    #api = `https://api.api-ninjas.com/v1/country?name=`
    #options = {
        method: 'GET',
        headers: { 'x-api-key': `${this.#apiKey}` }
      }
    constructor(country){
        this.countryName = country
    }

    async getFact(){
        try {
            const response = await fetch(`${this.#api}`+`${this.countryName}`,this.#options)
            const data = await response.json()
            this.name = data[0].name
            this.capitalCity = data[0].capital
            this.currency = data[0].currency.name
            this.region = data[0].region
            this.popD = data[0].pop_density
            console.log(data[0])
            
            
        } catch (error) {
            console.error(`${error.message}`)
        }
            
        }
    
}