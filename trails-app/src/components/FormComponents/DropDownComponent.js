import React from "react";
import Select from 'react-select';

class RatingDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ratingChoice:"5"};
  }

  ratingOptions = () => {
    return [
      {value:"1", label:"One Star"},
      {value:"2", label:"Two Stars"},
      {value:"3", label:"Three Stars"},
      {value:"4", label:"Four Stars"},
      {value:"5", label:"Five Stars"},
    ]
  }
  
  changeValue = (option) => {
    this.setState({
        ratingChoice: option.value,
    });
    this.props.ratingChange(option.value);
}

  render() {
    var currentSelection = this.props.searchObj.filter.ratingFilter
    if(currentSelection ==  null){
      currentSelection = this.state.ratingChoice
    }
    return (
        <div className="RatingFilters">
                        <h3>I want the rating of the hike to be at least: </h3>
                            
                            <Select onChange={this.changeValue} id="rating" name="rating"
                              value={this.ratingOptions().find(op => {
                                return op.value === currentSelection
                              })}
                              options={this.ratingOptions()}
                            />
                        </div>
        
    );
  }
}

class ResultsDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {resultsChoice:"10"};
  }

  resultsOptions = () => {
    return [
      {value:"5", label:"5"},
      {value:"10", label:"10"},
      {value:"50", label:"50"},
      {value:"100", label:"100"},
    ]
  }
  
  changeValue = (option) => {
    this.setState({
        resultsChoice: option.value,
    });
    this.props.resultsChange(option.value);
}

  render() {
    var currentSelection = this.props.searchObj.filter.resultsFilter
    if(currentSelection ==  null){
      currentSelection = this.state.resultsChoice
    }
    return (
        <div className="ResultsFilters">
                        <h3>I don't want to see more than this many hikes: </h3>
                            
                            <Select onChange={this.changeValue} id="results" name="results"
                              value={this.resultsOptions().find(op => {
                                return op.value === currentSelection
                              })}
                              options={this.resultsOptions()}
                            />
                        </div>
        
    );
  }
}

export {RatingDropDown, ResultsDropDown}