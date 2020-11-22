import React from "react";

class RadioComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {difficulty:5};
      }
      
      changeValue = (event) => {
        this.setState({
            difficulty: event.target.value,
        });
        this.props.difficultyChange(event.target.value);
    }
    
      render() {
        return (
            <div className="DifficultyFilters">
                <p>I'm looking for hikes that are... </p>
                <input onChange={this.changeValue} type="radio" id="easy" name="Difficulty" value="1"/>
                <label for="easy">Easy</label>
                <input onChange={this.changeValue} type="radio" id="medium" name="Difficulty" value="2"/>
                <label for="medium">Medium</label>
                <input onChange={this.changeValue} type="radio" id="hard" name="Difficulty" value="3"/>
                <label for="hard">Hard</label>
            </div>
            
        );
      }
    }

export default RadioComponent