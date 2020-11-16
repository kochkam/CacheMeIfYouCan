import React from 'react';
import { withRouter } from 'react-router-dom';

class FitnessForm extends React.Component{
    state = {
        name: '',
        age: '',
        hikingXP: '',
        exerciseFrequency: '',
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
        console.log("Line 33 of Fitness form");
        console.log(this.props.fitnessObj)
        this.props.fitnessObj.name = name;
        this.props.fitnessObj.age = age;
        this.props.fitnessObj.hikingXP = hikingXP;
        this.props.fitnessObj.exerciseFrequency = exerciseFrequency;
        this.props.history.push('/fitness-results');
    }

    render() {
        return (
            <form className="fitnessLevel" onSubmit={this.onFormSubmit}>
            <label>First Name:
                <input
                    onChange={this.onNameChange}
                    id='name'
                    name='name'
                    type='text'
                    placeholder = 'First Name'
                />
            </label>
            <br></br>
            <label>Age: 
                <input
                    onChange={this.onAgeChange}
                    id='age'
                    name='age'
                    type='number'
                    placeholder = 'Age'
                />
            </label>
            <br></br>
            <label>Hiking Experience:
                <input
                    onChange={this.onXPChange}
                    id='hikingXP'
                    name='hikingXP'
                    type='number'
                    placeholder = 'Hiking Experience'
                />
            </label>
            <br></br>
            <label>Exercise Frequency: 
                <input
                    onChange={this.onFrequencyChange}
                    id='exerciseFrequency'
                    name='exerciseFrequency'
                    type='number'
                    placeholder = 'Exercise Frequency'
                />
            </label>
            <br></br>
            <button className='SearchBtn' type='submit'>Calculate
                <i className='SearchBtn'></i>
            </button>
            </form>
        );
      }
}

export default withRouter(FitnessForm);