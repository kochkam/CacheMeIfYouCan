import React, { Component } from "react";
import SearchResults from '../classes/SearchResults'
import ListItem from '../components/ListItem'
import Hike from '../classes/Hike';
import LinkButton from "../components/LinkButton";
import { useParams } from 'react-router-dom';



// Function is triggered when hike is clicked and id of hike is passed in
// TRIGGER RENDERING DETAIL VIEW HERE AND HIDE RESULTS LIST
function hikeClick(hikeID){
  console.log("clicked Hike: " + hikeID);
}

class TestList extends React.Component{
  constructor(props){
    super(props);
    // currentSearch object from props which contains assembled list of hikes
    this.zip = 95050;
    this.state = {loaded: false};
    console.log(props);
  }

  render() {
    // TEMPORARY BUILDING OF RESULTS - This will need to happen during the search
    this.props.searchObj.translateZip(this.zip).then(() => {
      this.setState({loaded: true});
    });
    const loaded = this.state.loaded;
    let toRender;
    if(loaded){
      //for (var i = 1; i <= 10; i++){
      //  props.searchObj.results.push(new Hike(i, "Title "+ i, "This is the summary for Hike " + i, i, "https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1078&q=80", i, i));
      //}
      if (this.props.searchObj.results.length == 0){
        toRender = (
          <div className = 'results-list'>
            <p>No Results Found</p>
          </div>
        );
      }
      else {
        toRender = (

          // Build results list    
          // for each hike in currentSearch.results render ListItem
          <div className = 'results-list'>
          {this.props.searchObj.results.map(
            hike => (
              <LinkButton exact to={"/detail-view/" + hike.id}>
                <ListItem id = {hike.id} title = {hike.title} summary = {hike.summary} activityLevel = {hike.activityLevel} img = {hike.imgURL} distance = {hike.distance} temp = {hike.temp} clickFunction = {hikeClick}/>
              </LinkButton>
            )
          )}
          </div>
        );
      }
    } else {
      toRender = (<div className="loading-text">Loading</div>);
    }
    return toRender;
  }
}

export default TestList;