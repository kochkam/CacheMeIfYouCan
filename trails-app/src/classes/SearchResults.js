import Hike from "./Hike";
import Filter from "./Filter";
import Weather from "./Weather";

class SearchResults{
    // class represents a collection of hike search results in the form of the results data member
    // which will contain Hike objects. Functions in this class manipulate the results array
    constructor() {
        this.results = [];
        this.show = true;
        this.zip = null;
        this.lat = null;
        this.long = null;
        this.weather = new Weather();
        this.filter = new Filter();
    }

    async update(zip){
        this.results = [];
        this.zip = zip;

        var coords = (await this._getCoords()).results[0].geometry.location;
        this.lat = coords.lat;
        this.long = coords.lng;
        await this.weather.update(this.lat, this.long);
        var resHikeAPI = await this._callHikeAPI();
        var numHikes = Math.min(this.filter.resultNumChoice, resHikeAPI.trails.length);
        var filtered_results = this.filter.getFilteredResults(resHikeAPI, numHikes);
        for(var i=0; i<filtered_results.length; i++){
            var hike = new Hike();
            hike.id = filtered_results[i].id;
            hike.index = i;
            hike.title = filtered_results[i].name;
            hike.summary = filtered_results[i].summary;
            hike.activityLevel = filtered_results[i].difficulty;
            hike.largeimgURL = filtered_results[i].imgMedium;
            // attribute is titled "length" from api for hike distance. javascript doesnt like this
            hike.distance = filtered_results[i].length;
            hike.ascent = filtered_results[i].ascent;
            hike.long = filtered_results[i].longitude;
            hike.lat = filtered_results[i].latitude;
            // get temp using weather api
            hike.temp = this.weather.temp;
            hike.tempFeelsLike = this.weather.tempFeelsLike;
            hike.weather = this.weather.description;
            // add hike object to results
            this.results.push(hike);
        }
    }

    async _getCoords(){
        let url = "https://maps.googleapis.com/maps/api/geocode/json?address="
                    + this.zip
                    + ",US&key=AIzaSyAD0zxi8coI49e0OF3HfOvzX9Ny_87pynQ";

        try {
            return fetch(url).then((res) => {
                return res.json();
            });
        } catch (error) {
            console.log(error)
        }
    }

    async _callHikeAPI(){
        let apiKey = "&key=200964805-fbbd50c01b329d117306d1834dfd6a2d";
        var numResults = "&maxResults=200"
        var maxDistance = "&maxDistance=20"
        if (this.distanceFilter != null) {
            maxDistance = "&maxDistance=" + String(this.distanceFilter);
        } 
        
        let url = "https://www.hikingproject.com/data/get-trails"
                    + "?lat=" + this.lat
                    + "&lon=" + this.long
                    + maxDistance
                    + numResults
                    + apiKey; // api info can be found here: https://www.hikingproject.com/data#_=_

        try {
            return fetch(url).then((res) => {
                return res.json();
            });
        } catch (error) {
            console.log(error)
        }
    }


    applyFilters(difficultyChoice, ratingChoice, distanceChoice, resultsChoice,  minDifficulty, maxDifficulty){
        this.filter.difficultyFilter = difficultyChoice;
        this.filter.ratingFilter = ratingChoice;
        this.filter.distanceFilter = distanceChoice;
        this.filter.resultNumChoice = resultsChoice;
        this.filter.minDifficulty = minDifficulty;
        this.filter.maxDifficulty = maxDifficulty;
        console.log("difficulty is : " + String(this.filter.difficultyFilter));
        console.log("minimum trail rating: " + String(this.filter.ratingFilter));
        console.log("maximum trail distance: " + String(this.filter.distanceFilter));
        console.log("number of responses: " + String(this.filter.resultNumChoice));
        console.log("Minimum difficulty boolean is : " + String(this.filter.minDifficulty));
        console.log("maximum difficulty boolean is :  " + String(this.filter.maxDifficulty));
    }
    
    // will need to update hike index for sorting and filtering
    // function to filter results
    /*
    getFilteredResults(responseData, number_of_hikes) {
        console.log("Applying filters")
        console.log(this.difficultyFilter)
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
    */

}
export default SearchResults