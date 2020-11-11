import React from 'react';
import AdvSearch from './AdvSearchControls';
import './AdvSearch.css';

class AdvSearchContainer extends React.Component{

    constructor () {
        super();
        this.state = {
            isVisible: false
        };
        this.toggleDisplay = this.toggleDisplay.bind(this)
    }


    
    ToggleDisplay (e) {
        this.setState({isVisible: !this.state.isVisible});
    }


    render() {
        return (
            <div className="AdvSearchContainer">
                <div className="Adv-Search-Toggle">
                    <button onClick={this.onToggle} className="FilterBtn">Filter</button>
                </div>
                {this.state.isVisible && <AdvSearch/>}
            </div>
            
        );
      }
}

export default AdvSearchContainer;