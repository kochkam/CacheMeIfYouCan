import React, { Component } from "react";
import { useParams } from 'react-router-dom';
import Map from '../components/Map'
import Gear from "../classes/Gear.js";


export default function DetailView(props) {
  let {hike_id} = useParams();
  var hike = props.searchObj.results[hike_id];
  var gear = new Gear(hike);
  console.log("the hike:");
  console.log(hike);
  console.log(gear.sun);
  console.log(gear.rain);
  return (
    <div>
    <div className ="detail-row-container" id= {hike.id}>
        <img className="detail-img" src = {hike.largeimgURL}/>
        <div className="detail-column-container">
          <h1 className="detail-text">{hike.title}</h1>
          <h2 className="detail-text">{hike.summary}</h2>
          <div className="detail-row-container">
            <h3 className="detail-text">Difficulty: {hike.activityLevel}</h3>
            <h3 className="detail-text">Distance: {hike.distance} miles</h3>
          </div>
          <div className="detail-row-container">
            <h3 className="detail-text">Current Temp: {hike.temp} F</h3>
            <h3 className="detail-text">Feels Like: {hike.tempFeelsLike} F</h3>
          </div>
          <div className="detail-row-container">
            <h3 className="detail-text">Weather Description: {hike.weather[0].description}</h3>
          </div>
          <Map searchObj = {props.searchObj} hikeIndex = {hike.index}/>
        </div>
    </div>
    <div className = "detail-row-container">
      <h2>Clothing and Gear Recommendations</h2>
      <div className = "detail-column-container">
        <h3>Clothing</h3>
      </div>
      <div className = "detail-column-container">
        <h3>Gear</h3>
      </div>
    </div>
    </div>
  );
}
