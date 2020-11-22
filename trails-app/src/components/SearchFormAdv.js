import React from 'react';
import { withRouter } from 'react-router-dom';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class SearchFormAdv extends React.Component{

    constructor () {
        super();
        this.state = {
            zip: '',
            error: '',
            distanceChoice: 20,
            difficultyChoice: 1,
            ratingChoice: 0,
            numberOfResults: 10,
        };
    }

    onDistanceChange = (event) => {
        this.setState({distanceChoice: event});
    }

    onDifficultyChange = (event) => {
        this.setState({
            difficultyChoice: event.target.value
        });
    }

    onResultsChange = (event) => {
        this.setState({
            numberOfResults: event.target.value
        });
    }

    onRatingChange = (event) => {
        this.setState({
            ratingChoice: event.target.value
        });
    }

    onZipChange = (event) => {
        this.setState({
            zip: event.target.value
        });
    }

    onFormSubmit = async (event) => {
        event.preventDefault();
        const zip = this.state.zip;
        const error = this.validate(zip);
        this.setState({error});
        if (error.length > 0) return;
        this.setState({zip:''});
        this.props.history.push('/');
        this.props.searchObj.applyFilters(
            this.state.difficultyChoice,
            this.state.ratingChoice,
            this.state.distanceChoice,
            this.state.numberOfResults);
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
                    <h3>I want the rating of the hike to be at least this: </h3>
                    <select onChange={this.onRatingChange} id="rating" name="rating">
                        <option value="1">One Star</option>
                        <option value="2">Two Stars</option>
                        <option value="3">Three stars</option>
                        <option value="4">Four stars</option>
                        <option value="5">Five stars</option>
                    </select>
                    <br/>
                    <h3>I want hikes within the following total length: </h3>
                    <input
                        id='distance'
                        className={ this.state.error ? 'error' : '' }
                        name='distance'
                        type='text'
                        placeholder = 'Max Miles'
                        onChange={this.onResultsChange}
                    />
                    <br/>
                    <h3>I don't want to see more than this many results: </h3>
                    <input
                        id='results'
                        className={ this.state.error ? 'error' : '' }
                        name='results'
                        type='text'
                        placeholder = 'Number of Results'
                        onChange={this.onDistanceChange}
                    />
                    <br/>
                    <h3>I'm looking for hikes that are... </h3>
                    <input onChange={this.onDifficultyChange} type="radio" id="easy" name="Difficulty" value="1"/>
                    <label for="easy">Easy</label>
                    <input onChange={this.onDifficultyChange} type="radio" id="medium" name="Difficulty" value="2"/>
                    <label for="medium">Medium</label>
                    <input onChange={this.onDifficultyChange} type="radio" id="hard" name="Difficulty" value="3"/>
                    <label for="hard">Hard</label>
                    <br/>
                    <input
                        id='zip'
                        className={ this.state.error ? 'error' : '' }
                        name='zip'
                        type='text'
                        value={this.state.zip}
                        placeholder = 'Enter ZIP Code....'
                        onChange={this.onZipChange}
                    />
                    <button className='SearchBtn' type='submit'>Search
                        <i className='SearchBtn'></i>
                    </button>
            </form>
        );
    }
}

export default withRouter(SearchFormAdv);