class FitnessResults{
    constructor() {
        this.name = null;
        this.age = null;
        this.hikingXP = null;
        this.exerciseFrequency = null;
        this.fitnessLevel = null
        this.description = ''
        this.fitnessScore = 15
    }

    Agecalc(){

        if (this.age <= 25)
            return this.fitnessScore
        else if (this.age > 25 && this.age <= 35)
            return this.fitnessScore = this.fitnessScore - 1
        else if (this.age > 35 && this.age <= 45)
            return this.fitnessScore = this.fitnessScore - 2
        else if (this.age > 45 && this.age <= 55)
            return this.fitnessScore = this.fitnessScore - 4
        else if (this.age > 55 && this.age <= 65)
            return this.fitnessScore = this.fitnessScore - 5
        else
            return this.fitnessScore = this.fitnessScore - 6

    }

    hikeExpCalc(){

        if (this.hikingXP == "Beginner")
            return this.fitnessScore = this.fitnessScore - 5
        else if (this.hikingXP == "Intermediate")
            return this.fitnessScore = this.fitnessScore - 3
        else
            return this.fitnessScore
    }

    exerciseCalc(){


        if (this.exerciseFrequency == "Low")
            return this.fitnessScore = this.fitnessScore - 5
        else if (this.exerciseFrequency == "Medium")
            return this.fitnessScore = this.fitnessScore - 2
        else if(this.exerciseFrequency == "High")
            return this.fitnessScore


    }

    setDescription(){

        if(this.fitnessLevel == "Beginner")
            this.description = "Your fitness level is at the beginner level. Try sticking to green level trails and start introducing greenblue trails once you are comfortable."
        else if (this.fitnessLevel == "Intermediate")
            this.description = "Your fitness level is at the intermediate level. Try sticking to blue level trails and start introducing blue blacks when you are comfortable."
        else
            this.description = "Your fitness level is at the advanced level. Try sticking to blueblack hikes and and start introducing black when you are comfortable."
    }

    calculateFitness(){

        this.fitnessScore = this.Agecalc()

        this.fitnessScore = this.hikeExpCalc()

        this.fitnessScore = this.exerciseCalc()

        if (this.fitnessScore <= 5)
            this.fitnessLevel = "Beginner"
        else if (this.fitnessScore > 5 && this.fitnessScore <= 10)
            this.fitnessLevel = "Intermediate"
        else if (this.fitnessScore > 10 && this.fitnessScore <= 15)
            this.fitnessLevel = "Advanced"

        this.setDescription()

        this.fitnessScore = 15
        
    }
}

export default FitnessResults
