class Hiker{
    constructor(firstName,age,hikingXP,exerciseFrequency){
        self.firstName = firstName
        self.age = age
        self.hikingXP = hikingXP
        self.exerciseFrequency = exerciseFrequency
        self.fitnessLevel = NONE
    }

    Agecalc(fitnessScore){

        if (self.age <= 25)
            return fitnessScore
        else if (self.age > 25 && self.age <= 35)
            return fitnessScore = fitnessScore - 1
        else if (self.age > 35 && self.age <= 45)
            return fitnessScore = fitnessScore - 2
        else if (self.age > 45 && self.age <= 55)
            return fitnessScore = fitnessScore - 4
        else if (self.age > 55 && self.age <= 65)
            return fitnessScore = fitnessScore - 6
        else
            return fitnessScore = fitnessScore - 8

    }

    hikeExpCalc(fitnessScore){

        if (self.hikingXP == "Beginner")
            return fitnessScore = fitnessScore - 5
        else if (self.hikingXP == "Intermediate")
            return fitnessScore = fitnessScore - 3
        else
            return fitnessScore
    }

    exerciseCalc(fitnessScore){


        if (self.exerciseFrequency == "Low")
            return fitnessScore = fitnessScore - 5
        else if (self.exerciseFrequency == "Medium")
            return fitnessScore = fitnessScore - 2
        else if(self.exerciseFrequency == "High")
            return fitnessScore


    }

    calculateFitness(){

        fitnessScore = 15

        fitnessScore = this.Agecalc(fitnessScore)

        fitnessScore = this.hikeExpCalc(fitnessScore)

        fitnessScore = this.exerciseCalc(fitnessScore)

        if (fitnessScore <= 5)
            self.fitnessLevel = "Beginner"
        else if (fitnessScore > 5 && fitnessScore <= 10)
            self.fitnessLevel = "Intermediate"
        else if (fitnessScore > 10 && fitnessScore <= 15)
            self.fitnessLevel = "Advanced"
    }

}