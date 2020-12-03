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
        this.userProfile = null;
        this.useFilters = false;
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
        console.log(resHikeAPI)

        var numHikes = resHikeAPI.trails.length;
        var filtered_trails;
        if(this.useFilters){
            filtered_trails = this.filter.getFilteredResults(resHikeAPI.trails);
        } else {
            var defaults = new Filter();
            filtered_trails = defaults.getFilteredResults(resHikeAPI.trails);
        }
        console.log(filtered_trails);
        for(var i=0; i<trails_list_length; i++){
            var hike = new Hike();
            hike.id = filtered_trails[i].id;
            hike.index = i;
            hike.title = filtered_trails[i].name;
            hike.summary = filtered_trails[i].summary;
            hike.activityLevel = filtered_trails[i].difficulty;
            hike.largeimgURL = filtered_trails[i].imgMedium;
            hike.distance = filtered_trails[i].length;
            hike.ascent = filtered_trails[i].ascent;
            hike.long = filtered_trails[i].longitude;
            hike.lat = filtered_trails[i].latitude;
            // get temp using weather api
            hike.temp = this.weather.temp;
            hike.tempFeelsLike = this.weather.tempFeelsLike;
            hike.weather = this.weather.description;
            // add hike object to results
            this.results.push(hike);
        }
    }

    toggleFilters(){
        this.useFilters = !this.useFilters;
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
        var maxDistance = "&maxDistance=200"
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
    
}
export default SearchResults