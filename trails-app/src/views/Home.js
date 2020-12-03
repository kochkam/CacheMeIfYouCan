import React, { Component } from "react";
import SearchFormBasic from '../components/SearchFormBasic';
import SearchFormAdv from '../components/SearchFormAdv';
 
class Home extends Component {

  constructor(){
    super();
    this.state = { displayAdvSearch: false };
    this.ToggleDisplay = this.ToggleDisplay.bind(this);
  }

  ToggleDisplay(e) {
    this.props.searchObj.toggleFilters();
    this.setState({ displayAdvSearch: !this.state.displayAdvSearch });
  }

  render() {
    if(this.state.displayAdvSearch) {
      return (
        <div className="search-container">
          <h1>Find your next trail....</h1>
          <div>
            <span class="tooltip">&#10067;<span class="tooltiptext"><div>Click here to return to a basic zip code search.</div></span></span>
            <button onClick={this.ToggleDisplay} className="FilterToggle">Go To Basic Search</button>
          </div>
          <SearchFormAdv searchObj = {this.props.searchObj}/>
        </div>
      );
    } else {
      return (
        <div className="search-container">
          <h1>Find your next trail....</h1>
          <div>
            <span class="tooltip">&#10067;<span class="tooltiptext"><div>Advanced search will allow you to customize your search results by adding filters.</div></span></span>
            <button onClick={this.ToggleDisplay} className="FilterToggle">Go To Advanced Search</button>
          </div>
          <SearchFormBasic searchObj = {this.props.searchObj}/>
        </div>
      );
    }
  }
}
 
export default Home;