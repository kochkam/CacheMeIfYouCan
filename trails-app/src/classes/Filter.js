class Filter{
    // class represents a collection of hike search results in the form of the results data member
    // which will contain Hike objects. Functions in this class manipulate the results array
    constructor() {
        this.difficultyFilter = null;
        this.distanceFilter = null;
        this.ratingFilter = null;
        this.resultNumChoice = 10;
        this.minDifficulty = 0;
        this.maxDifficulty = 0;
    }

    getFilteredResults(responseData, number_of_hikes) {
        console.log("Applying filters")
        console.log((responseData.trails).length)
        console.log(this.difficultyFilter)
        var filtered_hikes = []
        for (var i = 0; i < number_of_hikes; i++) {
            var hikeDifficulty = 0
            if (this.difficultyFilter != null || (this.minDifficulty!==1 && this.maxDifficulty !==1)) {
                if (responseData.trails[i].difficulty === "green" || responseData.trails[i].difficulty === "greenBlue"){
                    hikeDifficulty = 1
                } else if (responseData.trails[i].difficulty === "blue" || responseData.trails[i].difficulty === "blueBlack"){
                    hikeDifficulty = 2
                } else {hikeDifficulty = 3}
                console.log("This hike is " + String(responseData.trails[i].difficulty) + " which means its value is " + String(hikeDifficulty))
                if ((hikeDifficulty > Number(this.difficultyFilter) && this.maxDifficulty===0)){
                    console.log("If displayed, the above hike should not be added to filtered results because the filter is set to " + String(this.difficultyFilter) + "and the boolean for showing harder hikes is: " + String(this.maxDifficulty))
                    continue
                }
                if ((hikeDifficulty < Number(this.difficultyFilter) && this.minDifficulty===0)){
                    console.log("If displayed, the above hike should not be added to filtered results because the filter is set to " + String(this.difficultyFilter) + "and the boolean for showing easier hikes is: " + String(this.minDifficulty))
                    continue
                }

            }
            if (this.ratingFilter != null){
                if (responseData.trails[i].stars < this.ratingFilter){
                    continue
                }  
            }

            if (this.distanceFilter != null){
                if (responseData.trails[i].distance > this.distanceFilter){
                    continue
                }  
            }

            filtered_hikes.push(responseData.trails[i]);
            }
        return filtered_hikes
    }
}
export default Filter