import React from "react";

class DropDownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ratingChoice:"5"};
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
                                <option checked={this.props.searchObj.filter.ratingFilter==="1" || this.state.ratingChoice === "1"} value="1">One Star</option>
                                <option checked={this.props.searchObj.filter.ratingFilter==="2" || this.state.ratingChoice === "2"} value="2">Two Stars</option>
                                <option checked={this.props.searchObj.filter.ratingFilter==="3" || this.state.ratingChoice === "3"} value="3">Three stars</option>
                                <option checked={this.props.searchObj.filter.ratingFilter==="4" || this.state.ratingChoice === "4"} value="4">Four stars</option>
                                <option checked={this.props.searchObj.filter.ratingFilter==="5" || this.state.ratingChoice === "5"} value="5">Five stars</option>
                            </select>
                        </div>
        
    );
  }
}

export default DropDownComponent