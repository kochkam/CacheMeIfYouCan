import React from 'react';
import { withRouter } from 'react-router-dom';
import FitnessResults from '../classes/FitnessResults';

class FitnessForm extends React.Component{
    constructor () {
        super();
        this.state = {
            name: '',
            age: '',
            hikingXP: 'Beginner',
            exerciseFrequency: 'Low',
            error: '',
        };
    }

    /*
    onInputChange = (event) => {
        this.setState({
            name: event.target.value,
            age: event.target.value,
            hikingXP: event.target.value,
            exerciseFrequency: event.target.value,
        });
    }
    */
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
        if (!this.isPositiveAge(age)) {
            this.setState({
                error: 'Age input must be positive',
            });
            return;
        }
        const hikingXP = this.state.hikingXP;
        const exerciseFrequency = this.state.exerciseFrequency;
        if(name !== ''){
            this.props.fitnessObj.name = name;
        }
        if(age !== ''){
            this.props.fitnessObj.age = age;
        }
        this.props.fitnessObj.hikingXP = hikingXP;
        this.props.fitnessObj.exerciseFrequency = exerciseFrequency;
        this.props.fitnessObj.calculateFitness()
        if(this.props.fitnessObj.fitnessLevel == "Beginner"){
            this.props.searchObj.userProfileDifficulty = 1;
            this.props.searchObj.filter.difficultyFilter = 1;
            console.log(this.props.searchObj.userProfileDifficulty)
        } else if(this.props.fitnessObj.fitnessLevel == "Intermediate"){
            this.props.searchObj.userProfileDifficulty = 2;
            this.props.searchObj.filter.difficultyFilter = 2;
            console.log(this.props.searchObj.userProfileDifficulty)
        } else if(this.props.fitnessObj.fitnessLevel == "Advanced" ){
            this.props.searchObj.userProfileDifficulty = 3;
            this.props.searchObj.filter.difficultyFilter = 3;
            console.log(this.props.searchObj.userProfileDifficulty)
        }
        this.props.history.push('/fitness-results');
    }

    isPositiveAge = (age) => {
        if (parseInt(age) > 0) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <form className="fitnessLevel" onSubmit={this.onFormSubmit}>
            <label>First Name:<div class="tooltip">&#10067;<span class="tooltiptext"><div>This info will help customize your experince.</div></span></div>
                <input
                    className="input2"
                    defaultValue={this.props.fitnessObj.name}
                    onChange={e => {
                        this.setState({name:e.target.value})
                        this.value = this.state.name
                    }}
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
                    defaultValue={this.props.fitnessObj.age}
                    onChange={e => {
                        this.setState({age:e.target.value})
                        this.value = this.state.age
                    }}
                    id='age's
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
            <p className='error'>{ this.state.error }</p>
            </form>
        );
      }
}

export default withRouter(FitnessForm);