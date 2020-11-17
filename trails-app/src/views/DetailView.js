import React, { Component } from "react";
import { useParams } from 'react-router-dom';
import Map from '../components/Map'
import Gear from "../classes/Gear.js";


export default function DetailView(props) {
  let {hike_id} = useParams();
  var hike = props.searchObj.results[hike_id];
  var gear = new Gear(hike);

  return (
      <div className ="detail-row-container" id= {hike.id}>
          <img className="detail-img" src = {hike.largeimgURL}/>
          <div className="detail-column-container">
            <h1 className="detail-text">{hike.title}</h1>
            <h2 className="detail-text">{hike.summary}</h2>
            <div className="detail-row-container">
              <h3 className="detail-text">Difficulty: {hike.activityLevel}</h3>
              <h3 className="detail-text">Distance: {hike.distance} miles</h3>
              <h3 className="detail-text">Vertical Ascent: {hike.ascent}</h3>
            </div>
            <div className="detail-row-container">
              <h3 className="detail-text">Current Temp: {hike.temp} F</h3>
              <h3 className="detail-text">Feels Like: {hike.tempFeelsLike} F</h3>
            </div>
            <div className="detail-row-container">
              <h3 className="detail-text">Weather Description: {hike.weather[0].description}</h3>
            </div>
            <Map searchObj = {props.searchObj} hikeIndex = {hike.index}/>
            <h2>Gear Recommendations</h2>
            <div className = "detail-row-container">
              <div className = "detail-column-container">
                <div className = "detail-row-container">
                  <i class="fas fa-hat-cowboy-side" />
                  <h3>Head: {gear.head}</h3>
                </div>
                <div className = "detail-row-container">
                  <i class="fas fa-tshirt"></i>
                  <h3>Top: {gear.top}</h3>
                </div>
                <div className = "detail-row-container">
                  <i class="fas fa-socks"></i>
                  <h3>Bottom: {gear.bottom}</h3>
                </div>
                <div className = "detail-row-container">
                  <i class="fas fa-mitten"></i>
                  <h3>Other: {gear.other.map((item) => <h3>{item}</h3>)}</h3>
                </div>
              </div>
              <div className = "detail-column-container">
                <div className = "detail-row-container">
                  <i class="fas fa-utensils"></i>
                  <h3>Food: {gear.head}</h3>
                </div>
                <div className = "detail-row-container">
                  <i class="fas fa-tint"></i>
                  <h3>Water: {gear.head}</h3>
                </div>
              </div>
            </div>
          </div>
      </div>
  );
}
