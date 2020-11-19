class Hike{
    constructor(id, title, summary, activityLevel, imgURL, largeimgURL, distance, ascent, temp, tempFeelsLike, weather, lat, long, index){
        this.id = id;
        this.title = title;
        this.summary = summary;
        this.activityLevel = activityLevel;
        // JP CODE SMELL: DEAD CODE - imgURL is no longer used anywhere
        this.imgURL = imgURL;
        this.largeimgURL = largeimgURL;
        this.distance = distance;
        this.ascent = ascent;
        this.temp = temp;
        this.tempFeelsLike = tempFeelsLike;
        this.weather = weather;
        this.lat = lat;
        this.long = long;
        this.index = index;
    }
}

export default Hike