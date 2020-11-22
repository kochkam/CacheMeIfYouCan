class Gear{
    constructor(hike){
        this.hike = hike;
        this.weather = hike.weather[0].description;
        this.temp = hike.temp;
        this.rain = this.weather.includes("rain");
        this.sun = this.weather.includes("clear");
        this.head = this.headClothing();
        this.top = this.mainClothing("top");
        this.bottom = this.mainClothing("bottom");
        this.other = this.otherClothing();
        this.calories = this.calcCalories();
        this.water = this.calcWater();
    }

    headClothing(){
        if (this.temp >= 60) {
            if (this.rain) {
                return "Waterproof covering"
            } else {
                return "Nothing"
            }
        } else {
            var headClothingRec = this.clothingByTemp() + " Covering"
            if (this.rain) {
                headClothingRec = headClothingRec + " - Waterproof"
            }
            return headClothingRec;
        }
    }

    //Instantiation Method - determines recommended top and bottom clothing
    mainClothing(item){
        if (this.temp >= 70) {
            if (this.rain) {
                return "Light waterproof covering";
            } else {
                if (item == "bottom") {
                    return "Single layer - shorts"
                } else {
                    return "Single layer - short sleeve"
                }
            }
        } else {
            var mainClothingRec = this.clothingByTemp() + " Layer(s)"
            if (this.rain) {
                mainClothingRec = mainClothingRec + " - Waterproof";
            }
            return mainClothingRec
        }
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

    clothingByTemp() {
        if (this.temp >= 60) {
            return "Single";
        }
        else if (this.temp >= 55) {
            return "Light";
        }
        else if (this.temp >= 40) {
            return "Medium";
        }
        else {
            return "Heavy";
        }
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