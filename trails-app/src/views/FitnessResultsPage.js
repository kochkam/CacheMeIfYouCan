import React, { Component } from "react";
import LinkButton from "../components/LinkButton";

class FitnessResultsPage extends Component {


  render() {
    return (
      <div className="fitness-level-container">
        <h2>Fitness Results</h2>
        <p>This is where the user will see there results.</p>
        <p>Your name is {this.props.fitnessObj.name}.</p>
        <p>Your age is {this.props.fitnessObj.age}</p>
        <p>Your experience is is {this.props.fitnessObj.hikingXP}</p>
        <p>Your exercise frequency is {this.props.fitnessObj.exerciseFrequency}</p>
        <p>{this.props.fitnessObj.description}</p>
        <br></br>
        <p>Feel free to change your results below</p>
        <button>
        <LinkButton exact to={"/user-profile"}><p>Modify Results</p>
          </LinkButton>
        </button>
      </div>
    );
  }
}
export default FitnessResultsPage;