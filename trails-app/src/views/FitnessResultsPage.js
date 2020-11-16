import React, { Component } from "react";
import FitnessForm from '../components/FitnessForm';

class FitnessResultsPage extends Component {
  render() {
    return (
      <div className="fitness-level-container">
        <h2>Fitness REsults</h2>
        <p>testestest.</p>
        <br></br>
        <FitnessForm fitnessObj = {this.props.fitnessObj}/>
      </div>
    );
  }
}
 
export default FitnessResultsPage;