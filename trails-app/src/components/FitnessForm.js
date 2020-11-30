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
            <label>First Name:<span class="tooltiptext"><br>Enter your name to customize your experince</br></span>
                <input
                    onChange={this.onNameChange}
                    id='name'
                    name='name'
                    type='text'
                    placeholder = 'First Name'
                />
            </label>
            <br></br>
            <label>Age:<span class="tooltiptext"><br>Your age will be used for our fitness caluclator to recommend hikes appropriate for your age</br></span> 
                <input
                    onChange={this.onAgeChange}
                    id='age'
                    name='age'
                    type='number'
                    placeholder = 'Age'
                />
            </label>
            <br></br>
            <label>Hiking Experience:<span class="tooltiptext"><br>Your hiking experience will be used for our fitness caluclator to recommend hikes appropriate for your experince level </br></span> </label>
            <select onChange={this.onXPChange}>
                    <option value = "Beginner">Beginner</option>
                    <option value = "Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
            </select> 
            <br></br>
            <label>Exercise Frequency:<span class="tooltiptext"><br>Your exercise frequency will be used to determine what hikes will fit your activity level best.</br></span></label> 
                <select onChange={this.onFrequencyChange}>
                    <option value = "Low">Low</option>
                    <option value = "Medium">Medium</option>
                    <option value="High">High</option>
                </select>                
            <br></br>
            <button className='SearchBtn' type='submit'>Calculate
                <i className='SearchBtn'></i>
            </button>
            </form>
        );
      }
}

export default withRouter(FitnessForm);