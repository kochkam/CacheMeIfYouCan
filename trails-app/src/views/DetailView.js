import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import Map from '../components/Map'
import Gear from '../classes/Gear.js';
import './DetailView.css';


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
              <div className="detail-column-container">
                <h3>Difficulty: {hike.activityLevel}</h3>
                <h3>Distance: {hike.distance} miles</h3>
                <h3>Vertical Ascent: {hike.ascent}</h3>
              </div>
              <div className="detail-column-container">
                <h3>Current Temp: {hike.temp} F</h3>
                <h3>Feels Like: {hike.tempFeelsLike} F</h3>
                <h3>Weather Description: {hike.weather[0].description}</h3>
              </div>
            </div>
            <Map searchObj = {props.searchObj} hikeIndex = {hike.index}/>
            <h2>Gear Recommendations</h2>
            <div className = "detail-row-container">
              <div className = "detail-column-container">
                <i class="fas fa-hat-cowboy-side"> Head: {gear.head}</i>
                <i class="fas fa-tshirt"> Top: {gear.top}</i>
                <i class="fas fa-socks"> Bottom: {gear.bottom}</i>
                <i class="fas fa-mitten"> Other: {gear.other}</i>
              </div>
              <div className = "detail-column-container">
                {/* Based on 105 calories per banana */}
                <i class="fas fa-utensils"> Food: {gear.calories} calories</i>
                <i class="fas fa-tint"> Water: {gear.water} oz</i>
              </div>
            </div>
          </div>
      </div>
  );
}
