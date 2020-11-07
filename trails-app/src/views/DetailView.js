import React, { Component } from "react";
import { useParams } from 'react-router-dom';
import Map from '../components/Map'

/*
function getDetails(hike_id, searchResult) {
  
  return {
    id: hike_id,
    img: "https://www.nps.gov/jotr/learn/nature/images/JoshuaTrees_LMcAfee.jpg",
    title: "Joshua Tree",
    summary: "Joshua Tree National Park is an American national park in southeastern California, east of Los Angeles and San Bernardino, near Palm Springs.",
    activityLevel: "Easy",
    distance: "5 miles",
    temp: "70 F"
  }
  
 return ;
}
*/

export default function DetailView(props) {
  let {hike_id} = useParams();
  console.log(hike_id)
  var props = props.searchResult[hike_id];
  return (
    <div className ="detail-row-container" id= {props.id}>
        <img className="detail-img" src = {props.imgURL}/>
        <div className="detail-column-container">
          <h1 className="detail-text">{props.title}</h1>
          <h2 className="detail-text">{props.summary}</h2>
          <div className="detail-row-container">
            <h3 className="detail-text">Difficulty: {props.activityLevel}</h3>
            <h3 className="detail-text">Distance: {props.distance}</h3>
            <h3 className="detail-text">Current Temp: {props.temp}</h3>
          </div>
          <Map />
        </div>
    </div>
  );
}
