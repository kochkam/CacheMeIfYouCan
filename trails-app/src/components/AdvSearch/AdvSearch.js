import React from 'react';
import AdvSearchOptions from './AdvSearhOptions';
import AdvSearchControls from './AdvSearchControls';
import './AdvSearch.css';

class AdvSearch extends React.Component{

    constructor () {
        super();
        this.state = {
            isVisible: false,
            error: '',
            distanceChoice: '',
            difficultyChoice: '',
            ratingChoice: 0,
        };
        this.ToggleDisplay = this.ToggleDisplay.bind(this)
    }

    onDistanceChange = (event) => {
        this.setState({
            distanceChoice: event.target.value,
            error: '',
        });
    }

    onDifficultyChange = (event) => {
        this.setState({
            difficultyChoice: event.target.value,
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
        const error = this.validate(distanceChoice)
        this.setState({error});
        if (error.length > 0) return;
        this.setState({distanceChoice:''});
        const ratingChoice = this.state.ratingChoice;
        const difficultyChoice = this.state.difficultyChoice;
        this.props.searchObj.applyFilters(difficultyChoice, ratingChoice, distanceChoice);
        /*
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
        */
       console.log("Adv Filter Applied")
    }

    validate = (distance) => {
        const distanceLength = distance.trim().length;
        if (distanceLength === 0) return 'Please enter a valid number';
        if (isNaN(distanceLength)) return 'Please enter a valid number';
        return '';
    }

    render() {
        return (
            <div>
                <button onClick={this.ToggleDisplay} className="FilterToggle">Advanced Search</button>
                {this.state.isVisible &&
                    <form className="FilterField" onSubmit={this.onFormSubmit}>
                        <div className="RatingFilters">
                        <select onChange={this.onRatingChange} id="rating" name="rating">
                            <option value="1">One Star</option>
                            <option value="2">Two Stars</option>
                            <option value="3">Three stars</option>
                            <option value="4">Four stars</option>
                            <option value="5">Five stars</option>
                        </select>
                        </div>
                        <div className="DistanceFilters">
                            <input
                                className= { this.state.error ? 'error' : ''} 
                                type='text' 
                                value={this.state.distanceChoice}
                                onChange={this.onDistanceChange}
                                name="distanceChosen"
                                placeholder="Please enter a distance in miles - maximum of 200"
                            />
                        </div>
                        <p className='error'>{ this.state.error }</p>
                        <div className="DifficultyFilters">
                            <input onChange={this.onDifficultyChange} type="radio" id="hard" name="Difficulty" value="3"/>
                            <label for="hard">Hard</label>
                            <input onChange={this.onDifficultyChange} type="radio" id="medium" name="Difficulty" value="2"/>
                            <label for="medium">Medium</label>
                            <input onChange={this.onDifficultyChange} type="radio" id="easy" name="Difficulty" value="1"/>
                            <label for="easy">Easy</label>
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