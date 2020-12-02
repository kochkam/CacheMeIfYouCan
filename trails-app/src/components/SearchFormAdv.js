import React from 'react';
import { withRouter } from 'react-router-dom';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import CheckBoxComponent from "./FormComponents/CheckBoxComponent"
import RadioComponent from "./FormComponents/RadioComponent.js"
import DropDownComponent from "./FormComponents/DropDownComponent.js"
import TextBoxComponent from "./FormComponents/TextBoxComponent"

class SearchFormAdv extends React.Component{

    constructor () {
        super();
        this.state = {
            zip: '',
            error: '',
            distanceChoice: 20,
            difficultyChoice: '',
            ratingChoice: 0,
            numberOfResults: 10,
            maxDifficultyChoice: true,
            minDifficultyChoice: true,
        };
        this.minDifficulty = this.minDifficulty.bind(this);
        this.maxDifficulty = this.maxDifficulty.bind(this);
        this.ratingChange = this.ratingChange.bind(this);
        this.resultsChange = this.resultsChange.bind(this);
        this.difficultyChange = this.difficultyChange.bind(this);
        this.zipChange = this.zipChange.bind(this);
    }

    minDifficulty() {
        this.setState({minDifficultyChoice:!this.state.minDifficultyChoice})
    }

    maxDifficulty() {
        this.setState({maxDifficultyChoice:!this.state.maxDifficultyChoice})
    }

    ratingChange(val) {
        this.setState({ratingChoice: val});
    }
    resultsChange(val) {
        this.setState({numberOfResults: val});
    }
    difficultyChange(val) {
        this.setState({difficultyChoice: val});
    }
    distanceChange = (event) => {
        this.setState({distanceChoice: event});
    }
    zipChange = (event) => {
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
        var minDifficulty = 0;
        var maxDifficulty = 0; 
        if(this.state.minDifficultyChoice){
            minDifficulty = 1
        }
        if(this.state.maxDifficultyChoice){
            maxDifficulty = 1;
        }
        if(this.state.numberOfResults>500){
            this.state.numberOfResults=500
        }
        if(this.state.distanceChoice>200){
            this.state.distanceChoice=200
        }
        this.props.history.push('/');
        this.props.searchObj.applyFilters(
            this.state.difficultyChoice,
            this.state.ratingChoice,
            this.state.distanceChoice,
            this.state.numberOfResults,
            minDifficulty,
            maxDifficulty);
        this.props.searchObj.update(zip).then(() => {
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
            <form className="searchField" onSubmit={this.onFormSubmit}>
                <DropDownComponent searchObj ={this.props.searchObj} ratingChange= {this.ratingChange}/>
                <div className="DistanceFilters">
                    <h3>I want hikes within the following total length: </h3>
                    <Slider name="distanceChosen" 
                        min="1" 
                        max="200" 
                        step="1"

                        value={this.state.distanceChoice} 
                        onChange={this.distanceChange} 
                        id="distance"
                    />
                </div>
                <TextBoxComponent searchObj ={this.props.searchObj} resultsChange={this.resultsChange}/>
                <RadioComponent searchObj ={this.props.searchObj} difficultyChange={this.difficultyChange}/>
                <h3>Do you also want to see hikes that are easier/harder than your choice above?</h3>
                <h3>Leave these boxes unchecked if you only want to see the Hard/Medium/Easy option you selected above.</h3>
                <div className="MinMaxDifficulty">
                    <CheckBoxComponent handler= {this.minDifficulty} id="Easier"/>
                    <CheckBoxComponent handler= {this.maxDifficulty} id="Harder"/>
                </div>
                <input
                    id='zip'
                    className={ this.state.error ? 'error' : '' }
                    name='zip'
                    type='text'
                    value={this.state.zip}
                    placeholder = 'Enter ZIP Code....'
                    onChange={this.zipChange}
                />
                <button className='SearchBtn' type='submit'>Search
                    <i className='SearchBtn'></i>
                </button>
            </form>
        );
    }
}

export default withRouter(SearchFormAdv);