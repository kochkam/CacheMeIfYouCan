import React from 'react';
import { withRouter } from 'react-router-dom';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import CheckBoxComponent from "./FormComponents/CheckBoxComponent"
import RadioComponent from "./FormComponents/RadioComponent.js"
import {RatingDropDown, ResultsDropDown} from "./FormComponents/DropDownComponent.js"

class SearchFormAdv extends React.Component{

    constructor(props) {
        super(props);
        console.log(this.props.searchObj);
        this.state = {
            zip: '',
            error: '',
            distance_value: this.props.searchObj.filter.distanceFilter,
            results_value: this.props.searchObj.filter.resultFilter,
            easy_value: this.props.searchObj.filter.includeEasy,
            intermediate_value: this.props.searchObj.filter.includeIntermediate,
            hard_value: this.props.searchObj.filter.includeHard,
        };
        this.ratingChange = this.ratingChange.bind(this);
        this.resultsChange = this.resultsChange.bind(this);
        this.zipChange = this.zipChange.bind(this);
    }

    resultsChange(val) {
        this.setState({numberOfResults: val});
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
        if(this.state.distance_value>200){
            this.state.distance_value=200
        }
        this.props.history.push('/');
        this.props.searchObj.applyFilters(
            this.state.difficultyChoice,
            this.state.distance_value,
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
                <br></br>
                <div className="DistanceFilters">
                    <h3>I don't want a hike longer than: </h3>
                    <Slider name="distanceChosen" 
                        min={0}
                        max={200} 
                        value={this.state.distance_value}
                        onChange={this.distanceChange} 
                        id="distance"
                    />
                </div>
                <ResultsDropDown searchObj ={this.props.searchObj} resultsChange={this.resultsChange}/>
                <br></br>
                <RadioComponent searchObj ={this.props.searchObj} difficultyChange={this.difficultyChange}/>
                <br></br>
                <h3>Do you also want to see hikes that are easier/harder than your choice above?</h3>
                <h3>Leave these boxes unchecked if you only want to see the Hard/Medium/Easy option you selected above.</h3>
                <div className="MinMaxDifficulty">
                    <CheckBoxComponent handler= {this.minDifficulty} id="Easier"/>
                    <CheckBoxComponent handler= {this.maxDifficulty} id="Harder"/>
                </div>
                <br></br>
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