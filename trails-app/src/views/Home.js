import React, { Component } from "react";
import SearchForm from '../components/SearchForm';
import AdvSearchContainer from '../components/AdvSearch/AdvSearch';
 
class Home extends Component {
  render() {
    return (
      <div className="search-container">
        <h1>Find your next trail....</h1>
        <AdvSearchContainer searchObj = {this.props.searchObj}/>
        <SearchForm searchObj = {this.props.searchObj}/>
      </div>
    );
  }
}
 
export default Home;