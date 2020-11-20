import React, { Component } from "react";
import ListItem from '../components/ListItem'
import LinkButton from "../components/LinkButton";


export default function ResultsList(props) {
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
