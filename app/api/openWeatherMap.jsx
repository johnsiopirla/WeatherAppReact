var axios = require("axios");

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?";
const OPEN_WEATHER_MAP_URL2 = "&appid=da812360f6d41e879d20a6f12a4c51b4&units=metric";


module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl= `${OPEN_WEATHER_MAP_URL}q=${encodedLocation}${OPEN_WEATHER_MAP_URL2}`;

        return axios.get(requestUrl).then(function(res){
            debugger;
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message)
            }else{
                return res.data.main.temp;
            }
        }, function(res){
            throw new Error(res.data.message);
        });
    }
}