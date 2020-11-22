import React, { Component } from "react";
import SearchForm from '../components/SearchForm';
import AdvSearch from '../components/AdvSearch/AdvSearch';
 
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
          <button onClick={this.ToggleDisplay} className="FilterToggle">Advanced Search</button>
          <AdvSearch searchObj = {this.props.searchObj}/>
        </div>
      );
    } else {
      return (
        <div className="search-container">
          <h1>Find your next trail....</h1>
          <button onClick={this.ToggleDisplay} className="FilterToggle">Advanced Search</button>
          <SearchForm searchObj = {this.props.searchObj}/>
        </div>
      );
    }
  }
}
 
export default Home;