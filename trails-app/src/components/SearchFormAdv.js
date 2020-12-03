import React from 'react';
import { withRouter } from 'react-router-dom';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import CheckBoxComponent from "./FormComponents/CheckBoxComponent"

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
        console.log(this.state);
        this.resultsChange = this.resultsChange.bind(this);
        this.distanceChange = this.distanceChange.bind(this);
        this.zipChange = this.zipChange.bind(this);
    }

    zipChange = (event) => {
        this.setState({
            zip: event.target.value,
            error: '',
        });
    }

    resultsChange = (event) => {
        this.props.searchObj.filter.resultFilter = Number(event.target.value);
        console.log(this.props.searchObj);
        this.setState({results_value: event.target.value});
    }

    distanceChange = (val) => {
        this.props.searchObj.filter.distanceFilter = val;
        this.setState({distance_value: val});
    }

    easyChange = (val) => {
        this.props.searchObj.filter.includeEasy = val;
        console.log(val);
        console.log(this.props.searchObj.filter.includeEasy);
        this.setState({easy_value: val});
    }

    intermediateChange = (val) => {
        this.props.searchObj.filter.includeIntermediate = val;
        console.log(val);
        console.log(this.props.searchObj.filter.includeIntermediate);

        this.setState({intermediate_value: val});
    }

    hardChange = (val) => {
        this.props.searchObj.filter.includeHard = val;
        console.log(val);
        console.log(this.props.searchObj.filter.includeHard);
        this.setState({hard_value: val});
    }

    onFormSubmit = async (event) => {
        event.preventDefault();

        const zip = this.state.zip;
        const error = this.validate(zip);
        this.setState({error});
        if (error.length > 0) return;
        this.setState({zip:''});

        this.props.history.push('/loading');
        this.props.searchObj.update(zip).then(() => {
            this.props.history.push('/search/results-list');
        });

    }

    validate = (zip) => {
        const zipLength = zip.trim().length;
        if (zipLength === 0) return 'Please enter a ZIP code';
        if (isNaN(zipLength)) return 'Please enter a ZIP code';
        return '';
    }

    render() {
        var profile_text;
        if(this.props.searchObj.userProfile === null){
            profile_text = (<h3>You do not have a hiker profile.</h3>);
        } else{
            profile_text =(
                <h3>Your hiker profile: {this.props.searchObj.userProfile}. Default trails have been adjusted.</h3>
            );
        }
        return (
            <form className="searchField" onSubmit={this.onFormSubmit}>
                <br></br>
                <div className="DistanceFilters">
                    <h3>The longest hike I want to see is {this.state.distance_value} miles.</h3>
                    <Slider name="distanceChosen" 
                        min={0}
                        max={200} 
                        value={this.state.distance_value}
                        onChange={this.distanceChange} 
                        id="distance"
                    />
                </div>
                <h3>I don't want to see more than <select value={this.state.results_value} onChange={this.resultsChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                    <option value="200">200</option>
                </select> hikes.</h3>
                <br></br>
                {profile_text}
                <h3>Adjust the difficulty of the hikes you would like to see.</h3>
                <div className="MinMaxDifficulty">
                    <CheckBoxComponent handler={this.easyChange} currentVal={this.state.easy_value} id="Easy"/>
                    <CheckBoxComponent handler={this.intermediateChange} currentVal={this.state.intermediate_value} id="Intermediate"/>
                    <CheckBoxComponent handler={this.hardChange} currentVal={this.state.hard_value} id="Hard"/>

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