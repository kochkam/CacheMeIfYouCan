import React from "react";

class DropDownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ratingChoice:5};
  }
  
  changeValue = (event) => {
    this.setState({
        ratingChoice: event.target.value,
    });
    this.props.ratingChange(event.target.value);
}

  render() {
    return (
        <div className="RatingFilters">
                        <p>I want the rating of the hike to be at least: </p>
                            <select onChange={this.changeValue} id="rating" name="rating">
                                <option value="1">One Star</option>
                                <option value="2">Two Stars</option>
                                <option value="3">Three stars</option>
                                <option value="4">Four stars</option>
                                <option value="5">Five stars</option>
                            </select>
                        </div>
        
    );
  }
}

export default DropDownComponent