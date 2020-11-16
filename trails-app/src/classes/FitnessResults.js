import React, { Component } from "react";
import { useParams } from 'react-router-dom';
import Hiker from './Hiker';

class FitnessResults{
    constructor() {
        this.name = null;
        this.age = null;
        this.hikingXP = null;
        this.exerciseFrequency = null;
        console.log("I am in the fitness results constructor!");
    }
}

export default FitnessResults
