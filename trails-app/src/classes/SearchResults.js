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

        let response = await this.getHikeData(lat,long)
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
            console.log(this.results);
        }

    }
    async getHikeData(lat,long) {

        let apiKey = "&key=200964805-fbbd50c01b329d117306d1834dfd6a2d";
        let maxDistance = "&maxDistance=20";

        let url = "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + long + maxDistance + apiKey;  // api info can be found here: https://www.hikingproject.com/data#_=_


        try {
            let res = await fetch(url)
            return await res.json();
        } catch (error) {
            console.log(error)
        }

        // build hikes into results



    }

    async callZip(zip){ //builds url and fetches lat and long data

        let url1 = "https://maps.googleapis.com/maps/api/geocode/json?address=" + zip + ",US&key=AIzaSyAD0zxi8coI49e0OF3HfOvzX9Ny_87pynQ";
        try {
            let res = await fetch(url1)
            return await res.json();
        } catch (error) {
            console.log(error)
        }

    }

    async translateZip(zip) { // function calls callzip which gets api data


        let response = await this.callZip(zip)

        console.log(response);


        let lat = response.results[0].geometry.location.lat;
        let long = response.results[0].geometry.location.lng;
        this.getData(lat,long); //pass extracted data to get the Hike data
        return this.results
    }

    
    // function to sort results
    // will need to update hike index for sorting and filtering
    // function to filter results
}

export default SearchResults