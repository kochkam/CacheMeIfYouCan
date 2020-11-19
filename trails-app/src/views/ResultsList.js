import React, { Component } from "react";
import SearchResults from '../classes/SearchResults'
import ListItem from '../components/ListItem'
import Hike from '../classes/Hike';
import LinkButton from "../components/LinkButton";
import { useParams } from 'react-router-dom';

// JP CODE SMELL: DEAD CODE - unused imports above
export default function ResultsList(props) {

  console.log("I'm in the resultslist.js");
  console.log(props.searchObj.results);
  console.log(props.searchObj.results.length);
  if (props.searchObj.results.length == 0){
    return (
      <div className = 'results-list'>
        <p>No Results Found</p>
      </div>
    );
  }
  else {
    return (
      // Build results list    
      // for each hike in currentSearch.results render ListItem
      <div className = 'results-list'>
      {props.searchObj.results.map(
        hike => (
          <LinkButton exact to={"/detail-view/" + hike.index}>
            <ListItem id = {hike.id} title = {hike.title} summary = {hike.summary} activityLevel = {hike.activityLevel} img = {hike.largeimgURL} distance = {hike.distance} temp = {hike.temp}/>
          </LinkButton>
        )
      )}
      </div>
    );
  }
  
}
