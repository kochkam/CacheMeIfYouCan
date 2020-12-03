import React, { Component } from "react";
import {Link} from "react-router-dom";

class FitnessResultsPage extends Component {


  render() {
    return (
      <div className="fitness-level-container">
        <h2>Fitness Results</h2>
        <h4>Thank you, {this.props.fitnessObj.name}, for your submission!</h4>
        <p>You submitted the following pieces of information:</p>
        <p>
        <i>Age</i>: {this.props.fitnessObj.age}
        </p>
        <p>
        <i>Hiking Experience</i>: {this.props.fitnessObj.hikingXP}
        </p>
        <p>
        <i>Exercise Frequency</i>: {this.props.fitnessObj.exerciseFrequency}
        </p>
        <br></br>
        <p>Based on that data, here is our recommendation for your hike search:</p>
        <br></br>
        <p><b>{this.props.fitnessObj.description}</b></p>
        <br></br>
        <p>Feel free to change your results by resubmitting the form. Click the button below to do so.</p>
        <br></br>
        <Link exact to={"/user-profile"}><button type="button">Modify Results</button></Link>
        <br></br>
        <Link exact to={"/search"}><button type="button">Back to Search</button></Link>
      </div>
    );
  }
}
export default FitnessResultsPage;