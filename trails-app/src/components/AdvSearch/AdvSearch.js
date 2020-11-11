import React from 'react';
import AdvSearchOptions from './AdvSearhOptions';
import AdvSearchControls from './AdvSearchControls';
import './AdvSearch.css';

class AdvSearch extends React.Component{

    constructor () {
        super();
        this.state = {
            isVisible: false
        };
        this.ToggleDisplay = this.ToggleDisplay.bind(this)
    }


    
    ToggleDisplay (e) {
        this.setState({isVisible: !this.state.isVisible});
    }

    onFormSubmit = async (event) => {
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


    render() {
        return (
            <div>
                <button onClick={this.ToggleDisplay} className="FilterToggle">Advanced Search</button>
                {this.state.isVisible &&
                    <form className="FilterField" onSubmit={this.onFormSubmit}>
                    <div>
                        <input type="radio" id="hard" name="Difficulty" value="hard"/>
                        <label for="hard">Hard</label>
                        <input type="radio" id="medium" name="Difficulty" value="medium"/>
                        <label for="medium">Medium</label>
                        <input type="radio" id="easy" name="Difficulty" value="easy"/>
                        <label for="easy">Easy</label>
                        <button className='FilterBtn' type='submit'>Apply
                            <i className='FilterBtn'></i>
                        </button>
                    </div>
                    </form>
                }
            </div>
            
        );
      }
}

export default AdvSearch;