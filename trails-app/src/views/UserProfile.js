import React, { Component } from "react";
 
class UserProfile extends Component {
  render() {
    return (
      <div>
        <h2>Fitness Level Calculator</h2>
        <p>Use the form below to provide information that will help us in calculating your fitness level.</p>
        <p>Please provide your first name, age, hiking experience, and current exercise frequency.</p>
        <br></br>
        <form className="fitnessLevel">
          <label>First Name:
            <input
                id='name'
                name='name'
                type='text'
                placeholder = 'First Name'
            />
          </label>
          <br></br>
          <label>Age: 
            <input
                id='age'
                name='age'
                type='text'
                placeholder = 'Age'
            />
          </label>
          <br></br>
          <label>Hiking Experience:
            <input
                id='hikingXP'
                name='hikingXP'
                type='text'
                placeholder = 'Hiking Experience'
            />
          </label>
          <br></br>
          <label>Exercise Frequency: 
            <input
                id='exerciseFrequency'
                name='exerciseFrequency'
                type='text'
                placeholder = 'Exercise Frequency'
            />
          </label>
          <br></br>
          <button className='CalculateBtn' type='submit'>Calculate
              <i className='CalculateBtn'></i>
          </button>
        </form>
      </div>
    );
  }
}
 
export default UserProfile;