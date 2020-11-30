import React from 'react';
import { withRouter } from 'react-router-dom';
import FitnessResults from '../classes/FitnessResults';
import './FitnessFormCss.css'

class FitnessForm extends React.Component{
    state = {
        name: '',
        age: '',
        hikingXP: 'Beginner',
        exerciseFrequency: 'Low',
    }

    onInputChange = (event) => {
        this.setState({
            name: event.target.value,
            age: event.target.value,
            hikingXP: event.target.value,
            exerciseFrequency: event.target.value,
        });
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value,
        });
    }
    onAgeChange = (event) => {
        this.setState({
            age: event.target.value,
        });
    }
    onXPChange = (event) => {
        this.setState({
            hikingXP: event.target.value,
        });
    }
    onFrequencyChange = (event) => {
        this.setState({
            exerciseFrequency: event.target.value,
        });
    }




    onFormSubmit = async (event) => {
        event.preventDefault();
        const name = this.state.name;
        const age = this.state.age;
        const hikingXP = this.state.hikingXP;
        const exerciseFrequency = this.state.exerciseFrequency;
        this.props.fitnessObj.name = name;
        this.props.fitnessObj.age = age;
        this.props.fitnessObj.hikingXP = hikingXP;
        this.props.fitnessObj.exerciseFrequency = exerciseFrequency;
        this.props.fitnessObj.calculateFitness()
        if(this.props.fitnessObj.fitnessLevel == "Beginner"){
            this.props.searchObj.userProfileDifficulty = 1
            console.log(this.props.searchObj.userProfileDifficulty)
        } else if(this.props.fitnessObj.fitnessLevel == "Intermediate"){
            this.props.searchObj.userProfileDifficulty = 2
            console.log(this.props.searchObj.userProfileDifficulty)
        } else if(this.props.fitnessObj.fitnessLevel == "Advanced" ){
            this.props.searchObj.userProfileDifficulty = 3
            console.log(this.props.searchObj.userProfileDifficulty)
        }
        this.props.history.push('/fitness-results');
    }

    render() {
        return (
            <form className="fitnessLevel" onSubmit={this.onFormSubmit}>
            <label>First Name:<div class="tooltip">&#10067;<span class="tooltiptext"><div>This info will help customize your experince.</div></span></div>
                <input
                    className="input2"
                    onChange={this.onNameChange}
                    id='name'
                    name='name'
                    type='text'
                    placeholder = 'First Name'
                />
            </label>
            <br></br>
            <br></br>
            <label>Age:<div class="tooltip">&#10067;<span class="tooltiptext"><div>Your age will help us in calculating hikes customized for your abilities.</div></span></div>
                <input
                    className="input2"
                    onChange={this.onAgeChange}
                    id='age'
                    name='age'
                    type='number'
                    placeholder = 'Age'
                />
            </label>
            <br></br>
            <br></br>
            <label>Hiking Experience:<div class="tooltip">&#10067;<span class="tooltiptext"><div>Select a hiking experince level that mirrors your familiarity with hiking to help us match you with the best hike possible.</div></span></div></label>
            <select onChange={this.onXPChange}>
                    <option value = "Beginner">Beginner</option>
                    <option value = "Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
            </select> 
            <br></br>
            <br></br>
            <label>Exercise Frequency:<div class="tooltip">&#10067;<span class="tooltiptext"><div>Select exercise frequency that best matches your current fitness level to help match you with hikes based on your fitness level.</div></span></div></label> 
                <select onChange={this.onFrequencyChange}>
                    <option value = "Low">Low</option>
                    <option value = "Medium">Medium</option>
                    <option value="High">High</option>
                </select>                
            <br></br>
            <br></br>
            <button className='Btn' type='submit'>Calculate
            </button>
            </form>
        );
      }
}

export default withRouter(FitnessForm);