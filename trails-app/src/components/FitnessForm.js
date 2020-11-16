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

    onFormSubmit = async (event) => {
        event.preventDefault();
        const name = this.state.name;
        const age = this.state.age;
        const hikingXP = this.state.hikingXP;
        const exerciseFrequency = this.state.exerciseFrequency;
        this.setState({
            name: '',
            age: '',
            hikingXP: '',
            exerciseFrequency: '',
        });
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
                    type='number'
                    placeholder = 'Age'
                />
            </label>
            <br></br>
            <label>Hiking Experience:
                <input
                    id='hikingXP'
                    name='hikingXP'
                    type='number'
                    placeholder = 'Hiking Experience'
                />
            </label>
            <br></br>
            <label>Exercise Frequency: 
                <input
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