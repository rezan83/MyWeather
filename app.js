//init weather, ui and storage
const weather = new Weather();
const ui = new UI();
const storage = new Storage();

// drowing elements when page loaded
document.addEventListener('DOMContentLoaded', drowWeather);

// changing location
ui.changeLoc.addEventListener('click', storeLocation);

function drowWeather(){
    //get stored location
    const location = storage.get();
    weather.changLocation(location.city, location.country);

    weather.getWeather()
    .then(resp => ui.paint(resp))
    .catch(err => console.log(err));
}
// modal logic for changing location
function storeLocation(){
    let city = ui.city.value;
    let country = ui.country.value;
    storage.store(city, country);

    drowWeather();

    // toggling the modall when change location is done
    $('#locModal').modal('hide');
}
