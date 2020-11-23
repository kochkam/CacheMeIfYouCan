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
    this.setState({ displayAdvSearch: !this.state.displayAdvSearch });

  }

  render() {
    if(this.state.displayAdvSearch) {
      return (
        <div className="search-container">
          <h1>Find your next trail....</h1>
          <button onClick={this.ToggleDisplay} className="FilterToggle">Go To Basic Search</button>
          <SearchFormAdv searchObj = {this.props.searchObj}/>
        </div>
      );
    } else {
      return (
        <div className="search-container">
          <h1>Find your next trail....</h1>
          <button onClick={this.ToggleDisplay} className="FilterToggle">Go To Advanced Search</button>
          <SearchFormBasic searchObj = {this.props.searchObj}/>
        </div>
      );
    }
  }
}
 
export default Home;