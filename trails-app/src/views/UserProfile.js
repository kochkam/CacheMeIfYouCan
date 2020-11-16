import React, { Component } from "react";
import FitnessForm from '../components/FitnessForm';

class UserProfile extends Component {
  render() {
    return (
      <div className="fitness-level-container">
        <h2>Fitness Level Calculator</h2>
        <p>Use the form below to provide information that will help us in calculating your fitness level.</p>
        <p>Please provide your first name, age, hiking experience, and current exercise frequency.</p>
        <br></br>
        <FitnessForm fitnessObj = {this.props.fitnessObj}/>
      </div>
    );
  }
}
 
export default UserProfile;