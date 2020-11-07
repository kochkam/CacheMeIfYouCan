import React, { Component } from "react";
import { useParams } from 'react-router-dom';
import Map from '../components/Map'


export default function DetailView(props) {
  let {hike_id} = useParams();
  var hike = props.searchObj.results[hike_id];
  console.log("the hike:")
  console.log(hike)
  return (
    <div className ="detail-row-container" id= {hike.id}>
        <img className="detail-img" src = {hike.largeimgURL}/>
        <div className="detail-column-container">
          <h1 className="detail-text">{hike.title}</h1>
          <h2 className="detail-text">{hike.summary}</h2>
          <div className="detail-row-container">
            <h3 className="detail-text">Difficulty: {hike.activityLevel}</h3>
            <h3 className="detail-text">Distance: {hike.distance}</h3>
            <h3 className="detail-text">Current Temp: {hike.temp}</h3>
          </div>
          <Map searchObj = {props.searchObj} hikeIndex = {hike.index}/>
        </div>
    </div>
  );
}
