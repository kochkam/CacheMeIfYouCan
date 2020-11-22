import React from 'react';
import { useParams } from 'react-router-dom';
import Map from '../components/Map'
import Gear from '../classes/Gear.js';
import './DetailView.css';


export default function DetailView(props) {
  let {hike_id} = useParams();
  var hike = props.searchObj.results[hike_id];
  // build gear object from hike selected for detail view
  var gear = new Gear(hike);

  return (
    <div className ="detail-row-container" id= {hike.id}>
      <img className="detail-img" src = {hike.largeimgURL}/>
      <div className="detail-column-container" style={{alignItems:"center"}}>
        <h1 className="detail-text">{hike.title}</h1>
        <h2 className="detail-text">{hike.summary}</h2>
        <div className="detail-row-container">
          <div className="detail-column-container-right">
            <h3>Difficulty:</h3>
            <h3>Distance:</h3>
            <h3>Vertical Ascent:</h3>
          </div>
          <div className="detail-column-container-left">
            <p>{hike.activityLevel}</p>
            <p>{hike.distance} miles</p>
            <p>{hike.ascent}</p>
          </div>
          <div className="detail-column-container-right">
            <h3>Current Temp:</h3>
            <h3>Feels Like:</h3>
            <h3>Weather:</h3>
          </div>
          <div className="detail-column-container-left">
            <p>{hike.temp} F</p>
            <p>{hike.tempFeelsLike} F</p>
            <p>{hike.weather[0].description}</p>
          </div>
        </div>
        <Map searchObj = {props.searchObj} hikeIndex = {hike.index}/>
        <h2 className="detail-text">Gear Recommendations</h2>
        {/* Top attribute equation: -5px + (-8px * number of lines after first line) */}
        <div className = "detail-row-container">
          <div className = "detail-column-container-left">
            <i class="fas fa-hat-cowboy-side tooltip"> Head: {gear.head}
              <span class="tooltiptext">
                FILL IN<br/>
                TWO LINES
              </span>
            </i>
            <i class="fas fa-tshirt tooltip"> Top: {gear.top}
              <span class="tooltiptext">
                FILL IN<br/>
                TWO LINES
              </span>
            </i>
            <i class="fas fa-socks tooltip"> Bottom: {gear.bottom}
              <span class="tooltiptext">
                FILL IN<br/>
                TWO LINES
              </span>
            </i>
            <i class="fas fa-mitten tooltip"> Other: {gear.other}
              <span class="tooltiptext">
                FILL IN<br/>
                TWO LINES
              </span>
            </i>
          </div>
          <div className = "detail-column-container-left">
            <i class="fas fa-utensils tooltip"> Food: {gear.calories} calories
              <span class="tooltiptext" style={{top:"-61px"}}>
                The average number of calories<br/>
                you will lose during this hike<br/>
                (based on a 160lb person<br/>
                walking around 2mph).<br/>
                This is equal to about:<br/>
                {Math.ceil(gear.calories/105)} banana(s)!<br/>
                If you are trying to lose weight,<br/>
                you can eat slightly less.
              </span>
            </i>
            <i class="fas fa-tint tooltip"> Water: {gear.water} oz
              <span class="tooltiptext" style={{top:"-29px"}}>
                The average amount of water you<br/>
                should drink during this hike.<br/>
                (based on 6-12oz needed per<br/>
                15 minutes of hiking)
              </span>
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
