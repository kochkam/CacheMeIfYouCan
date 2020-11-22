import React from 'react';
import './AdvSearch.css';
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

class AdvSearch extends React.Component{

    constructor () {
        super();
        this.state = {
            isVisible: false,
            error: '',
            distanceChoice: 20,
            difficultyChoice: '',
            ratingChoice: 0,
            numberOfResults: 10,
            maxDifficultyChoice: 0,
            minDifficultyChoice: 0,
        };
        this.ToggleDisplay = this.ToggleDisplay.bind(this)
    }

    onDistanceChange = (event) => {
        this.setState({distanceChoice: event});
    }

    onDifficultyChange = (event) => {
        this.setState({
            difficultyChoice: event.target.value,
        });
    }

    minDifficultyChange = (event) => {
        this.setState({
            minDifficultyChoice: event.target.value,
        });
    }

    maxDifficultyChange = (event) => {
        this.setState({
            maxDifficultyChoice: event.target.value,
        });
    }

    onResultsChange = (event) => {
        this.setState({
            numberOfResults: event.target.value,
        });
    }

    onRatingChange = (event) => {
        this.setState({
            ratingChoice: event.target.value,
        });
    }


    ToggleDisplay (e) {
        this.setState({isVisible: !this.state.isVisible});
    }

    onFormSubmit = async (event) => {
        event.preventDefault();
        const distanceChoice = this.state.distanceChoice
        this.setState({distanceChoice:''});
        const ratingChoice = this.state.ratingChoice;
        const difficultyChoice = this.state.difficultyChoice;
        const numberOfResults = this.state.numberOfResults;
        const minDifficulty = this.state.minDifficultyChoice;
        const maxDifficulty = this.state.maxDifficultyChoice;
        this.props.searchObj.applyFilters(difficultyChoice, ratingChoice, distanceChoice, numberOfResults, minDifficulty, maxDifficulty);
        console.log("Adv Filter Applied")
    }

    /*
    validate = (distance) => {
        const distanceLength = distance.trim().length;
        if (distanceLength === 0) return 'Please enter a valid number';
        if (isNaN(distanceLength)) return 'Please enter a valid number';
        return '';
    }
    */
    render() {
        return (
            <div>
                <button onClick={this.ToggleDisplay} className="FilterToggle">Advanced Search</button>
                {this.state.isVisible &&
                    <form className="FilterField" onSubmit={this.onFormSubmit}>
                        <div className="RatingFilters">
                        <p>I want the rating of the hike to be at least this: </p>
                            <select onChange={this.onRatingChange} id="rating" name="rating">
                                <option value="1">One Star</option>
                                <option value="2">Two Stars</option>
                                <option value="3">Three stars</option>
                                <option value="4">Four stars</option>
                                <option value="5">Five stars</option>
                            </select>
                        </div>
                        <div className="DistanceFilters">
                            <p>I want hikes within the following total length: </p>
                            <Slider name="distanceChosen" 
                                min="1" 
                                max="200" 
                                step="1"

                                value={this.state.distanceChoice} 
                                onChange={this.onDistanceChange} 
                                id="distance"
                            />
                        </div>
                        <div className="resultNumber">
                        <p>I don't want to see more than this many results: </p>
                            <input
                                id='results'
                                className={ this.state.error ? 'error' : '' }
                                name='results'
                                type='text'
                                placeholder = 'Enter Number of Results to see'
                                onChange={this.onResultsChange}
                            />
                        </div>
                        <p className='error'>{ this.state.error }</p>
                        <p>I'm looking for hikes that are... </p>
                        <div className="DifficultyFilters">
                            <input onChange={this.onDifficultyChange} type="radio" id="hard" name="Difficulty" value="3"/>
                            <label for="hard">Hard</label>
                            <input onChange={this.onDifficultyChange} type="radio" id="medium" name="Difficulty" value="2"/>
                            <label for="medium">Medium</label>
                            <input onChange={this.onDifficultyChange} type="radio" id="easy" name="Difficulty" value="1"/>
                            <label for="easy">Easy</label>
                        </div>
                        <p>Do you also want to see hikes that are easier/harder than your choice above?</p>
                        <p>Leave these boxes unchecked if you only want to see the Hard/Medium/Easy option you selected above.</p>
                        <div className="MinMaxDifficulty">
                            <input onChange={this.minDifficultyChange} type="checkbox" id="MinDiff" name="MinDiff" value="1"/>
                            <label for="MinDiff">Include Easier Hikes</label>
                            <input onChange={this.maxDifficultyChange} type="checkbox" id="MaxDiff" name="MaxDiff" value="1"/>
                            <label for="MaxDiff">Include Harder Hikes</label>
                        </div>
                        <button className='FilterBtn' type='submit'>Apply
                                <i className='FilterBtn'></i>
                        </button>
                    </form>
                }
            </div>
            
        );
      }
}

export default AdvSearch;