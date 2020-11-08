import Hike from "./Hike";

class SearchResults{
    // class represents a collection of hike search results in the form of the results data member
    // which will contain Hike objects. Functions in this class manipulate the results array
    constructor(zip) {
        this.results = [];
        this.show = true;
        this.zip = zip;
        this.lat = null;
        this.long = null;
    }


 
    async getData(lat,long){ //parses out json object and fills a hike object with hiking data and pushes that object to results
        console.log("This should be 5");
        await this.getHikeData(lat,long).then(async (response) => {
            console.log("This should be 8");
            console.log(response);
            this.results = [];
            responseNum = 10;
            console.log(response.trails)
            for (var i = 0; i < responseNum; i++) {
                var hike = new Hike();
                hike.id = response.trails[i].id;
                console.log(hike.id);
                hike.index = i;
                hike.title = response.trails[i].name;
                hike.summary = response.trails[i].summary;
                hike.activityLevel = response.trails[i].difficulty;
                hike.imgURL = response.trails[i].imgSmall;
                hike.largeimgURL = response.trails[i].imgMedium;
                // attribute is titled "length" from api for hike distance. javascript doesnt like this
                hike.distance = response.trails[i].length;
                hike.long = response.trails[i].longitude;
                hike.lat = response.trails[i].latitude;
                // get temp using weather api
                let weatherData = await this.getCurrentTemp(hike.long, hike.lat);
                console.log(weatherData.main);
                console.log(weatherData.weather);
                hike.temp = weatherData.main.temp;
                hike.tempFeelsLike = weatherData.main.feels_like;
                hike.weather = weatherData.weather;
                // add hike object to results
                this.results.push(hike);
            }
        });
    }

    async getCurrentTemp(long, lat) {
        let weatherAPI = "d88f7585c318ca84fe20c5e487101b1f";

        let apiURL = "https://api.openweathermap.org/data/2.5/weather?lat=" + 
                     lat +
                     "&lon=" +
                     long +
                     "&appid=" + 
                     weatherAPI +
                     "&units=imperial";

        try {
            let res = await fetch(apiURL);
            return await res.json();
        } catch (error) {
            console.log(error);
        }

    }


    async getHikeData(lat,long) {
        console.log("This should be 6");
        let apiKey = "&key=200964805-fbbd50c01b329d117306d1834dfd6a2d";
        let maxDistance = "&maxDistance=20";

        let url = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + long + maxDistance + apiKey;  // api info can be found here: https://www.hikingproject.com/data#_=_


        try {
            return fetch(url).then((res) => {
                console.log("This should be 7");
                console.log(res);
                return res.json();
            });
        } catch (error) {
            console.log(error)
        }
    }

    async callZip(zip){ //builds url and fetches lat and long data
        console.log("This should be 2");
        let url1 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + ",US&key=AIzaSyAD0zxi8coI49e0OF3HfOvzX9Ny_87pynQ";
        try {
            return fetch(url1).then((res) => {
                console.log("This should be 3");
                console.log(res);
                return res.json();
            });
        } catch (error) {
            console.log(error)
        }

    }

    async translateZip() { // function calls callzip which gets api data
        console.log("This should be 1");
        console.log(this.zip)

        await this.callZip(this.zip).then(async (res) => {
            console.log("This should be 4");
            console.log(res);
            let lat = res.results[0].geometry.location.lat;
            let long = res.results[0].geometry.location.lng;
            this.lat = lat
            this.long = long
            await this.getData(lat,long); //pass extracted data to get the Hike data
        });
    }

    
    // function to sort results
    // will need to update hike index for sorting and filtering
    // function to filter results
}

export default SearchResults
