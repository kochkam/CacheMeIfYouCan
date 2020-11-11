class Hiker{
    constructor(firstName,age,hikingXP,exerciseFrequency){
        this.firstName = firstName
        this.age = age
        this.hikingXP = hikingXP
        this.exerciseFrequency = exerciseFrequency
        this.fitnessLevel = NONE
        this.description = NONE
    }

    Agecalc(fitnessScore){

        if (this.age <= 25)
            return fitnessScore
        else if (this.age > 25 && this.age <= 35)
            return fitnessScore = fitnessScore - 1
        else if (this.age > 35 && this.age <= 45)
            return fitnessScore = fitnessScore - 2
        else if (this.age > 45 && this.age <= 55)
            return fitnessScore = fitnessScore - 4
        else if (this.age > 55 && this.age <= 65)
            return fitnessScore = fitnessScore - 6
        else
            return fitnessScore = fitnessScore - 8

    }

    hikeExpCalc(fitnessScore){

        if (this.hikingXP == "Beginner")
            return fitnessScore = fitnessScore - 5
        else if (this.hikingXP == "Intermediate")
            return fitnessScore = fitnessScore - 3
        else
            return fitnessScore
    }

    exerciseCalc(fitnessScore){


        if (this.exerciseFrequency == "Low")
            return fitnessScore = fitnessScore - 5
        else if (this.exerciseFrequency == "Medium")
            return fitnessScore = fitnessScore - 2
        else if(this.exerciseFrequency == "High")
            return fitnessScore


    }

    setDescription(fitnessLevel){

        if(fitnessLevel == "Beginner")
            this.description = "Your fitness level is at the beginner level. Try sticking to green level trails and start introducing greenblue trails once you are comfortable."
        else if (fitnessLevel == "Intermediate")
            this.description = "Your fitness level is at the intermediate level. Try sticking to blue level trails and start introducing blue blacks when you are comfortable."
        else
            this.description = "Your fitness level is at the advanced level. Try sticking to blueblack hikes and and start introducing black when you are comfortable."
    }

    calculateFitness(){

        fitnessScore = 15

        fitnessScore = this.Agecalc(fitnessScore)

        fitnessScore = this.hikeExpCalc(fitnessScore)

        fitnessScore = this.exerciseCalc(fitnessScore)

        if (fitnessScore <= 5)
            this.fitnessLevel = "Beginner"
        else if (fitnessScore > 5 && fitnessScore <= 10)
            this.fitnessLevel = "Intermediate"
        else if (fitnessScore > 10 && fitnessScore <= 15)
            this.fitnessLevel = "Advanced"

        this.setDescription(this.fitnessLevel)
        
    }

}

export default Hiker