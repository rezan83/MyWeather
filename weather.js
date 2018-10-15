class Weather{
    constructor(city, country){
        this.apiKey = '40cb3948b463261b328fb1846911c987';
        this.city = city;
        this.country = country;
    }

    async getWeather(){
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${this.city}
            &APPID=${this.apiKey}&units=metric&type=like`);

        const responseData = await response.json();

        return responseData;
    }

    changLocation(city, country){
        this.city = city;
        this.country = country;
    }
}