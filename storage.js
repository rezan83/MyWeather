class Storage{
    constructor(){
        this.defaultCity = 'Ratingen';
        this.defaultCountry = 'de';
    }
    store(city, country) {
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }
    get(){
        // checking if there is pre storaged values, if not assigning them to defaults
        let city = (localStorage.city === null? this.defaultCity : localStorage.city)
        let country = (localStorage.country === null? this.defaultCountry : localStorage.country)
        let location = {'city':city, 'country':country};
        return location;  
    }
}