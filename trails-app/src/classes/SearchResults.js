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
        this.difficultyFilter = 1;
        this.distanceFilter = 20;
        this.ratingFilter = null
    }


 
    async getData(lat,long){ //parses out json object and fills a hike object with hiking data and pushes that object to results
        console.log("This should be 5");
        await this.getHikeData(lat,long).then(async (response) => {
            console.log("This should be 8");
            console.log(response);
            this.results = [];
            var responseNum = 10;
            if ((response.trails).length < 10) {
                responseNum = (response.trails).length
            }
            console.log((response.trails).length);
            var sorted_results = this.getFilteredResults(response, responseNum)
            console.log("Filter just happened and results below")
            console.log(sorted_results)
            var number_filtered_results = sorted_results.length
            for (var i = 0; i < number_filtered_results; i++) {
                var hike = new Hike();
                hike.id = sorted_results[i].id;
                console.log(hike.id);
                hike.index = i;
                hike.title = sorted_results[i].name;
                hike.summary = sorted_results[i].summary;
                hike.activityLevel = sorted_results[i].difficulty;
                hike.imgURL = sorted_results[i].imgSmall;
                hike.largeimgURL = sorted_results[i].imgMedium;
                // attribute is titled "length" from api for hike distance. javascript doesnt like this
                hike.distance = sorted_results[i].length;
                hike.long = sorted_results[i].longitude;
                hike.lat = sorted_results[i].latitude;
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

            /*
            Old for loop
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
        */
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
        var maxDistance = "&maxDistance=20"
        if (this.distanceFilter != null) {
            maxDistance = "&maxDistance=" + String(this.distanceFilter);
        } 
        

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


    applyFilters(difficultyChoice, ratingChoice, distanceChoice){
        this.difficultyFilter = difficultyChoice;
        this.ratingFilter = ratingChoice;
        this.distanceFilter = distanceChoice;
        console.log(this.difficultyFilter)
        console.log(this.ratingFilter)
        console.log(this.distanceFilter)
    }


    // will need to update hike index for sorting and filtering
    // function to filter results
    getFilteredResults(responseData, number_of_hikes) {
        var filtered_hikes = []
        for (var i = 0; i < number_of_hikes; i++) {
            var hikeDifficulty = 0
            if (this.difficultyFilter != null) {
                console.log(responseData.trails[i].difficulty)
                if (responseData.trails[i].difficulty === "green" || responseData.trails[i].difficulty === "greenBlue"){
                    hikeDifficulty = 1
                } else if (responseData.trails[i].difficulty === "blue" || responseData.trails[i].difficulty === "blueBlack"){
                    hikeDifficulty = 2
                } else {hikeDifficulty = 3}

                if (hikeDifficulty > this.difficultyFilter){
                    console.log(responseData.trails[i].name)
                    console.log("this one above should not be added...")
                    continue
                }
            }
            if (this.ratingFilter != null){
                if (responseData.trails[i].stars < this.ratingFilter){
                    continue
                }  
            }
            filtered_hikes.push(responseData.trails[i]);
            }
        return filtered_hikes
    }

}






export default SearchResults
