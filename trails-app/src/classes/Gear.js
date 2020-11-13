class Gear{
    constructor(hike){
        this.hike = hike;
        this.weather = hike.weather[0].description;
        this.temp = hike.temp;
        this.head = this.headClothing();
        this.top = this.topClothing();
        this.bottom = this.bottomClothing();
        this.other = this.otherClothing;
        this.rain = this.isRaining();
        this.sun = this.isSunny();
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
        else if(this.temp < 60 && this.temp >= 50) {
            resultString = resultString + "Light layer";
        }
        else if(this.temp < 50 && this.temp >= 40) {
            resultString = resultString + "Medium layer";
        }
        else if(this.temp < 40) {
            resultString = resultString + "Heavy layer";
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
        else if(this.temp < 60 && this.temp >= 50) {
            resultString = resultString + "Light layer";
        }
        else if(this.temp < 50 && this.temp >= 40) {
            resultString = resultString + "Medium layer";
        }
        else if(this.temp < 40) {
            resultString = resultString + "Heavy layer";
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

    // Instantiation Method - determines other clothing or items
    otherClothing(){
        var result = [];
        if(this.temp < 50){
            result.push("Gloves");
        }
        if(this.sun == true){
            result.push("Sunscreen");
        }
        if(result == [])
        {
            result.push("Nothing else");
        }
        return result
    }
}


export default Gear