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

    getHikeData() {

        let apiKey = "&key=200964805-fbbd50c01b329d117306d1834dfd6a2d";
        let maxDistance = "&maxDistance=20";

        let req = new XMLHttpRequest();
        let url = "https://www.hikingproject.com/data/get-trails?lat=" + this.lat + "&lon=" + this.long + maxDistance + apiKey;  // api info can be found here: https://www.hikingproject.com/data#_=_

        req.open('GET', url, false);

        req.addEventListener('load', function () {

            if (req.status >= 200 && req.status < 400) {
                // build hikes into results
                var response = JSON.parse(req.responseText);
                for (var i = 0; i < response.length; i++){
                    var hike = new Hike();
                    hike.id = response[i].id;
                    hike.index = i;
                    hike.title = response[i].name;
                    hike.summary = response[i].summary;
                    hike.activityLevel = response[i].difficulty;
                    hike.imgURL = response[i].imgSmall;
                    hike.largeimgURL = response[i].imgMedium;
                    // attribute is titled "length" from api for hike distance. javascript doesnt like this
                    hike.distance = response[i].length;
                    hike.long = response[i].longitude;
                    hike.lat = response[i].latitude;
                    // add hike object to results
                    this.results.push(hike);

                }
                // use HikeData.trails[i].<attr name> to access the attribute you need. Results returned will be 10. 
            }
            else {
                console.log("error in network request: " + req.statusText);
            }
        });

        req.send(null);
        Event.preventDefault()

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