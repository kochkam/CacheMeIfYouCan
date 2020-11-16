import React, { Component } from "react";
import { useParams } from 'react-router-dom';
import Hiker from '../classes/Hiker';
import SearchResults from '../classes/SearchResults'


export default function FitnessResults(props) {
    console.log("I am in the fitness results page!");
    return (
        <div className="fitness-results">
            <h1>Fitness!</h1>
        </div>
    );
}