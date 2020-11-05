
class SearchResults{
    // class represents a collection of hike search results in the form of the results data member
    // which will contain Hike objects. Functions in this class manipulate the results array
    constructor(zip) {
        this.results = [];
        this.show = true;
        this.zip = zip
        
    }
    translateZip(zip) { // Zip to location information api info can be found here: zipcodeapi.com/API#zipToLoc

        var apiURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + ",US&key=AIzaSyAD0zxi8coI49e0OF3HfOvzX9Ny_87pynQ";

        let req = new XMLHttpRequest();

        req.open('GET', apiURL, true);

        req.addEventListener('load', function () {

            if (req.status >= 200 && req.status < 400) {
                var data = JSON.parse(req.responseText)
                var lat = data.results.geometry.location.lat
                var long = data.results.geometry.location.lng

                return [lat, long]; //return lat and long to caller

            }
            else {
                console.log("error in network request: " + req.statusText);
            }
        });

        req.send(null);

    }

    getHikeData(zip) {

        var obj = translateZip(zip); //translate zip and return JSON obj
        let apiKey = "200964805-fbbd50c01b329d117306d1834dfd6a2d";
        let maxDistance = "&maxDistance=20";
        let lat = obj[0]; //get lat and long
        let lon = obj[1];

        let req = new XMLHttpRequest();
        let url = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon" + lon + maxDistance + apiKey;  // api info can be found here: https://www.hikingproject.com/data#_=_

        req.open('GET', url, true);

        req.addEventListener('load', function () {

            if (req.status >= 200 && req.status < 400) {
                var HikeData = JSON.parse(req.responseText);
                return HikeData; // use HikeData.trails[i].<attr name> to access the attribute you need. Results returned will be 10. 

            }
            else {
                console.log("error in network request: " + req.statusText);
            }
        });

        req.send(null);

    }

    // function to sort results
    // function to filter results
}

export default SearchResults