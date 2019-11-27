class UI{
    constructor(){
        // geting all UI elements
        this.location = document.getElementById('w-location');
        this.icon = document.getElementById('w-icon');
        this.description = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
        this.clouds = document.getElementById('w-clouds');
        this.rain = document.getElementById('w-rain');
        this.city = document.getElementById('city');
        this.country = document.getElementById('country');
        this.changeLoc = document.getElementById('w-change-btn');
        this.modal = document.getElementById('locModal');
         
    }
    // painting all UI elements based on response
    paint(resp){
        // getting the corresponding weather icone url from openweathermap
        let wicon = `https://openweathermap.org/img/w/${resp.weather[0].icon}.png`
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