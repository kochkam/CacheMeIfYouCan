class Gear{
    constructor(hike){
        this.hike = hike;
        this.weather = hike.weather[0].description;
        this.temp = hike.temp;
        this.rain = this.isRaining();
        this.sun = this.isSunny();
        this.head = this.headClothing();
        this.top = this.topClothing();
        this.bottom = this.bottomClothing();
        this.other = this.otherClothing();
        this.calories = this.calcCalories();
        this.water = this.calcWater();
    }

    //Instantiation Method - determines if weather is rainy
    isRaining(){
        if(this.weather.includes("rain")){
            return true;
        }
        else {
            return false;
        }
    }

    //Instantiation Method - determines if weather is sunny
    isSunny(){
        if(this.weather.includes("clear")){
            return true;
        }
        else {
            return false;
        }
    }

    //Instantiation Method - determines recommended head clothing
    headClothing(){
        var resultString = "";
        // if temperature is warm but raining, recommend waterproof covering
        if(this.rain == true && this.temp >=50){
            return "Waterproof covering";
        }
        else if(this.temp < 50 && this.temp >= 40) {
            resultString = resultString + "Light headwear";
        }
        else if(this.temp < 40 && this.temp >= 30) {
            resultString = resultString + "Medium headwear";
        }
        else if(this.temp < 30) {
            resultString = resultString + "Heavy headwear";
        }
        else {
            return "Nothing";
        }
        // if raining - add waterproof to recommended headware
        if(this.rain == true){
            resultString = resultString + " - Waterproof";
        }
        return resultString
    }

    //Instantiation Method - determines recommended top clothing
    topClothing(){
        var resultString = "";
        // if temperature is warm but raining, recommend waterproof covering
        if(this.rain == true && this.temp >=70){
            return "light waterproof covering";
        }
        else if(this.rain == false && this.temp >= 70){
            return "Single layer - short sleeve"
        }
        else if(this.temp < 70 && this.temp >= 60) {
            resultString = resultString + "Single layer";
        }
        else if(this.temp < 60 && this.temp >= 55) {
            resultString = resultString + "Light layering";
        }
        else if(this.temp < 55 && this.temp >= 40) {
            resultString = resultString + "Medium layering";
        }
        else if(this.temp < 40) {
            resultString = resultString + "Heavy layering";
        }
        else {
            return "Nothing";
        }
        // if raining - add waterproof to recommended top
        if(this.rain == true){
            resultString = resultString + " - Waterproof";
        }
        return resultString
    }

    //Instantiation Method - determines recommended bottom clothing
    bottomClothing(){
        var resultString = "";
        // if temperature is warm but raining, recommend waterproof covering
        if(this.rain == true && this.temp >=70){
            return "light waterproof covering";
        }
        else if(this.rain == false && this.temp >= 70){
            return "Single layer - shorts"
        }
        else if(this.temp < 70 && this.temp >= 60) {
            resultString = resultString + "Single layer";
        }
        else if(this.temp < 60 && this.temp >= 55) {
            resultString = resultString + "Light layering";
        }
        else if(this.temp < 55 && this.temp >= 40) {
            resultString = resultString + "Medium layering";
        }
        else if(this.temp < 40) {
            resultString = resultString + "Heavy layering";
        }
        else {
            return "Nothing";
        }
        // if raining - add waterproof to recommended bottom
        if(this.rain == true){
            resultString = resultString + " - Waterproof";
        }
        return resultString
    }

    // Instantiation Method - determines other clothing or items
    otherClothing(){
        var list = [];
        if(this.temp < 50){
            list.push("Gloves");
        }
        if(this.sun == true){
            list.push("Sunscreen");
        }
        if(list.length == 0)
        {
            list.push("Nothing else");
        }
        var result = "";
        for(var i = 0; i < list.length; i++){
            result = result + list[i];
            if(i+1 != list.length){
                result = result + ", ";
            }
        }
        return result
    }

    // Based on 430 calories burned per hour of hiking for 160lb person and 2mph average hike speed
    // Source: https://backpackerspantry.com/blogs/news/how-many-calories-does-hiking-burn
    calcCalories(){
        var avgHours = this.hike.distance / 2.0;
        var avgCalories = Math.round(avgHours * 430.0);
        return avgCalories;
    }

    // Based on 6-12oz of water per 15 minutes of hiking and 2mph average hike speed
    // Source: https://northcountrytrail.org/3-keys-for-planning-and-carrying-water-on-the-trail/
    calcWater(){
        var avgMinutes = (this.hike.distance / 2.0) * 60.0;
        var avgWater = Math.ceil((avgMinutes / 15.0) * 9.0);
        return avgWater;
    }
}


export default Gear