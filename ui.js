class UI{
    constructor(){
        // geting all UI elements
        this.location = document.querySelector('#w-location');
        this.icon = document.querySelector('#w-icon');
        this.description = document.querySelector('#w-desc');
        this.temp = document.querySelector('#w-temp');
        this.humidity = document.querySelector('#w-humidity');
        this.wind = document.querySelector('#w-wind');
        this.clouds = document.querySelector('#w-clouds');
        this.rain = document.querySelector('#w-rain');
        this.city = document.querySelector('#city');
        this.country = document.querySelector('#country');
        this.changeLoc = document.querySelector('#w-change-btn');
        this.modal = document.querySelector('#locModal');
         
    }
    // painting all UI elements based on response
    paint(resp){
        // getting the corresponding weather icone url from openweathermap
        let wicon = `http://openweathermap.org/img/w/${resp.weather[0].icon}.png`
        this.icon.setAttribute('src', wicon)

        this.description.textContent = resp.weather[0].description;
        // temprature
        this.temp.textContent = `temp: ${resp.main.temp} 
        (min ${resp.main.temp_min} - max ${resp.main.temp_max})`;

        this.location.textContent = `${resp.name}, ${resp.sys.country}`;
        this.humidity.textContent = `humidity: ${resp.main.humidity}%`;
        this.wind.textContent = `Wind: speed ${resp.wind.speed}, degree ${resp.wind.deg}`;
        this.clouds.textContent = `Cloudiness: ${resp.clouds.all}%`;
        // checking if there is rain or snow
        if(resp.rain){
            var precipitation = `Rain: ${resp.rain['3h']}`;
        }else if(resp.snow){
            var precipitation = `Snow: ${resp.snow['3h']}`;  
        }else{
            var precipitation = 'No Precipitation'
        }
        
        this.rain.textContent = precipitation;
  
    }

}