class Filter{
    // class represents a collection of hike search results in the form of the results data member
    // which will contain Hike objects. Functions in this class manipulate the results array
    constructor() {
        this.distanceFilter = 200;
        this.resultFilter = 200;
        this.includeEasy = true;
        this.includeIntermediate = true;
        this.includeHard = true;
    }

    setDefaults() {
        this.distanceFilter = 200;
        this.resultFilter = 200;
        this.includeEasy = true;
        this.includeIntermediate = true;
        this.includeHard = true;
    }

    getFilteredResults(trails) {
        var filtered_trails = []
        for (var i = 0; i < trails.length; i++) {

            var hike_difficulty;
            if(trails[i].difficulty === "green" || trails[i].difficulty === "greenBlue") {
                hike_difficulty = 1;
            } else if(trails[i].difficulty === "blue" || trails[i].difficulty === "blueBlack") {
                hike_difficulty = 2;
            } else {
                hike_difficulty = 3;
            }

            if(!(this.includeEasy) && hike_difficulty === 1){
                continue;
            }

            if(!(this.includeIntermediate) && hike_difficulty === 2){
                continue;
            }

            if(!(this.includeHard) && hike_difficulty === 3){
                continue;
            }

            if (trails[i].length > this.distanceFilter){
                continue;
            }

            filtered_trails.push(trails[i]);
            if(filtered_trails === this.resultFilter){
                break;
            }
        }
        return filtered_trails
    }
}
export default Filter