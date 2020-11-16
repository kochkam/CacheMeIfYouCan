import React, { Component } from "react";
import FitnessForm from '../components/FitnessForm';
import FitnessResults from '../classes/FitnessResults';

class FitnessResultsPage extends Component {
  
  constructor() {
    console.log(this.props.fitnessObj.name)
  }

  render() {
    return (
      <div className="fitness-level-container">
        <h2>Fitness Results</h2>
        <p>This is where the user will see there results.</p>
        <br></br>
        
        <FitnessForm fitnessObj = {this.props.fitnessObj}/>
      </div>
    );
  }
}
 
export default FitnessResultsPage;