class Gear{
    constructor(hike){
        this.hike = hike;
        this.weather = hike.weather[0].description;
        this.temp = hike.temp;
        this.head = null;
        this.top = null;
        this.bottom = null;
        this.other = [];
        this.rain = this.isRaining();
        this.sun = this.isSunny();
    }
    isRaining(){
        if(this.weather.includes("rain")){
            return true;
        }
        else {
            return false;
        }
    }
    isSunny(){
        if(this.weather.includes("clear")){
            return true;
        }
        else {
            return false;
        }
    }
}


export default Gear