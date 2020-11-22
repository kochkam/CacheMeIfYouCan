class Weather{
    constructor(){
        this.lat = null;
        this.long = null;
        this.temp = null;
        this.tempFeelsLike = null;
        this.description = null;
    }

    async update(lat, long){
        this.lat = lat;
        this.long = long;

        var apiRes = await this._callWeatherAPI();
        this.temp = apiRes.main.temp;
        this.tempFeelsLike = apiRes.main.feels_like;
        this.description = apiRes.weather;
    }

    async _callWeatherAPI(){
        let apiKey = "d88f7585c318ca84fe20c5e487101b1f";

        let url = "https://api.openweathermap.org/data/2.5/weather"
                    + "?lat=" + this.lat
                    + "&lon=" + this.long
                    + "&appid=" + apiKey
                    + "&units=imperial";

        try {
            return fetch(url).then((res) => {
                return res.json();
        });
        } catch (error) {
            console.log(error)
        }
    }
}

export default Weather