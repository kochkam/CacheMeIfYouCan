import React, { Component } from "react";
import SearchForm from '../components/SearchForm';
 
class Home extends Component {
  render() {
    return (
      <div className="search-container">
        <h1>Find your next trail....</h1>
        <SearchForm searchObj = {this.searchObj}/>
      </div>
    );
  }
}
 
export default Home;