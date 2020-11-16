import React from 'react';
import { withRouter } from 'react-router-dom';

class FitnessForm extends React.Component{
    state = {
        zip: '',
        error: '',
    }

    onInputChange = (event) => {
        this.setState({
            zip: event.target.value,
            error: '',
        });
    }

    onFormSubmit = async (event) => {
        event.preventDefault();
        const zip = this.state.zip;
        const error = this.validate(zip);
        this.setState({error});
        if (error.length > 0) return;
        this.setState({zip:''});
        this.props.searchObj.zip = zip;
        this.props.searchObj.translateZip().then(() => {
            this.props.history.push('/results-list');
        });
    }


    validate = (zip) => {
        const zipLength = zip.trim().length;
        if (zipLength === 0) return 'Please enter a ZIP code';
        if (isNaN(zipLength)) return 'Please enter a ZIP code';
        return '';
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
        );
      }
}

export default withRouter(SearchForm);