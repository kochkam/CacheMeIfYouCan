class Hiker{
    constructor(firstName,age,hikingXP,exerciseFrequency){
        self.firstName = firstName
        self.age = age
        self.hikingXP = hikingXP
        self.exerciseFrequency = exerciseFrequency
        // TODO:
        // self.fitnessLevel = calculateFitnessLevel()
    }

    Agecalc(fitnessScore){



    }

    hikeExpCalc(fitnessScore){



    }

    exerciseCalc(fitnessScore){



    }

    calculateFitness(){

        fitnessScore = 15

        fitnessScore = this.Agecalc(fitnessScore)

        fitnessScore = this.hikeExpCalc(fitnessScore)

        fitnessScore = this.exerciseCalc(fitnessScore)
    }

}