import React from "react";
import Select from 'react-select';

class DropDownComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {ratingChoice:"5"};
  }

  /*
<select DefaultValue = {this.props.searchObj.filter.ratingFilter || this.state.ratingChice} onChange={this.changeValue} id="rating" name="rating">
                                <option value="1">One Star</option>
                                <option value="2">Two Stars</option>
                                <option value="3">Three stars</option>
                                <option value="4">Four stars</option>
                                <option value="5">Five stars</option>
                            </select>
  */


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
                        <p>I want the rating of the hike to be at least: </p>
                            
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

export default DropDownComponent