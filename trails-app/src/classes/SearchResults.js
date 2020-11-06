import Hike from "./Hike";

class SearchResults{
    // class represents a collection of hike search results in the form of the results data member
    // which will contain Hike objects. Functions in this class manipulate the results array
    constructor(zip) {
        this.results = [];
        this.show = true;
        this.zip = zip;
        this.url1 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.zip + ",US&key=AIzaSyAD0zxi8coI49e0OF3HfOvzX9Ny_87pynQ";
        this.lat = null;
        this.long = null;

     
    }


 
    async getData(){

        let response = await this.getHikeData()
        console.log(response);

        for (var i = 0; i < 10; i++) {
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
            // add hike object to results
            this.results.push(hike);
        }


    }
    async getHikeData() {

        let apiKey = "&key=200964805-fbbd50c01b329d117306d1834dfd6a2d";
        let maxDistance = "&maxDistance=20";

        let url = "https://www.hikingproject.com/data/get-trails?lat=" + this.lat + "&lon=" + this.long + maxDistance + apiKey;  // api info can be found here: https://www.hikingproject.com/data#_=_


        try {
            let res = await fetch(url)
            return await res.json();
        } catch (error) {
            console.log(error)
        }

        // build hikes into results



    }

    translateZip() { // Zip to location information api info can be found here: zipcodeapi.com/API#zipToLoc


        let req = new XMLHttpRequest();

        req.open('GET', this.url1, false);

        req.addEventListener('load', function () {

            if (req.status >= 200 && req.status < 400) {
                var data = JSON.parse(req.responseText)
                SearchResults.lat = data.results[0].geometry.location.lat
                SearchResults.long = data.results[0].geometry.location.lng

            }
            else {
                console.log("error in network request: " + req.statusText);
            }
        });

        req.send(null);

        

    }

    
    // function to sort results
    // will need to update hike index for sorting and filtering
    // function to filter results
}

export default SearchResults